import React from 'react';

const PageControls = ({ onDelete, onMoveUp, onMoveDown, isFirst, isLast }) => {
    return (
        <div className="absolute top-0 right-[-60px] flex flex-col gap-2 print:hidden z-50 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <button
                onClick={onDelete}
                className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center text-white shadow-lg hover:bg-red-600 hover:scale-110 transition-all text-xl font-bold"
                title="Delete Page"
            >
                ×
            </button>

            {!isFirst && (
                <button
                    onClick={onMoveUp}
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-white shadow-lg hover:bg-black hover:scale-110 transition-all"
                    title="Move Up"
                >
                    ↑
                </button>
            )}

            {!isLast && (
                <button
                    onClick={onMoveDown}
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-white shadow-lg hover:bg-black hover:scale-110 transition-all"
                    title="Move Down"
                >
                    ↓
                </button>
            )}
        </div>
    );
};

export default PageControls;
