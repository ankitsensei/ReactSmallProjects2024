import React from 'react';
import Btn from './Btn';

function NavBar(props) {
    return (
        <div>
            <nav className='flex justify-between items-center mx-10 py-5'>
                <h1 className='text-xl'>{props.title}</h1>
                <ul className='flex gap-5'>
                    <Btn title='HOME' />
                    <Btn title='ABOUT' />
                    <Btn title='PROJECTS' />
                    <Btn title='CONTACTS' />
                </ul>
            </nav>
        </div>
    );
}

export default NavBar;
