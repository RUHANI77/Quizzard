import React from 'react';
import { useLoaderData } from 'react-router-dom';

const QuizDetails = () => {
    const quizDetails = useLoaderData();
    console.log(quizDetails.data.questions[0]);
    const { id } = quizDetails;

    return (
        <div>
            <h2>Quiz details: {quizDetails.data.questions
            [0].id}</h2>
        </div>
    );
};

export default QuizDetails;