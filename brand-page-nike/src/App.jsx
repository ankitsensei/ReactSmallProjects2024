import React from 'react';
import NavBar from './NavBar';
function App() {
    return (
        <div>
            <div>
                <NavBar />
                <div className='flex justify-evenly items-start mx-40 mt-40'>
                    <div className='w-1/2'>
                        <h1 className='text-8xl font-extrabold'>
                            YOUR FEET DESERVE THE BEST
                        </h1>
                        <p className='text-base pe-40 mt-10'>
                            YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP
                            YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND
                            WE'RE HERE TO HELP YOU WITH OUR SHOES.
                        </p>
                        <div className='flex gap-5 mt-10 font-bold'>
                            <button className='bg-red-600 text-white w-28 h-10 rounded'>
                                Shop Now
                            </button>
                            <button className='border-zinc-900 border-2 w-28 h-10 rounded hover:bg-red-600 hover:text-white'>
                                Category
                            </button>
                        </div>
                        <div className='mt-10'>
                            <p>Also available on</p>
                            <div className='flex items-center'>
                                <img
                                    src='https://i.pinimg.com/originals/eb/9f/37/eb9f3772c2d90203412a221d6cf044b1.png'
                                    alt='flipkart'
                                    className='w-20 h-20'
                                />
                                <img
                                    src='https://i.pinimg.com/originals/01/ca/da/01cada77a0a7d326d85b7969fe26a728.jpg'
                                    alt='amazon'
                                    className='w-20 h-20'
                                />
                            </div>
                        </div>
                    </div>
                    <div>
                        <img
                            src='https://images.51microshop.com/10908/product/20220122/Air_Jordan_4_Red_Glow_Infrared_DH6927_061_1642853783386_0.png'
                            alt='shoe'
                            className='w-[1200px]'
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
