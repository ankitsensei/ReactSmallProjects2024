import React from 'react';

function form() {
    return (
        <div>
            <div className='flex flex-col text-4xl gap-10'>
                <h1>
                    Hi! My name is{' '}
                    <span>
                        <input
                            type='text'
                            placeholder='Enter your name*'
                            className='bg-zinc-900 mx-2 border-b-2 text-center outline-none'
                        />
                    </span>{' '}
                    and I work with{' '}
                    <span>
                        <input
                            type='text'
                            placeholder='Company name type here*'
                            className='bg-zinc-900 mx-2 border-b-2 text-center outline-none'
                        />
                    </span>
                </h1>
                <h1>
                    I'm looking for a partner to help me with{' '}
                    <span>
                        <input
                            type='text'
                            placeholder='Your goal type here*'
                            className='bg-zinc-900 mx-2 border-b-2 text-center outline-none'
                        />
                    </span>
                </h1>
                <h1>
                    With an idea of having that completed{' '}
                    <span>
                        <input
                            type='date'
                            placeholder='date*'
                            className='bg-zinc-900 mx-2 border-b-2 text-center outline-none'
                        />
                    </span>
                </h1>
                <h1>
                    I am hoping to stay around a budget range of{' '}
                    <span>
                        <select
                            name='price'
                            id='price'
                            className='px-20 text-black'
                            placeholder='select*'
                        >
                            <option value='$5,000 - 15,000'></option>
                            <option value='$15,000 - 25,000'></option>
                            <option value='$25,000 - 50,000'></option>
                        </select>
                    </span>
                </h1>
            </div>
        </div>
    );
}

export default form;
