import React, { useState, useEffect } from 'react';

function Timer() {
    const [time, setTime] = useState(0);

    useEffect(() => {
        if (time === 0) return;

        const intervalId = setInterval(() => {
            setTime((prevTime) => prevTime - 1);
        }, 1000);
        return () => clearInterval(intervalId);
    }, [time]);
    return (
        <div className='flex flex-col items-center'>
            <h1 className='text-2xl font-semibold'>Timer</h1>

            <p className='text-5xl font-bold'>{time}</p>
            <input
                type='number'
                placeholder='Enter time in seconds'
                className='w-60 border-2 border-zinc-900 outline-none p-2 rounded-md'
            />
            <div className='flex gap-2 mt-2'>
                <button
                    className='w-20 h-10 bg-green-600 rounded-md'
                    onClick={() =>
                        setTime(parseInt(document.querySelector('input').value))
                    }
                >
                    Start
                </button>
                <button
                    className='w-20 h-10 bg-sky-600 rounded-md'
                    onClick={() => setTime(0)}
                >
                    Reset
                </button>
            </div>
        </div>
    );
}

export default Timer;
