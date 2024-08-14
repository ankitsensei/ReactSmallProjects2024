import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Btn2 from './components/Btn2';
import { IoMdArrowRoundBack } from 'react-icons/io';

function DicePlay() {
    const [number, setNumber] = useState('not selected yet');
    const [randomNumber, setRandomNumber] = useState('GENERATE');
    const [value, setValue] = useState('STATUS');

    const generateRandomNumber = (number) => {
        if (number !== 'not selected yet') {
            setRandomNumber(Math.floor(Math.random() * 6) + 1);
            if (randomNumber === number) {
                setValue('YOU WIN');
            } else {
                setValue('YOU LOSE');
            }
        } else {
            alert('Please select any number given in the up-right corner.');
        }
    };
    return (
        <div>
            <div className='flex justify-between items-center px-10 py-5'>
                <Link to='/'>
                    <button className='bg-zinc-900 text-white w-16 h-12 rounded-md flex justify-center items-center'>
                        <IoMdArrowRoundBack />
                    </button>
                </Link>
                <ul className='flex gap-2'>
                    <li onClick={() => setNumber(1)}>
                        <Btn2 text='1' />
                    </li>
                    <li onClick={() => setNumber(2)}>
                        <Btn2 text='2' />
                    </li>
                    <li onClick={() => setNumber(3)}>
                        <Btn2 text='3' />
                    </li>
                    <li onClick={() => setNumber(4)}>
                        <Btn2 text='4' />
                    </li>
                    <li onClick={() => setNumber(5)}>
                        <Btn2 text='5' />
                    </li>
                    <li onClick={() => setNumber(6)}>
                        <Btn2 text='6' />
                    </li>
                </ul>
            </div>
            <div className='flex flex-col gap-5 justify-center items-center w-full h-screen'>
                <h1 className='text-5xl font-bold'>
                    Your current number is{' '}
                    <span className='text-rose-500'>{number}</span>
                </h1>
                <div className='flex justify-center items-center text-3xl px-24'>
                    <div className='flex text-5xl font-semibold justify-center items-center gap-4'>
                        <div
                            className='text-4xl bg-zinc-900 text-white w-80 h-80 flex justify-center items-center rounded-xl select-none shadow-2xl active:bg-zinc-800'
                            onClick={() => generateRandomNumber(number)}
                        >
                            {randomNumber}
                        </div>
                        <div className='w-80 h-80 flex justify-center items-center rounded-lg border-2 border-zinc-900 shadow-2xl'>
                            <p>{value}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DicePlay;
