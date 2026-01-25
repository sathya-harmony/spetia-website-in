import React, { useRef, useState, useEffect } from 'react';
import { proposal } from '../data/proposalData';
import PageRenderer from '../components/proposal/PageRenderer';
import TextToolbar from '../components/proposal/TextToolbar';
import PageControls from '../components/proposal/PageControls';
import AddPageMenu from '../components/proposal/AddPageMenu';

// Deep clone helper to create new page instances
const createNewPage = (type) => {
    const id = `page-${Date.now()}`;
    const base = { id, type, data: {} };

    // Default Data Templates
    if (type === 'cover') {
        base.data = {
            title: ["New", "Proposal"],
            subtitle: "Add subtitle here...",
            clientParams: { name: "Client Name", ref: "REF-001" }
        };
    } else if (type === 'letter') {
        base.data = {
            recipient: { name: "Recipient Name", title: "Title", company: "Company" },
            content: ["Start typing your letter here..."],
            signoff: "Sincerely,",
            sender: { name: "Your Name", title: "Title", company: "Spetia Engineering" }
        };
    } else if (type === 'service') {
        base.data = {
            title: "Service Title",
            description: "Service description...",
            image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070",
            tools: ["Tool 1", "Tool 2"],
            sections: [
                { title: "Section 1", features: ["Feature 1", "Feature 2"] }
            ],
            pageNumber: "01"
        };
    } else if (type === 'pricing') {
        base.data = {
            title: "Investment",
            subtitle: "Pricing details...",
            pageNumber: "02",
            table: {
                headers: ["Item", "Unit", "Rate", "Qty", "Total"],
                rows: [{ desc: "Item 1", unit: "LS", rate: "100", qty: "1", total: "100" }],
                total: "100"
            }
        };
    }
    return base;
};

const STORAGE_KEY = 'spetia_proposal_state_v2';

const ProposalBuilder = () => {
    // Initialize state from LocalStorage OR default proposal data
    const [pages, setPages] = useState(() => {
        try {
            const saved = localStorage.getItem(STORAGE_KEY);
            if (saved) {
                const parsed = JSON.parse(saved);
                // Basic validation
                if (Array.isArray(parsed) && parsed.length > 0) {
                    return parsed;
                }
            }
            return proposal.pages;
        } catch (e) {
            console.error("Failed to load proposal state", e);
            return proposal.pages;
        }
    });

    // Save to LocalStorage whenever state changes
    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(pages));
    }, [pages]);

    // Smart Merge: Fix Scope of Work if it's still the placeholder
    useEffect(() => {
        const index = pages.findIndex(p => p.type === 'service' && p.data.title === "Scope & Deployment");
        if (index >= 0) {
            const page = pages[index];
            if (page.data.sections?.[0]?.features?.[0]?.includes("BLANK SECTION")) {
                const newFeatures = [
                    "LOD 500 BIM Modeling (All Services: Arch, Str, MEPF)",
                    "Advanced Clash Detection & Resolution",
                    "On-Site BIM Coordination Support",
                    "As-Built Model Updates: Precise dimensions & locations reflecting constructed conditions.",
                    "Asset Data Integration: Embedding non-geometric data (manuals, maintenance schedules) for Facility Management."
                ];
                updatePageData(index, {
                    ...page.data,
                    sections: [
                        { ...page.data.sections[0], features: newFeatures },
                        ...page.data.sections.slice(1)
                    ]
                });
            }
        }

        // Smart Merge: Pricing Update (Check for old total OR missing terms OR missing milestones)
        const priceIndex = pages.findIndex(p => p.type === 'pricing');
        if (priceIndex >= 0) {
            const page = pages[priceIndex];
            // Check if total is the old value OR missing terms OR missing milestones
            if (page.data.table.total.startsWith("40,24") || !page.data.terms || !page.data.milestones) {
                updatePageData(priceIndex, proposal.pages.find(p => p.type === 'pricing').data);
            }
        }
    }, []); // Run once on mount

    const handlePrint = () => {
        window.print();
    };

    const handleSave = () => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(pages));
        alert("Proposal saved locally! You can safely refresh.");
    };

    // Generic update handler passed down to components
    const updatePageData = (index, newData) => {
        const newPages = [...pages];
        newPages[index] = { ...newPages[index], data: newData };
        setPages(newPages);
    };

    const addPage = (type, index) => {
        const newPage = createNewPage(type);
        const newPages = [...pages];
        newPages.splice(index + 1, 0, newPage);
        setPages(newPages);
    };

    const deletePage = (index) => {
        if (confirm("Are you sure you want to delete this page?")) {
            const newPages = [...pages];
            newPages.splice(index, 1);
            setPages(newPages);
        }
    };

    const movePage = (index, direction) => {
        const newPages = [...pages];
        if (direction === 'up' && index > 0) {
            [newPages[index], newPages[index - 1]] = [newPages[index - 1], newPages[index]];
        } else if (direction === 'down' && index < newPages.length - 1) {
            [newPages[index], newPages[index + 1]] = [newPages[index + 1], newPages[index]];
        }
        setPages(newPages);
    };

    const resetProposal = () => {
        if (confirm("Reset everything to default? This cannot be undone.")) {
            setPages(proposal.pages);
            localStorage.removeItem(STORAGE_KEY);
        }
    };

    // Export State to JSON File
    const handleExportJSON = () => {
        const dataStr = JSON.stringify(pages, null, 2);
        const blob = new Blob([dataStr], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = `proposal-${new Date().toISOString().slice(0, 10)}.json`;
        // link.click() works in most modern browsers without appending to body
        link.click();
        URL.revokeObjectURL(url);
    };

    // Import State from JSON File
    const fileInputRef = useRef(null);
    const handleImportClick = () => {
        fileInputRef.current?.click();
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (event) => {
            try {
                const importedData = JSON.parse(event.target.result);
                if (Array.isArray(importedData)) {
                    setPages(importedData);
                    alert("Proposal loaded successfully!");
                } else {
                    alert("Invalid proposal file format.");
                }
            } catch (err) {
                console.error(err);
                alert("Failed to read file.");
            }
        };
        reader.readAsText(file);
        // Reset input
        e.target.value = '';
    };

    return (
        <div className="min-h-screen bg-gray-900 py-10 print:p-0 print:bg-white pb-64">

            <TextToolbar />

            {/* Control Bar - Hidden when printing */}
            <div className="fixed top-0 left-0 right-0 bg-white/10 backdrop-blur-md border-b border-white/10 p-4 z-50 flex justify-between items-center shadow-lg print:hidden">
                <div className="flex items-center gap-4 text-white">
                    <span className="font-bold text-lg tracking-wider">SPETIA PROPOSAL ENGINE</span>
                    <span className="text-white/40 text-sm border-l border-white/20 pl-4 h-6 flex items-center">
                        Interactive Editor. Drag & Drop. Premium.
                    </span>
                </div>
                <div className="flex items-center gap-4">
                    <input
                        type="file"
                        ref={fileInputRef}
                        onChange={handleFileChange}
                        style={{ display: 'none' }}
                        accept=".json"
                    />
                    <div className="flex mr-4 border-r border-white/10 pr-4">
                        <button onClick={handleExportJSON} className="text-white/40 hover:text-white text-xs mr-3 flex items-center gap-1 transition-colors">
                            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                            Save File
                        </button>
                        <button onClick={handleImportClick} className="text-white/40 hover:text-white text-xs flex items-center gap-1 transition-colors">
                            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" /></svg>
                            Load File
                        </button>
                    </div>

                    <button onClick={handleSave} className="text-spetia-orange-500 font-bold uppercase tracking-wider text-xs hover:text-white mr-4 border border-spetia-orange-500 hover:bg-spetia-orange-500 px-4 py-1.5 rounded-full transition-all">
                        Quick Save
                    </button>
                    <button onClick={resetProposal} className="text-white/30 text-xs hover:text-white mr-4">
                        Reset
                    </button>
                    <div className="text-white/50 text-xs font-mono">
                        {pages.length} Pages
                    </div>
                    <button
                        onClick={handlePrint}
                        className="bg-spetia-orange-600 hover:bg-spetia-orange-500 text-white px-6 py-2 rounded-full font-bold uppercase tracking-widest text-xs transition-all shadow-lg hover:shadow-spetia-orange-600/50 flex items-center gap-2"
                    >
                        <span>Export PDF</span>
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Container for pages */}
            <div className="mt-16 print:mt-0 flex flex-col items-center gap-8 print:block print:gap-0">

                {/* Initial Add Menu */}
                {pages.length === 0 && <AddPageMenu onAdd={(type) => addPage(type, -1)} />}

                {pages.map((page, index) => (
                    <div key={page.id} className="flex flex-col items-center w-full">

                        <div className="relative group print:group-hover:none page-container origin-top print:break-after-page print:mb-0">

                            {/* Page Controls Overlay */}
                            <PageControls
                                onDelete={() => deletePage(index)}
                                onMoveUp={() => movePage(index, 'up')}
                                onMoveDown={() => movePage(index, 'down')}
                                isFirst={index === 0}
                                isLast={index === pages.length - 1}
                            />

                            {/* The Page Content - Passing onUpdate to Templates */}
                            <PageRenderer
                                page={page}
                                onUpdate={(newData) => updatePageData(index, newData)}
                            />
                        </div>

                        {/* Add Menu Between Pages */}
                        <div className="print:hidden w-full max-w-[210mm]">
                            <AddPageMenu onAdd={(type) => addPage(type, index)} />
                        </div>

                    </div>
                ))}

            </div>

            {/* Print Styles Injection */}
            <style>{`
                @media print {
                    @page { 
                        size: A4; 
                        margin: 0; 
                    }
                    body { 
                        margin: 0; 
                        padding: 0; 
                        background: none !important;
                        -webkit-print-color-adjust: exact;
                        print-color-adjust: exact;
                    }
                    .page-container {
                        width: 210mm;
                        height: 297mm;
                        overflow: hidden;
                        page-break-after: always;
                    }
                }
            `}</style>
        </div>
    );
};

export default ProposalBuilder;
