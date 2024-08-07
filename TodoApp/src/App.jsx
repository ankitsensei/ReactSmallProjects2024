import React from 'react';

function App() {
    return (
        <div className='flex flex-col items-center pt-20 w-full h-screen text-2xl bg-zinc-900 text-white'>
            <h1 className='text-5xl font-semibold '>TODO APP</h1>

            <div className='flex gap-2 my-10'>
                <input
                    type='text'
                    placeholder='Add a task'
                    className=' px-4 py-2 outline-none rounded bg-zinc-900 border-2 border-zinc-100'
                />
                <button className='ml-2 px-4 py-2 rounded border-2 border-green-600 text-green-600'>
                    Add
                </button>
            </div>
        </div>
    );
}

export default App;
