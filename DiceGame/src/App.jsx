import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Dice from './Dice.jsx';
import DicePlay from './DicePlay.jsx';

function App() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Dice />,
        },
        {
            path: '/DicePlay',
            element: <DicePlay />,
        },
    ]);
    return (
        <div>
            <RouterProvider router={router} />
        </div>
    );
}

export default App;
