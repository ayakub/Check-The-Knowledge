import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, Tooltip, } from 'recharts';

const Statics = () => {
    const datas = useLoaderData();
    const data = datas.data;
    return (
        <div className='flex justify-center bg-black mt-20 md:p-10 md:ml-20 md:mr-10 rounded-md'>
            <div className='content-center '>
                <LineChart width={350} height={350} data={data}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip></Tooltip>
                    <Line
                        type="monotone"
                        dataKey="total"
                        stroke="#8884d8"
                    />
                </LineChart>
            </div>
        </div>
    );
};

export default Statics;