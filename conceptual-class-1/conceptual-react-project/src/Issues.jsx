import React, { useState } from 'react';
import { use } from 'react';
import Issue from './Issue';
import Status from './Status';

const Issues = ({fetchData}) => {
    const initialData = use(fetchData)
    const [data,setData]=useState(initialData)
    return (
        <>
        <Status data={data}></Status>
        <div className='grid grid-cols-3 container mx-auto gap-5'>
            {data.map(element => <Issue key={element.ticketId} issue={element}></Issue>)}
        </div>
        </>
    );
};

export default Issues;