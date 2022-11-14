import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quizes from '../Quizes/Quizes';

const Quiz = () => {
    const quizes = useLoaderData();
    
    return (
        <div className='m-10'>
            <h2 className='m-5 text-slate-600'>Select your Quiz topic: {quizes.data.length}</h2>
            {
                quizes.data.map(quiz => <Quizes
                    key={quiz.id}
                    quiz = {quiz}
                ></Quizes>)
            }
        </div>
    );
};

export default Quiz;