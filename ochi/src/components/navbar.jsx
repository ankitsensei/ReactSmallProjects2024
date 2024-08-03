import React from 'react';

function navbar() {
    return (
        <div className='w-full px-20 py-8 flex justify-between'>
            <div className='logo'>ochi</div>
            <div className='flex text-md font-semibold gap-96'>
                <div className='links flex gap-8'>
                    {['Services', 'Our Work', 'About Us', 'Insights'].map(
                        (item, index) => (
                            <a key={index}>{item}</a>
                        )
                    )}
                </div>

                <div className='contactus'>Contact Us</div>
            </div>
        </div>
    );
}

export default navbar;
