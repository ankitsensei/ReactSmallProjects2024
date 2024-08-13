import React from 'react';

function Btn({ text, className = className }) {
    return (
        <div>
            <button className={className}>{text}</button>
        </div>
    );
}

Btn.defaultProps = {
    className: 'bg-zinc-900 text-white px-4 py-2 rounded-md w-16 h-12 text-lg',
};

export default Btn;
