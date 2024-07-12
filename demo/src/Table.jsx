import React, { useState } from 'react';

function table() {
    const [start, setStart] = useState('06:00');
    const [end, setEnd] = useState('07:00');
    const [task, setTask] = useState(['wake up']);
    return (
        <div>
            <tbody>
                <td>
                    {start.map((element, index) => {
                        return element.index;
                    })}
                </td>
            </tbody>
        </div>
    );
}

export default table;
