import React from 'react';
import NikeLogo from './assets/nike-main-logo.svg';
function NavBar() {
    return (
        <div>
            <nav className='flex justify-between items-center px-5 py-1'>
                <img src={NikeLogo} alt='logo' className='w-14' />
                <ul className='flex gap-8 font-semibold'>
                    <li>
                        <a href='#'>MENU</a>
                    </li>
                    <li>
                        <a href='#'>LOCATION</a>
                    </li>
                    <li>
                        <a href='#'>ABOUT</a>
                    </li>
                    <li>
                        <a href='#'>CONTACT</a>
                    </li>
                </ul>
                <button className='bg-red-600 text-white font-bold w-20 h-10 rounded'>
                    Login
                </button>
            </nav>
        </div>
    );
}

export default NavBar;
