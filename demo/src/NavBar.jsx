import React from 'react';
import NavBtn from './NavBtn';

function NavBar() {
    return (
        <div>
            <nav className='flex justify-between items-center mx-10 py-5'>
                <h1 className='text-xl'>ANKIT</h1>
                <ul className='flex gap-5'>
                    <NavBtn title='HOME' />
                    <NavBtn title='ABOUT' />
                    <NavBtn title='PROJECTS' />
                    <NavBtn title='CONTACTS' />
                </ul>
            </nav>
        </div>
    );
}

export default NavBar;
