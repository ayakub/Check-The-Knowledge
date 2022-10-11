import React from 'react';

const QuizQuestions = ({ quizQues }) => {
    const { question, correctAnswer, options } = quizQues
    return (
        <div>
            <div> <h3 className='text-3xl'>{question}</h3></div>
            <div>
                {
                    options.map(option => <button className='block' type='check'>{option}</button>)
                }
            </div>
        </div>
    );
};

export default QuizQuestions;