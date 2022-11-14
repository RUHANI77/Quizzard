import React from 'react';
import './Quizes.css';
import {ArrowRightIcon} from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';

const Quizes = ({ quiz }) => {
    const { id, logo, name, total } = quiz;
   
    return (
        <div className='quiz'>
            <div className='bg-slate-200 rounded-2xl'>
                <img className='text-center' src={logo} alt="logo" />
                <h4 className='font-bold'>{name}</h4>
                <p>Total Questions: {total}</p>
                <Link to={`/quiz/${id}`}>
                    <button className='m-3 px-4 py-2 rounded-lg  bg-lime-300 font-semibold quiz-button'>Start Now!<ArrowRightIcon className='h-6 w-6 inline space-x-2'></ArrowRightIcon></button>
                </Link>
            </div>
        </div>
        
    );
};

export default Quizes;