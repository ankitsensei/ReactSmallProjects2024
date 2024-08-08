import React from 'react';
import { IoSearchCircle } from 'react-icons/io5';

function App() {
    return (
        <div className='bg-zinc-900 text-white w-full h-screen'>
            <div className='flex flex-col items-center pt-20 h-full'>
                <h1 className='text-5xl font-bold'>Weather App</h1>
                <div className='border-2 border-zinc-600 mt-10 w-96 h-[600px] rounded-xl p-5 bg-summerImg bg-cover'>
                    <div className='flex items-center justify-center'>
                        <input
                            type='text'
                            className='w-64 h-10 rounded-md bg-zinc-800 bg-opacity-70 border-2 border-zinc-50 px-2 font-semibold outline-none'
                        />
                        <button>
                            <IoSearchCircle className='w-14 h-14 ' />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
