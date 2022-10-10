import React, { useContext } from 'react';
// import { Line, LineChart } from 'recharts';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { ProductContext } from '../../Layout/Main';


const Statics = () => {
    const products = useContext(ProductContext)
    
    return (
        <div>
            <h1>LineChart ...</h1>
            
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