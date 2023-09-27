import React from 'react';
import {
    Chart as ChartJs,
    ArcElement,
    Tooltip,
    Legend

} from 'chart.js';
import { Pie, } from 'react-chartjs-2';
import { getItemOfLocalStor } from '../../utility/LocalStroage';
ChartJs.register(
    ArcElement,
    Tooltip,
    Legend


);
const Statistics = () => {
    const item = getItemOfLocalStor();
    const p = (12 * 100) / 12;
    const x = ((item.length * 100) / 12);
    console.log(p)

    const data = {
        labels: ['Total Donation', 'Your Donation'],
        datasets: [
            {
                backgroundColor: ['red', '#00C49F'],
                data: [p, x]
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