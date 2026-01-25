import React, { useState, useEffect } from 'react';

const TextToolbar = () => {
    const [visible, setVisible] = useState(false);
    const [position, setPosition] = useState({ top: 0, left: 0 });

    useEffect(() => {
        const handleSelectionChange = () => {
            const selection = window.getSelection();
            if (selection && !selection.isCollapsed) {
                const range = selection.getRangeAt(0);
                const rect = range.getBoundingClientRect();

                // Only show if selection is inside an editable area
                let parent = range.commonAncestorContainer;
                if (parent.nodeType === 3) parent = parent.parentNode;

                if (parent.closest('[contenteditable="true"]')) {
                    setVisible(true);
                    // Position above the selection
                    setPosition({
                        top: rect.top + window.scrollY - 50,
                        left: rect.left + window.scrollX + (rect.width / 2)
                    });
                    return;
                }
            }
            setVisible(false);
        };

        document.addEventListener('selectionchange', handleSelectionChange);
        return () => document.removeEventListener('selectionchange', handleSelectionChange);
    }, []);

    const execCmd = (command, value = null) => {
        document.execCommand(command, false, value);
    };

    if (!visible) return null;

    return (
        <div
            className="fixed z-[100] bg-[#1a1a1a] text-white flex items-center gap-1 rounded-full shadow-2xl px-3 py-2 -translate-x-1/2 transition-all duration-200 animate-in fade-in zoom-in-95 print:hidden"
            style={{ top: position.top, left: position.left }}
        >
            <ToolbarButton onClick={() => execCmd('bold')} label="B" bold />
            <ToolbarButton onClick={() => execCmd('italic')} label="I" italic />
            <ToolbarButton onClick={() => execCmd('underline')} label="U" underline />

            <div className="w-[1px] h-4 bg-white/20 mx-2"></div>

            <ToolbarButton onClick={() => execCmd('justifyLeft')} icon={<AlignLeftIcon />} />
            <ToolbarButton onClick={() => execCmd('justifyCenter')} icon={<AlignCenterIcon />} />

            <div className="w-[1px] h-4 bg-white/20 mx-2"></div>

            <ToolbarButton onClick={() => execCmd('formatBlock', '<h2>')} label="H1" />
            <ToolbarButton onClick={() => execCmd('formatBlock', '<h3>')} label="H2" />
            <ToolbarButton onClick={() => execCmd('formatBlock', '<p>')} label="P" />

        </div>
    );
};

const ToolbarButton = ({ onClick, label, icon, bold, italic, underline }) => (
    <button
        onMouseDown={(e) => { e.preventDefault(); onClick(); }}
        className={`
            w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/20 transition-colors text-sm font-medium
            ${bold ? 'font-bold' : ''} ${italic ? 'italic' : ''} ${underline ? 'underline' : ''}
        `}
    >
        {icon || label}
    </button>
);

const AlignLeftIcon = () => (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h10M4 18h16" />
    </svg>
);

const AlignCenterIcon = () => (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M7 12h10M4 18h16" />
    </svg>
);

export default TextToolbar;
