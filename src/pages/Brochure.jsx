import React, { useRef } from 'react';
import CoverPage from '../components/brochure/CoverPage';
import IntroductionPage from '../components/brochure/IntroductionPage';
import ServicesPage from '../components/brochure/ServicesPage';
import ServiceDetailedPage from '../components/brochure/ServiceDetailedPage';
import RateCard from '../components/brochure/RateCard';

// EXTREMELY DETAILED DATA SOURCE
const detailedServices = [
    {
        title: "BIM Solutions & VDC",
        image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2070",
        description: "From 3D visualization to 7D facility management, we deliver comprehensive Building Information Modeling services that adhere to AIA and ISO 19650 standards ranges from LOD 100 to LOD 500.",
        tools: ["Revit", "Navisworks", "BIM 360", "Dynamo"],
        sections: [
            {
                title: "3D Building Information Modeling",
                description: "Detailed 3D models for conceptual design, construction documentation, and visualization.",
                features: ["Conceptual design modeling", "Construction documentation sets", "VR/AR visualization export", "Performance analysis integration"]
            },
            {
                title: "4D Construction Sequencing",
                description: "3D models combined with time-based simulations for scheduling and optimization.",
                features: ["Schedule visualization (Primavera/Project)", "Resource optimization planning", "Delay identification & mitigation", "Progress tracking vs. plan"]
            },
            {
                title: "5D Cost Estimation",
                description: "Accurate quantity takeoffs and cost estimates integrated into the BIM model.",
                features: ["Automated quantity takeoff (QTO)", "Life-cycle costing analysis", "Budget optimization", "Change order cost impact"]
            },
            {
                title: "6D Sustainability",
                description: "Energy analysis and green building certification support.",
                features: ["Energy simulation & modeling", "Daylighting & shadow analysis", "LEED/BREEAM consulting support", "Sustainable material selection"]
            },
            {
                title: "7D Facility Management",
                description: "COBie-compliant models for ongoing facility operations.",
                features: ["COBie data integration", "Asset management tagging", "Maintenance scheduling", "Operations support systems"]
            }
        ]
    },
    {
        title: "Architectural Design",
        image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=2070",
        description: "Sophisticated exteriors seamlessly integrated with tailored interiors. We combine aesthetic vision with rigorous engineering standards to deliver complete architectural documentation.",
        tools: ["AutoCAD", "Revit", "SketchUp", "Rhino"],
        sections: [
            {
                title: "Construction Exteriors",
                description: "Stunning facades, roofs, windows, and outdoor spaces designed for visual impact.",
                features: ["Facade design & detailing", "Roofing system detailing", "Window & door schedules", "Exterior material specifications"]
            },
            {
                title: "Interior Design",
                description: "Personalized, functional interiors from concept to completion.",
                features: ["Space planning & layouts", "3D interior visualization", "FF&E selection & specification", "Furniture coordination"]
            },
            {
                title: "Landscape Architecture",
                description: "Gardens, parks, and outdoor spaces that complement buildings.",
                features: ["Site planning & grading", "Hardscape design details", "Planting plans & schedules", "Irrigation system design"]
            }
        ]
    },
    {
        title: "Structural Engineering",
        image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070",
        description: "Safe, stable structural systems designed to last. From foundations to framing, we engineer solutions that support loads and withstand forces with absolute precision.",
        tools: ["Tekla Structures", "STAAD.Pro", "ETABS", "Revit Structure"],
        sections: [
            {
                title: "Structural Analysis",
                description: "Advanced FEM analysis ensuring safety and code compliance.",
                features: ["Load calculations (Dead/Live)", "Seismic & dynamic analysis", "Wind load analysis", "Foundation design optimization"]
            },
            {
                title: "Steel Detailing",
                description: "Precise steel connection and fabrication drawings.",
                features: ["Connection design & calcs", "Shop drawing generation", "Erection plans", "Bill of Materials (BOM)"]
            },
            {
                title: "Concrete Design",
                description: "Reinforced concrete design with detailed rebar schedules.",
                features: ["Rebar detailing & scheduling", "Post-tension design", "Formwork layout plans", "Pour sequence planning"]
            },
            {
                title: "Timber Structures",
                description: "Wood frame and mass timber structural solutions.",
                features: ["Frame design & detailing", "Mass timber engineering", "Connection details", "Prefab/Modular coordination"]
            }
        ]
    },
    {
        title: "MEPF Design",
        image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=2070",
        description: "Mechanical, Electrical, Plumbing, and Fire Protection systems engineered for seamless coordination. We deliver clash-free designs that exceed functional requirements.",
        tools: ["Revit MEP", "AutoCAD MEP", "HAP", "Dialux"],
        sections: [
            {
                title: "Mechanical / HVAC",
                description: "High-performance HVAC systems designed for maximum comfort.",
                features: ["Energy modeling & efficiency", "Heating & cooling loads", "Ductwork sizing & routing", "Equipment selection"]
            },
            {
                title: "Electrical Systems",
                description: "Comprehensive electrical design from power to emergency systems.",
                features: ["Load analysis & balancing", "Lighting design (Lux/Lumens)", "Power distribution (SLD)", "Emergency backup systems"]
            },
            {
                title: "Plumbing Design",
                description: "Efficient water supply, drainage, and specialty plumbing systems.",
                features: ["Domestic water supply", "Sanitary drainage & venting", "Stormwater management", "Medical gas systems"]
            },
            {
                title: "Fire Protection",
                description: "Life safety systems engineered to code with reliability as priority.",
                features: ["Sprinkler system design", "Fire alarm systems", "Smoke management", "Code compliance review"]
            }
        ]
    },
    {
        title: "AR/VR Visualization",
        image: "https://images.unsplash.com/photo-1626379953822-baec19c3accd?q=80&w=2070",
        description: "Experience spaces before they exist. Augmented Reality, Virtual Reality, and Digital Twin technology for confident decision-making with unprecedented clarity.",
        tools: ["Unity", "Unreal Engine", "Enscape", "Twinmotion"],
        sections: [
            {
                title: "Virtual Walkthroughs",
                description: "Walk through designs in fully immersive VR before construction.",
                features: ["360° immersive visualization", "Real-time navigation", "Stakeholder presentations", "Design validation"]
            },
            {
                title: "Digital Twins",
                description: "Virtual replicas with real-time sensors for monitoring.",
                features: ["Real-time sensor data link", "Predictive maintenance", "Performance monitoring", "Asset management dashboard"]
            },
            {
                title: "Augmented Reality",
                description: "Overlay digital information onto real-world environments.",
                features: ["On-site overlay visualization", "QR code integration", "Field coordination", "Progress tracking"]
            },
            {
                title: "Training & Simulation",
                description: "Train teams in complex procedures using virtual environments.",
                features: ["Safety training sims", "Equipment operation guides", "Emergency procedures", "Skills assessment"]
            }
        ]
    },
    {
        title: "Data Center Engineering",
        image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2070",
        description: "Comprehensive MEPF engineering for data center environments. We ensure 99.999% uptime through redundant system architecture and Tier certification support.",
        tools: ["6SigmaDC", "Revit", "CFD Analysis", "AutoCAD"],
        sections: [
            {
                title: "Electrical Engineering",
                description: "Complete power infrastructure for uninterrupted operations.",
                features: ["MEPF coordination", "UPS integration", "Generator backup systems", "Load calculations"]
            },
            {
                title: "Mechanical Systems",
                description: "Precision cooling and environmental control.",
                features: ["Cooling load calculations", "CFD thermal analysis", "Fire suppression (Clean Agent)", "Thermal mapping"]
            },
            {
                title: "Security & Monitoring",
                description: "Comprehensive security infrastructure.",
                features: ["Access control systems", "CCTV integration", "ELV design", "Biometric systems"]
            },
            {
                title: "Commissioning & QA",
                description: "End-to-end commissioning support.",
                features: ["Testing protocols", "Pre-commissioning checklists", "Tier certification", "Validation reports"]
            }
        ]
    },
    {
        title: "Plant Engineering",
        image: "https://images.unsplash.com/photo-1513828583688-c52646db42da?q=80&w=2070",
        description: "End-to-end plant design engineering from process engineering to commissioning support. Multi-discipline expertise for Oil & Gas, Petrochemical, and Pharma.",
        tools: ["SmartPlant 3D", "PDMS", "CAESAR II", "Aveva E3D"],
        sections: [
            {
                title: "Piping Engineering",
                description: "Comprehensive piping design ensuring code compliance.",
                features: ["3D piping modeling", "Pipe stress analysis", "Custom support design", "Isometric extraction"]
            },
            {
                title: "Mechanical Design",
                description: "Equipment design with engineering analysis expertise.",
                features: ["Pressure vessel design", "Heat exchanger calculations", "Storage tank detailing", "Fabrication drawings"]
            },
            {
                title: "Civil & Structural",
                description: "Structural solutions focused on safety and integration.",
                features: ["Structural analysis", "Foundation design", "Steel detailing", "3D modeling"]
            },
            {
                title: "Electrical & Instrumentation",
                description: "Complete E&I engineering from power to controls.",
                features: ["Single line diagrams", "PLC programming", "Cable schedules", "Hazardous area classification"]
            }
        ]
    },
    {
        title: "Process Eng: Design & Simulation",
        image: "/images/process-eng-1.png",
        description: "From conceptualization to advanced dynamic simulation. We deliver rigorous engineering design phases backed by state-of-the-art modelling software.",
        tools: ["Industry Leading Software", "Advanced Modelling Techniques"],
        sections: [
            {
                title: "Engineering Services",
                description: "Full lifecycle engineering project support.",
                features: [
                    "Conceptual Engineering (Brainstorming, Concept Sketches)",
                    "Front End Engineering Design (FEED) & Feasibility",
                    "Detailed Design Engineering (Comprehensive calcs)",
                    "Risk Mitigation & Cost Optimization strategies"
                ]
            },
            {
                title: "Modelling & Simulation",
                description: "Advanced steady-state and dynamic analysis.",
                features: [
                    "Steady-State & Dynamic Simulation",
                    "Transient Analysis & Scenario Evaluation",
                    "Startups/Shutdowns scenario modelling",
                    "Heat & Mass Transfer / Separation Process Optimization"
                ]
            },
            {
                title: "System Sizing & Design",
                description: "Core hydraulic and equipment calculations.",
                features: [
                    "Process sizing: Columns, Pipes, Vessels",
                    "Control Valve & Safety Valve (PSV) sizing",
                    "Orifice sizing & Instrument Data Sheets",
                    "Utility & System Package preparation"
                ]
            },
            {
                title: "Process Optimization",
                description: "Enhancing productivity and efficiency.",
                features: [
                    "Debottlenecking studies",
                    "Process Integration & Pinch Analysis",
                    "Equipment reliability optimization",
                    "Performance improvement strategies"
                ]
            }
        ]
    },
    {
        title: "Process Eng: Safety & Operations",
        image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2070",
        description: "Comprehensive Safety, Environmental, and Loss Prevention (SELP) services ensuring operational integrity and regulatory compliance.",
        tools: [],
        sections: [
            {
                title: "SELP (Safety & Risk)",
                description: "Extensive process safety management studies.",
                features: [
                    "HAZID, HAZOP, HIRA, ENVID, LOPA studies",
                    "QRA, EERA, HSEIA, PHSER, SIL Assessment",
                    "Fire & Gas Mapping, Fire Water System Design",
                    "Hazardous Area Classification & Passive Fire Protection"
                ]
            },
            {
                title: "Specialized Studies",
                description: "Advanced environmental and dispersion analysis.",
                features: [
                    "Surge / Transient Analysis & Hydraulic Analysis",
                    "Vent and Dispersion Study",
                    "Aspect Impact & Work Env. Risk Assessment (WERA)",
                    "Leak Detection and Repair (LDAR)"
                ]
            },
            {
                title: "Troubleshooting",
                description: "Diagnostic and failure investigation services.",
                features: [
                    "Process Review of Equipments",
                    "Equipment/System Failure Investigation",
                    "Site inspections & Data log analysis",
                    "Pre-Startup Safety Review (PSSR)"
                ]
            },
            {
                title: "Control & Commissioning",
                description: "Operational support and automation strategies.",
                features: [
                    "Process Control & Automation Strategies",
                    "Pump Performance Testing",
                    "Technical Bid Analysis (TBA) & Vendor Review",
                    "Pre-commissioning & Commissioning Support"
                ]
            }
        ]
    },
    {
        title: "Value Engineering",
        image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2070",
        description: "We improve, refine, and perfect. Our Value Engineering delivers optimal results at the intersection of utility, cost-efficiency, and quality.",
        tools: ["CostX", "Primavera", "Excel", "Navisworks"],
        sections: [
            {
                title: "Define Goals",
                description: "Analyze project requirements and define success metrics.",
                features: ["Requirement analysis", "Success criteria definition", "Stakeholder alignment", "Scope definition"]
            },
            {
                title: "Function Analysis",
                description: "Identify essential functions and analyze for efficiency.",
                features: ["Function mapping", "Cost allocation", "Performance analysis", "Waste identification"]
            },
            {
                title: "Options Assessment",
                description: "Evaluate design alternatives to find the optimal path.",
                features: ["Alternative designs", "Cost-benefit analysis", "Risk assessment", "Feasibility study"]
            },
            {
                title: "Implementation",
                description: "Implement solutions that achieve greater value.",
                features: ["Quality control plan", "Cost tracking", "Change management", "Documentation"]
            }
        ]
    },
];

const Brochure = () => {
    const handlePrint = () => {
        window.print();
    };

    return (
        <div className="min-h-screen bg-gray-900 py-10 print:p-0 print:bg-white">

            {/* Control Bar - Hidden when printing */}
            <div className="fixed top-0 left-0 right-0 bg-white/10 backdrop-blur-md border-b border-white/10 p-4 z-50 flex justify-between items-center shadow-lg print:hidden">
                <div className="flex items-center gap-4 text-white">
                    <span className="font-bold text-lg tracking-wider">SPETIA BROCHURE BUILDER</span>
                    <span className="text-white/40 text-sm border-l border-white/20 pl-4 h-6 flex items-center">
                        Edit text directly. Click "Print" to save as PDF. Capture specific pages for clients.
                    </span>
                </div>
                <button
                    onClick={handlePrint}
                    className="bg-spetia-orange-600 hover:bg-spetia-orange-500 text-white px-6 py-2 rounded-full font-bold uppercase tracking-widest text-xs transition-all shadow-lg hover:shadow-spetia-orange-600/50 flex items-center gap-2"
                >
                    <span>Download PDF / Print</span>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                </button>
            </div>

            {/* Container for pages */}
            <div className="mt-16 print:mt-0 flex flex-col items-center gap-10 print:block print:gap-0">

                {/* Page 1: Cover */}
                <div className="print:break-after-page page-container origin-top">
                    <CoverPage />
                </div>

                {/* Page 2: Introduction */}
                <div className="print:break-after-page page-container origin-top">
                    <IntroductionPage />
                </div>

                {/* Page 3: Services Summary */}
                <div className="print:break-after-page page-container origin-top">
                    <ServicesPage />
                </div>

                {/* Pages 4-11: Detailed Service Pages */}
                {detailedServices.map((service, index) => (
                    <div key={index} className="print:break-after-page page-container origin-top">
                        <ServiceDetailedPage
                            title={service.title}
                            image={service.image}
                            description={service.description}
                            tools={service.tools}
                            sections={service.sections}
                            pageNumber={`0${index + 4}`}
                        />
                    </div>
                ))}

                {/* Page 12: Rate Card */}
                <div className="print:break-after-page page-container origin-top">
                    <RateCard />
                </div>

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

export default Brochure;
