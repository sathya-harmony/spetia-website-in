import React, { useState, useEffect, useRef } from 'react';

const EditableText = ({
    value,
    onSave,
    className = "",
    tag = 'div',
    ...props
}) => {
    const Tag = tag;
    const [content, setContent] = useState(value);
    const contentRef = useRef(value);

    // Sync external value changes (e.g. from undo/reset)
    useEffect(() => {
        if (value !== contentRef.current) {
            setContent(value);
            contentRef.current = value;
        }
    }, [value]);

    const handleInput = (e) => {
        const newText = e.currentTarget.innerText;
        contentRef.current = newText;
        // Optional: Call onSave immediately if we want real-time updates (can be slow)
        // For now, we save on Blur to avoid re-renders interrupting typing
    };

    const handleBlur = () => {
        if (contentRef.current !== value) {
            onSave(contentRef.current);
        }
    };

    // Handle Enter for simple inputs to prevent new lines if desired (optional)
    const handleKeyDown = (e) => {
        // Just standard behavior for now to allow rich text feel
    };

    return (
        <Tag
            contentEditable
            suppressContentEditableWarning
            className={`outline-none hover:bg-black/5 focus:bg-black/5 transition-colors cursor-text active:cursor-text rounded-sm px-1 -mx-1 min-w-[20px] inline-block ${className}`}
            bg-transparent
            onInput={handleInput}
            onBlur={handleBlur}
            onKeyDown={handleKeyDown}
            dangerouslySetInnerHTML={{ __html: value }}
            {...props}
        />
    );
};

export default EditableText;
