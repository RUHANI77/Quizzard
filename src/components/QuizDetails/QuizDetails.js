import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleQuizDetail from '../SingleQuizDetail/SingleQuizDetail';

const QuizDetails = () => {
    const quizDetails = useLoaderData();
    console.log(quizDetails);
    return (
        <div>
            <h2 className='m-3 p-2 text-slate-600'>Quiz Topic: {quizDetails.data.name}</h2>

            <div>
                {
                    quizDetails.data.questions.map((quiz) =>
                    
                        <SingleQuizDetail
                            key={quiz.id}
                            quiz={quiz}

                        ></SingleQuizDetail>

                    
                    )
                }
            </div>
            

        </div>
    );
};

export default QuizDetails;