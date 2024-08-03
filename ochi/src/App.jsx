import React from 'react';

import Navbar from './components/navbar.jsx';

function App() {
    return (
        <div className='bg-zinc-900 text-white w-full h-screen'>
            <div className='page1'>
                <Navbar />
                <div className='text-9xl tracking-tighter font-semibold mt-32 ml-16'>
                    <div className='flex items-center'>
                        <div className='w-40 h-24 bg-rose-600 rounded-lg'></div>
                        <h1>LET'S START</h1>
                    </div>
                    <h1>A PROJECT TOGETHER</h1>
                </div>
            </div>
        </div>
    );
}

export default App;
