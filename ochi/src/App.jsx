import React from 'react';

import Navbar from './components/navbar.jsx';

function App() {
    return (
        <div className='bg-zinc-900 text-white w-full h-full'>
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
                <div>
                    <div className='flex justify-between mx-20'>
                        <p>For public and private companies</p>
                        <p>For the first pitch to IPO</p>
                        <button className='w-52 h-10 border-rose-600 bg-green-600 rounded-full'>
                            <div className=''>START THE PROJECT</div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
