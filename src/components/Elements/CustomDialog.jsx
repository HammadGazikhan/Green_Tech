// CustomDialog.js
import React from 'react';

const CustomDialog = ({ isOpen, onClose, children, title }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-3/4 lg:w-1/2">
                <div className="flex justify-between items-center mb-4">
                <h1 className="font-bold text-center lg:text-left text-lime-600 text-4xl">{title}</h1>
                    <button onClick={onClose} className="text-gray-600 hover:text-gray-900">&times;</button>
                </div>
                <div>{children}</div>
            </div>
        </div>
    );
};

export default CustomDialog;
