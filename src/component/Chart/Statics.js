import React, { useContext } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';
import { ProductContext } from '../../Layout/Main';


const Statics = () => {
    const products = useContext(ProductContext)
    
    return (
        <div>
            <h1 className='text-3xl font-bold'>LineChart ...</h1>
            
            <LineChart width={279} height={350} data={products}>
            <Line type="monotone" dataKey="total" stroke="#82ca9d" />
            <XAxis dataKey="name" />
          <YAxis />
          <Tooltip></Tooltip>
            </LineChart>
        </div>
    );
};

export default Statics;