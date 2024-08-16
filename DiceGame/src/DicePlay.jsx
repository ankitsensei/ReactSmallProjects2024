import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Btn2 from './components/Btn2';
import { IoMdArrowRoundBack } from 'react-icons/io';

function DicePlay() {
    const [number, setNumber] = useState('not selected yet');
    const [randomNumber, setRandomNumber] = useState('GENERATE');
    const [value, setValue] = useState('STATUS');
    const [help, setHelp] = useState(false);
    const [btnStatus, setBtnStatus] = useState(true);

    useEffect(() => {
        if (randomNumber !== 'GENERATE' && number !== 'not selected yet') {
            if (randomNumber === number) {
                setValue('YOU WIN');
            } else {
                setValue('YOU LOSE');
                console.log('Random number => ' + randomNumber);
                console.log('Selected number => ' + number);
            }
            setBtnStatus(false);
        }
    }, [randomNumber]);

    const generateRandomNumber = (number) => {
        if (number !== 'not selected yet') {
            const newRandomNumber = Math.floor(Math.random() * 6) + 1;
            setRandomNumber(newRandomNumber);
        } else {
            alert('Please select any number given in the up-right corner.');
        }
    };
    const restartGame = () => {
        setBtnStatus(true);
        setNumber('not selected yet');
        setRandomNumber('GENERATE');
        setValue('STATUS');
    };
    return (
        <div>
            <div className='flex justify-between items-center px-10 py-5'>
                <Link to='/'>
                    <button className='bg-zinc-900 text-white w-16 h-12 rounded-md flex justify-center items-center'>
                        <IoMdArrowRoundBack />
                    </button>
                </Link>
                {btnStatus && (
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
                )}
            </div>
            <div className='flex flex-col gap-5 justify-center items-center w-full h-screen'>
                <h1 className='text-5xl font-bold'>
                    Your selected number is{' '}
                    <span className='text-rose-500'>{number}</span>
                </h1>
                <div className='flex justify-center items-center text-3xl px-24'>
                    <div className='flex text-5xl font-semibold justify-center items-center gap-4'>
                        <div
                            className='text-4xl bg-zinc-900 text-white w-80 h-80 flex flex-col text-center justify-center items-center rounded-xl select-none shadow-2xl active:bg-zinc-800'
                            onClick={
                                btnStatus
                                    ? () => generateRandomNumber(number)
                                    : undefined
                            }
                        >
                            <p className='text-2xl'>Generated number is</p>
                            <p>{randomNumber}</p>
                        </div>
                        <div className='text-4xl bg-zinc-900 text-white w-80 h-80 flex justify-center items-center rounded-xl select-none shadow-2xl'>
                            <h1>{value}</h1>
                        </div>
                    </div>
                </div>
                <div className='flex gap-2'>
                    <button
                        className='w-20 h-10 bg-zinc-900 text-white rounded-md shadow-lg active:bg-zinc-700'
                        onClick={() => restartGame()}
                    >
                        RESTART
                    </button>
                    <button
                        className='w-20 h-10 bg-zinc-900 text-white rounded-md shadow-lg active:bg-zinc-700'
                        onClick={() => setHelp(!help)}
                    >
                        HELP
                    </button>
                </div>
                <div>
                    {help && (
                        <div className='flex flex-col p-10 w-[500px] h-[200px] gap-2 bg-zinc-900 text-white rounded-lg'>
                            <p>
                                1. You have to select any number given in the
                                up-right corner
                            </p>
                            <p>2. Then click to the GENERATE BUTTON</p>
                            <p>
                                3. If your GENERATED NUMBER is equal to your
                                SELECTED NUMBER then you will WIN 🎉 else you
                                will lose 😢
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default DicePlay;
