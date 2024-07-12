import React, { useState } from 'react';
import Btn from './Btn';
import Table from './Table';

function Demo() {
    return (
        <div className='flex flex-col items-center '>
            <Table
                className='text-red-600'
                start='START'
                end='END'
                task='TASK'
            />
            <Table start='06:00' end='07:00' task='Yoga/Exercise' />
            <Table start='07:00' end='08:00' task='Bath and Breakfast' />
            <Table start='09:00' end='10:00' task='Watch Anime' />
        </div>
    );
}

export default Demo;
