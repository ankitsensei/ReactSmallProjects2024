import React, { useState } from 'react';

function table() {
    const [start, setStart] = useState('');
    const [end, setEnd] = useState('');
    const [task, setTask] = useState(['']);
    const data = [
        ['hello', 'hello1', 'hello2'],
        ['gang', 'gang1', 'gang2'],
    ];
    return (
        <div className='flex flex-col items-center py-20'>
            <div className='flex gap-2 text'>
                <div>
                    <input
                        className='text-zinc-950 px-4 py-2 w-36 rounded-md outline-none'
                        type='time'
                        placeholder='Start at'
                    />
                </div>
                <div>
                    <input
                        className='text-zinc-950 px-4 py-2 w-36- rounded-md outline-none'
                        type='time'
                        placeholder='End at'
                    />
                </div>
                <div>
                    <input
                        className='text-zinc-950 px-4 py-2 w-96 rounded-md outline-none'
                        type='text'
                        placeholder='Enter your Task'
                    />
                </div>
                <button className='bg-green-600 w-24 rounded-md text-3xl hover:bg-green-700 active:bg-green-800'>
                    +
                </button>
            </div>
            <div>
                <p>asd</p>
            </div>
        </div>
    );
}

export default table;
