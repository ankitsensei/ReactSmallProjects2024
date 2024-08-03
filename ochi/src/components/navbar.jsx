import React from 'react';

function navbar() {
    return (
        <div className='w-full px-20 py-8 flex justify-between'>
            <div className='logo'>ochi</div>
            <div className='links flex gap-8'>
                {['Services', 'Our Work', 'About Us', 'Insights'].map(
                    (item, index) => (
                        <a key={index} className='text-md font-semibold '>
                            {item}
                        </a>
                    )
                )}
            </div>
        </div>
    );
}

export default navbar;
