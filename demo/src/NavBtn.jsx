import React from 'react';

function NavBtn(props) {
    return (
        <div>
            <button className='w-32 h-10  bg-zinc-950 text-zinc-50 rounded-md active:bg-zinc-900'>
                {props.title}
            </button>
        </div>
    );
}
export default NavBtn;
