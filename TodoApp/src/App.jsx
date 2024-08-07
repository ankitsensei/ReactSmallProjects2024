import React, { useState } from 'react';

function App() {
    const [items, setItems] = useState([
        'math hw',
        'physics assign',
        'english assign',
        'chemistry assign',
    ]);
    const [done, setDone] = useState(['marketing', 'cleaning room']);

    return (
        <div className='flex flex-col items-center pt-20 w-full h-screen text-2xl bg-zinc-900 text-white'>
            <h1 className='text-5xl font-semibold '>TODO APP</h1>

            <div className='flex gap-2 my-10'>
                <input
                    type='text'
                    placeholder='Add a task'
                    className='w-80 px-4 py-2 outline-none rounded bg-zinc-900 border-2 border-zinc-100'
                />
                <button
                    className='ml-2 px-4 py-2 rounded border-2 border-green-600 text-green-600'
                    onClick={() => {
                        if (document.querySelector('input').value) {
                            setItems([
                                ...items,
                                document.querySelector('input').value,
                            ]);
                            document.querySelector('input').value = '';
                        }
                    }}
                >
                    Add
                </button>
            </div>
            <div className='flex justify-between gap-2'>
                <ul className='flex flex-col gap-2 border-[1px] border-zinc-600 p-10 rounded w-[600px]'>
                    <h1 className='text-center mb-2 text-4xl'>Pending Task</h1>
                    {items.map((item) => (
                        <div className='flex gap-2'>
                            <li className='w-80 px-4 py-2 rounded bg-zinc-900 border-2 border-zinc-100'>
                                {item}
                            </li>
                            <button
                                className='ml-2 px-4 py-2 rounded border-2 border-red-600 text-red-600'
                                onClick={() =>
                                    setItems(items.filter((i) => i !== item))
                                }
                            >
                                Del
                            </button>
                            <button
                                className='ml-2 px-4 py-2 rounded border-2 border-green-600 text-green-600'
                                onClick={() => {
                                    setDone([...done, item]);
                                    setItems(items.filter((i) => i !== item));
                                }}
                            >
                                Done
                            </button>
                        </div>
                    ))}
                </ul>
                <ul className='flex flex-col gap-2 border-[1px] border-zinc-600 p-10 rounded w-[600px]'>
                    <h1 className='text-center mb-2 text-4xl'>Done Tasks</h1>
                    {done.map((doneItem) => (
                        <div className='flex gap-2'>
                            <li className='w-80 px-4 py-2 rounded bg-zinc-900 border-2 border-zinc-100'>
                                {doneItem}
                            </li>
                            <button
                                className='ml-2 px-4 py-2 rounded border-2 border-red-600 text-red-600'
                                onClick={() => {
                                    setDone(done.filter((i) => i !== doneItem));
                                }}
                            >
                                Del
                            </button>
                            <button
                                className='ml-2 px-4 py-2 rounded border-2 border-sky-600 text-sky-600'
                                onClick={() => {
                                    setItems([...items, doneItem]);
                                    setDone(done.filter((i) => i !== doneItem));
                                }}
                            >
                                UnDone
                            </button>
                        </div>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default App;
