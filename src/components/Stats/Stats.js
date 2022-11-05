import React from 'react';
import './Stats.css';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar, Cell, } from 'recharts';


const Stats = () => {
    const data = [
        {
            name: 'React',
            total: 8,
        },
        {
            name: 'JavaScript',
            total: 9,
        },
        {
            name: 'CSS',
            total: 8,
        },
        {
            name: 'Git',
            total: 11,
        },
        
    ];


    return (
        
        <div>
            <h3 className='m-5 text-slate-600'>Charts of Total Questions</h3>
            <div className='my-8 statss'>
                    <div>
                        <LineChart width={350} height={300} data={data}>
                            <Line type="monotone" dataKey="total" stroke="#82ca9d" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                        </LineChart>
                        <h5 className='m-3'>Line Chart</h5>
                    </div>
                    <div>
                        <BarChart width={350} height={300} data={data}>
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Bar dataKey="total" fill="#82ca9d" />
                        </BarChart>
                    <h5 className='m-3'>BarChart</h5>
                    </div>
            </div>

        </div>     
    );
};

export default Stats;