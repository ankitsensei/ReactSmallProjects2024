import React, { useEffect } from 'react';
import { IoSearchCircle } from 'react-icons/io5';
import { FaWater } from 'react-icons/fa';
import { FaWind } from 'react-icons/fa6';

function App() {
    const search = async (city) => {
        try {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${
                import.meta.env.VITE_API_KEY
            }`;
            const response = await fetch(url);
            const data = await response.json();
            console.log(data);
        } catch (error) {}
    };
    useEffect(() => {
        search('London');
    }, []);
    console.log(import.meta.env.VITE_API_KEY);

    return (
        <div className='bg-zinc-900 text-white w-full h-screen'>
            <div className='flex flex-col items-center pt-20 h-full'>
                <h1 className='text-5xl font-bold'>Weather App</h1>
                <div className='border-2 border-zinc-600 mt-10 w-96 h-[600px] rounded-xl p-5 bg-summerImg bg-cover'>
                    <div className='flex items-center justify-center'>
                        <input
                            type='text'
                            className='w-64 h-10 rounded-md bg-zinc-800 bg-opacity-70 border-2 border-zinc-50 px-2 font-semibold outline-none'
                        />
                        <button>
                            <IoSearchCircle className='w-14 h-14' />
                        </button>
                    </div>
                    <div className='text-center mt-40'>
                        <h1 className='text-9xl'>40°</h1>
                        <h2 className='text-3xl font-semibold'>London</h2>
                    </div>
                    <div className='flex justify-between mt-12 text-white font-semibold bg-zinc-800 bg-opacity-50 border-2 border-zinc-100 p-5 rounded-lg'>
                        <div className='flex flex-col'>
                            <FaWater />
                            <div>
                                <p>91 %</p>
                                <p>Humidity</p>
                            </div>
                        </div>
                        <div>
                            <FaWind />
                            <div>
                                <p>3.6 km/h</p>
                                <p>Wind Speed</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
