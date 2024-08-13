import React from 'react';
import { Link } from 'react-router-dom';
import Dice from './Dice';
import Btn2 from './components/Btn2';
import { IoMdArrowRoundBack } from 'react-icons/io';

function DicePlay() {
    return (
        <div>
            <div className='flex justify-between items-center px-10 py-5'>
                <div className='flex items-center justify-center'>
                    <Link to='/'>
                        <button className='bg-zinc-900 text-white px-4 py-[10px] rounded-md'>
                            <IoMdArrowRoundBack />
                        </button>
                    </Link>

                    <h1 className='text-5xl font-bold'>DICE GAME</h1>
                </div>
                <ul className='flex gap-2'>
                    <li>
                        <Btn2 text='1' />
                    </li>
                    <li>
                        <Btn2 text='2' />
                    </li>
                    <li>
                        <Btn2 text='3' />
                    </li>
                    <li>
                        <Btn2 text='4' />
                    </li>
                    <li>
                        <Btn2 text='5' />
                    </li>
                    <li>
                        <Btn2 text='6' />
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default DicePlay;
