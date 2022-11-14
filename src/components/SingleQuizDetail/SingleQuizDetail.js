import React from 'react';
import './SingleQuizDetail.css';

const SingleQuizDetail = ({ quiz }) => {
    const { question, options, id } = quiz;
    
    return (
        <div className='m-2 p-2'>
            <div>
                <h3 className='m-3 p-3 bg-slate-200 rounded-lg w-auto'>{question}</h3>
                <div className='m-4 p-3'>
                    {
                        options.map((option) =>
                            <div>
                                <button className='m-1 p-2 w-72 rounded-lg bg-slate-300 single-button'> {option}</button>
                            </div>    
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default SingleQuizDetail;