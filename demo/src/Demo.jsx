import React, { useState } from 'react';
import Btn from './Btn';

function Demo() {
    const [count, setCount] = useState(0);

    function Decrement() {
        setCount(count - 1);
    }
    function Reset() {
        setCount(0);
    }
    function Increment() {
        setCount(count + 1);
    }

    return (
        <div className='flex flex-col justify-center items-center'>
            <h1 className='m-5 w-40 h-20 text-3xl bg-slate-500 flex justify-center items-center rounded-md '>
                {count}
            </h1>
            <div className='flex gap-2'>
                <Btn title='-1' onClick={Decrement} />
                <Btn title='reset' onClick={Reset} />
                <Btn title='+1' onClick={Increment} />
            </div>
        </div>
    );
}

export default Demo;
