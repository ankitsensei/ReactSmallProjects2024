import React from 'react';

import Navbar from './components/navbar.jsx';
import { FaArrowUpLong } from 'react-icons/fa6';

function App() {
    return (
        <div className='bg-zinc-900 text-white w-full h-screen'>
            <div className='page1'>
                <Navbar />
                <div className='text-9xl tracking-tighter font-semibold mt-32 ml-16'>
                    <h1>WE CREATE</h1>
                    <div className='flex items-center'>
                        <div className='w-40 h-24 bg-rose-600 rounded-lg'></div>
                        <h1>EYE OPENING</h1>
                    </div>
                    <h1>PRESENTATIONS</h1>
                </div>
                <div className='mt-28 text-xl'>
                    <div className='w-full h-[1px] bg-zinc-600 my-4'></div>
                    <div className='flex justify-between mx-20'>
                        <p>For public and private companies</p>
                        <p>For the first pitch to IPO</p>
                        <button className='flex justify-center items-center gap-2'>
                            <div className='w-52 h-10 border-2 border-zinc-600 rounded-full flex items-center justify-center'>
                                START THE PROJECT
                            </div>
                            <div className='rotate-[45deg] w-10 h-10 border-2 border-zinc-600 flex justify-center items-center rounded-full'>
                                <FaArrowUpLong />
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
