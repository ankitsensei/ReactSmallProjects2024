import React from 'react';

function NavBtn(props) {
    return (
        <div>
            <button className='w-32 h-10  bg-[#50577A] text-zinc-50 rounded-md hover:bg-rose-600 active:bg-rose-800'>
                {props.title}
            </button>
        </div>
    );
}
export default NavBtn;
