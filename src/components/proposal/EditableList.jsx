import React, { useState, useRef, useEffect } from 'react';

// A component that displays a styled list, but edits as a plain text block (one item per line)
const EditableList = ({
    items = [],
    onSave,
    bulletColor = "bg-spetia-orange-500",
    textClass = "text-[9pt] text-gray-700 font-medium leading-relaxed"
}) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editValue, setEditValue] = useState("");
    const textareaRef = useRef(null);

    const startEditing = () => {
        setEditValue(items.join('\n'));
        setIsEditing(true);
    };

    const handleBlur = () => {
        setIsEditing(false);
        // Split by newlines, filter empty lines
        const newItems = editValue.split('\n').map(l => l.trim()).filter(l => l.length > 0);
        onSave(newItems);
    };

    const handleChange = (e) => {
        setEditValue(e.target.value);
    };

    // Auto-focus and resize textarea when entering edit mode
    useEffect(() => {
        if (isEditing && textareaRef.current) {
            textareaRef.current.focus();
            textareaRef.current.style.height = 'auto';
            textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px';
        }
    }, [isEditing]);

    if (isEditing) {
        return (
            <textarea
                ref={textareaRef}
                value={editValue}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`w-full p-2 bg-white border border-spetia-orange-500 rounded outline-none resize-none overflow-hidden ${textClass}`}
                style={{ minHeight: '100px' }}
            />
        );
    }

    return (
        <div
            onClick={startEditing}
            className="cursor-text group min-h-[40px] hover:bg-black/5 rounded-sm -m-2 p-2 transition-colors relative"
            title="Click to edit list"
        >
            {items.length === 0 && (
                <div className="text-gray-400 italic text-sm p-1">Click to add items...</div>
            )}

            <ul className="space-y-3 pointer-events-none">
                {items.map((item, i) => (
                    <li key={i} className={`flex items-start gap-3 ${textClass}`}>
                        {/* Bullet */}
                        <span className={`w-1.5 h-1.5 ${bulletColor} rounded-full mt-1.5 flex-shrink-0`}></span>
                        <span>{item}</span>
                    </li>
                ))}
            </ul>

            {/* Hover Hint */}
            <div className="absolute top-0 right-0 p-1 opacity-0 group-hover:opacity-100 transition-opacity">
                <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
            </div>
        </div>
    );
};

export default EditableList;
