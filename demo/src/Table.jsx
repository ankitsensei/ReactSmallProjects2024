import React from 'react';

function table(props) {
    return (
        <div>
            <tr className='flex gap-10'>
                <td className='w-30'>{props.start}</td>
                <td className='w-30'>{props.end}</td>
                <td className='w-80'>{props.task}</td>
            </tr>
        </div>
    );
}

export default table;
