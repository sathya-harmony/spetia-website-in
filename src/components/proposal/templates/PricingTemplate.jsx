import React from 'react';
import SpetiaLogo from '../../../assets/spetia-logo.svg';
import Watermark from '../../brochure/Watermark';
import BrochureFooter from '../../brochure/BrochureFooter';
import EditableText from '../EditableText';
import EditableList from '../EditableList';

const PricingTemplate = ({ data, onUpdate }) => {

    const updateField = (field, value) => {
        onUpdate({ ...data, [field]: value });
    };

    const updateHeader = (index, value) => {
        const newHeaders = [...data.table.headers];
        newHeaders[index] = value;
        onUpdate({
            ...data,
            table: { ...data.table, headers: newHeaders }
        });
    };

    const updateRow = (index, field, value) => {
        const newRows = [...data.table.rows];
        newRows[index] = { ...newRows[index], [field]: value };
        onUpdate({
            ...data,
            table: { ...data.table, rows: newRows }
        });
    };

    const updateTotal = (value) => {
        onUpdate({
            ...data,
            table: { ...data.table, total: value }
        });
    }

    return (
        <div className="w-[210mm] min-h-[297mm] h-auto bg-[#FDFBF7] relative flex flex-col mx-auto print:m-0 print:w-full print:h-auto overflow-visible text-spetia-dark font-sans shadow-xl print:shadow-none mb-10 print:mb-0">
            <Watermark />

            {/* Texture Overlay */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>

            {/* Header */}
            <div className="relative z-10 px-[15mm] pt-[15mm] pb-8 flex justify-between items-end border-b border-gray-200">
                <div>
                    <div className="text-[8pt] uppercase tracking-widest text-spetia-orange-500 font-bold mb-2">Commercials</div>
                    <h1 className="text-4xl font-sans font-medium text-spetia-dark leading-[0.9] uppercase tracking-normal">
                        <EditableText value={data.title} onSave={(val) => updateField('title', val)} />
                    </h1>
                </div>
                <div className="text-right max-w-sm">
                    <p className="text-[10pt] font-sans text-gray-500">
                        <EditableText value={data.subtitle} onSave={(val) => updateField('subtitle', val)} />
                    </p>
                </div>
            </div>

            {/* Pricing Table - Critical Print Alignment */}
            <div className="relative z-10 px-[15mm] py-8 flex-grow font-sans flex flex-col justify-between">
                <div className="w-full">

                    {/* Header Columns - Perfectly Aligned with Rows */}
                    <div className="grid grid-cols-[3.5fr_0.8fr_1.2fr_0.8fr_1.5fr] px-6 pb-2 border-b-2 border-spetia-orange-500/20 mb-4 gap-6">
                        {data.table.headers.map((header, i) => (
                            <div key={i} className={`text-[7pt] font-black uppercase tracking-[0.15em] text-gray-400 ${i > 0 ? 'text-right' : ''}`}>
                                <EditableText value={header} onSave={(val) => updateHeader(i, val)} />
                            </div>
                        ))}
                    </div>

                    {/* Rows - Balanced Spacing */}
                    <div className="space-y-3">
                        {data.table.rows.map((row, i) => (
                            <div key={i} className={`grid grid-cols-[3.5fr_0.8fr_1.2fr_0.8fr_1.5fr] px-4 py-3 items-center bg-white border border-gray-200 shadow-sm rounded-sm gap-6 transition-all ${row.desc === '---' ? 'opacity-0 h-4 pointer-events-none' : ''} ${row.desc.includes('Total Modeling') ? 'border-l-4 border-l-spetia-orange-500 bg-orange-50/10' : ''}`}>

                                {/* Description */}
                                <div className={`font-sans text-[9pt] text-gray-900 ${row.desc.includes('Total') ? 'font-bold' : 'font-semibold'}`}>
                                    <EditableText value={row.desc} onSave={(val) => updateRow(i, 'desc', val)} />
                                </div>

                                {/* Area */}
                                <div className="font-mono text-[8pt] text-gray-600 text-right uppercase tracking-wider">
                                    <EditableText value={row.unit} onSave={(val) => updateRow(i, 'unit', val)} />
                                </div>

                                {/* Unit Cost */}
                                <div className="font-mono text-[8pt] text-gray-600 text-right">
                                    <EditableText value={row.rate} onSave={(val) => updateRow(i, 'rate', val)} />
                                </div>

                                {/* Qty */}
                                <div className="font-mono text-[8pt] text-gray-600 text-right">
                                    <EditableText value={row.qty} onSave={(val) => updateRow(i, 'qty', val)} />
                                </div>

                                {/* Total */}
                                <div className={`font-mono text-[9pt] text-right flex justify-end gap-1 ${row.desc.includes('Total') ? 'font-bold text-spetia-orange-600' : 'font-bold text-gray-900'}`}>
                                    {row.total !== '-' && <span>₹</span>}
                                    <EditableText value={row.total} onSave={(val) => updateRow(i, 'total', val)} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom Section Group */}
                <div className="mt-auto">

                    {/* Total Section - Clean Floating Card */}
                    <div className="flex justify-end mb-6 mt-4">
                        <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-lg min-w-[340px]">
                            <div className="text-[7pt] font-black uppercase tracking-[0.2em] text-gray-400 text-right mb-1">Total Project Value</div>
                            <div className="flex justify-end items-baseline gap-2 text-3xl font-mono font-bold text-spetia-orange-600 tracking-tighter">
                                <span className="text-xl opacity-40 font-light text-gray-400">₹</span>
                                <EditableText value={data.table.total} onSave={(val) => updateTotal(val)} />
                            </div>
                            <div className="text-[7pt] text-gray-400 text-right mt-1 font-medium uppercase tracking-wider border-t border-gray-100 pt-1">
                                + Monthly Staffing Charges
                            </div>
                        </div>
                    </div>

                    {/* Payment Milestones - Balanced */}
                    <div className="mb-6 pt-6 border-t border-gray-200">
                        <h4 className="text-[8pt] font-black uppercase tracking-widest text-spetia-dark mb-4">Payment Milestones</h4>
                        <div className="grid grid-cols-6 gap-3">
                            {(data.milestones || []).map((milestone, i) => (
                                <div key={i} className="group relative flex flex-col">
                                    {/* Bar Color & Percentage */}
                                    <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden mb-2">
                                        <div className={`h-full ${i === 0 ? 'bg-spetia-orange-500' : 'bg-spetia-dark'} opacity-80 group-hover:opacity-100 transition-opacity`}></div>
                                    </div>
                                    <div className="text-[11pt] font-mono font-bold text-spetia-dark mb-0.5">{milestone.percent}</div>
                                    <div className="text-[7pt] font-sans text-gray-500 font-medium leading-tight pr-1">
                                        <EditableText value={milestone.stage} onSave={(val) => {
                                            const newItems = [...(data.milestones || [])];
                                            newItems[i] = { ...newItems[i], stage: val };
                                            onUpdate({ ...data, milestones: newItems });
                                        }} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Terms & Exclusions - Balanced Grid */}
                    <div className="grid grid-cols-2 gap-8 pt-6 border-t border-gray-200">

                        {/* Out of Scope */}
                        <div>
                            <h4 className="text-[8pt] font-black uppercase tracking-widest text-spetia-orange-500 mb-3 pb-1 border-b border-spetia-orange-500/20">Out of Scope</h4>
                            <EditableList
                                items={data.outOfScope || []}
                                onSave={(newItems) => onUpdate({ ...data, outOfScope: newItems })}
                                bulletColor="text-spetia-orange-500" // Changed to text color for '✕'
                                textClass="text-[8pt] text-gray-700 font-medium leading-tight"
                                bulletType="cross" // Added bulletType for '✕'
                            />
                        </div>

                        {/* Terms */}
                        <div>
                            <h4 className="text-[8pt] font-black uppercase tracking-widest text-gray-400 mb-3 pb-1 border-b border-gray-200">Terms & Conditions</h4>
                            <EditableList
                                items={data.terms || []}
                                onSave={(newItems) => onUpdate({ ...data, terms: newItems })}
                                bulletColor="bg-gray-400"
                                textClass="text-[8pt] text-gray-600 font-normal leading-tight"
                                bulletType="dot" // Added bulletType for dot
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div className="px-[15mm] pb-[12mm]">
                <BrochureFooter pageNumber={data.pageNumber} />
            </div>

        </div>
    );
};

export default PricingTemplate;
