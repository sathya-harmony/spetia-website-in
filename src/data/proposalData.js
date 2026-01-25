
export const proposal = {
    meta: {
        id: "SP-GBC-2026-001",
        client: "Al Hajiry Trading Co LLC",
        clientProject: "GBC Hotel Project",
        date: "October 2026",
        preparedBy: "Spetia Engineering"
    },
    pages: [
        {
            type: "cover",
            id: "cover-01",
            data: {
                title: ["GBC Hotel", "Project"],
                subtitle: "LOD 500 BIM Implementation & On-Site Support Proposal",
                clientParams: {
                    name: "Al Hajiry Trading Co LLC",
                    ref: "SP-GBC-001"
                }
            }
        },
        {
            type: "letter",
            id: "letter-01",
            data: {
                recipient: {
                    name: "Mr. Nagarajan P",
                    title: "MEP-Coordinator",
                    company: "Al Hajiry Trading Co LLC"
                },
                content: [
                    "Dear Mr. Nagarajan,",
                    "Thank you for sharing the tender requirements for the GBC Hotel Project. We have reviewed the IFC drawings and project presentation for the Hotel Suite Buildings and Main Hotel Building.",
                    "Spetia Engineering is pleased to submit this proposal for BIM Modelling (LOD 500) covering Architecture, Structure, and MEPF disciplines. We understand the critical nature of this project and are committed to deploying our best resources to ensure seamless delivery.",
                    "As requested, this proposal includes a comprehensive breakdown for the modeling scope as well as the deployment of a dedicated on-site BIM Engineer to coordinate directly with your team in Oman.",
                    "We have structured our commercial offer to be transparent, separating the fixed modeling costs from the monthly on-site staffing requirements.",
                    "We look forward to supporting Al Hajiry Trading Co LLC in delivering this landmark project."
                ],
                signoff: "Sincerely,",
                sender: {
                    name: "Sathya",
                    title: "Director",
                    company: "Spetia OPC Pvt LTD."
                }
            }
        },
        {
            type: "service",
            id: "scope-01",
            data: {
                title: "Scope & Deployment",
                pageNumber: "03",
                image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2070",
                description: "This engagement covers full-scale BIM implementation LOD 500 and on-site technical support. The scope below outlines our deliverables and resource commitments.",
                tools: ["Revit 2026", "Navisworks Manage", "AutoCAD", "BIM 360"],
                sections: [
                    {
                        title: "Scope of Work",
                        description: "Detailed breakdown of modeling activities.",
                        features: [
                            "LOD 500 BIM Modeling (All Services: Arch, Str, MEPF)",
                            "Advanced Clash Detection & Resolution",
                            "On-Site BIM Coordination Support",
                            "As-Built Model Updates: Precise dimensions & locations reflecting constructed conditions.",
                            "Asset Data Integration: Embedding non-geometric data (manuals, maintenance schedules) for Facility Management."
                        ]
                    },
                    {
                        title: "On-Site Deployment",
                        description: "Dedicated resource for coordination and clash resolution.",
                        features: [
                            "Role: BIM Engineer (On-Sight)",
                            "Experience: 5 Years minimum",
                            "Duration: 6 Months (Extendable if needed)",
                            "Responsibility: Coordination, Clash Detection, Model Management"
                        ]
                    },
                    {
                        title: "Customer Scope (Obligations)",
                        description: "Resources and facilities to be provided by Al Hajiry.",
                        features: [
                            "All AutoCAD GFC Drawings",
                            "Travel Tickets & Visa for On-Sight Engineer",
                            "Accommodation & Local Transport",
                            "Medical Insurance",
                            "Workstation System & Software Licenses"
                        ]
                    }
                ]
            }
        },
        {
            type: "pricing",
            id: "pricing-01",
            data: {
                title: "Investment Summary",
                subtitle: "LOD 500 Modeling & Staffing Costs (INR)",
                pageNumber: "04",
                table: {
                    headers: ["Description", "Area (Sq.Ft)", "Unit Cost", "Staff/Qty", "Total (INR)"],
                    rows: [
                        { desc: "Hotel Suite Buildings (Arch/Str/MEP)", unit: "120,180.06", rate: "-", qty: "Lump Sum", total: "22,22,880.96" },
                        { desc: "Main Hotel Building (Arch/Str/MEP)", unit: "90,729.75", rate: "-", qty: "Lump Sum", total: "17,51,676.10" },
                        { desc: "Ancillary Buildings", unit: "Lump Sum", rate: "-", qty: "Lump Sum", total: "9,50,000.00" },
                        { desc: "Total Modeling Cost", unit: "-", rate: "-", qty: "-", total: "49,24,557.06" },
                        { desc: "---", unit: "-", rate: "-", qty: "-", total: "-" },
                        { desc: "On-Sight BIM Engineer (Per Month)", unit: "Monthly", rate: "1,85,000.00", qty: "1 Staff", total: "1,85,000.00" }
                    ],
                    total: "49,24,557 + Staff"
                },
                terms: [
                    "All taxes and levies extra as applicable.",
                    "Payment Terms: 25% Advance, Balance against milestones.",
                    "On-site engineer invoice raised by 26th of every month; Payment due by 29th of the respective month.",
                    "Validity: This proposal is valid for 30 days."
                ],
                outOfScope: [
                    "Drawing Sheet Extraction",
                    "Interior Design and Detailing",
                    "All Services Design",
                    "Landscape Design and Modelling"
                ],
                milestones: [
                    { stage: "Advance Payment", percent: "25%" },
                    { stage: "Completion of Architecture Model", percent: "15%" },
                    { stage: "Completion of Structural Model", percent: "20%" },
                    { stage: "Completion of MEPF Model", percent: "20%" },
                    { stage: "Completion of Coordinated Model", percent: "15%" },
                    { stage: "Completion of Final Model & Handover", percent: "5%" }
                ]
            }
        }
    ]
};
