import React from 'react';
import { Link } from 'react-router-dom';
import Btn from './components/Btn';

function Dice() {
    return (
        <div className='flex justify-center items-center text-3xl px-24 w-full h-screen'>
            <img
                src='https://pngimg.com/uploads/dice/dice_PNG113.png'
                alt='dice'
                className='w-[800px]'
            />
            <div className='flex flex-col items-end gap-5'>
                <h1 className='text-9xl font-bold'>DICE GAME</h1>
                <Link to='DicePlay'>
                    <Btn text='Play Now' />
                </Link>
            </div>
        </div>
    );
}

export default Dice;
