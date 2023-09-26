import React from 'react';
import {
    Chart as ChartJs,
    ArcElement,
    Tooltip,
    Legend
} from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { getItemOfLocalStor } from '../../utility/LocalStroage';
ChartJs.register(
    ArcElement,
    Tooltip,
    Legend
);
const Statistics = () => {
    const item = getItemOfLocalStor();

    const data = {
        labels: ['Total Donation', 'Your Donation'],
        datasets: [
            {

                backgroundColor: ['red', '#00C49F'],
                data: [12, item.length]

            }
        ]
    };

    return (
        <div className='App'>

            <div className=' flex justify-center items-center '>
                <div className='md:w-[500px] h-[700px] '>
                    <Pie data={data}

                    ></Pie>
                </div>
            </div>
        </div>
    );
};

export default Statistics;