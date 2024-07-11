import React from 'react';
import NavBar from './NavBar';
import Demo from './Demo';

function App() {
    return (
        <div
            className='bg-[#1d1e25] bg-cover w-full h-screen text-zinc-50'
            style={{
                backgroundImage: `url('https://wallpapercave.com/wp/wp10431873.jpg')`,
                opacity: 1,
            }}
        >
            {/* <NavBar title='ANKIT' /> */}
            <Demo />
        </div>
    );
}

export default App;
