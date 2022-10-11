import React from 'react';
import QuizOption from './QuizOption';

const QuizQuestions = ({ quizQues }) => {
    const { question, correctAnswer, options } = quizQues
    return (
        <div>
            <div> <h3 className='text-3xl'>{question}</h3></div>
            <div className=' bg-slate-400'>
                {
                    options.map(option => <QuizOption
                        key={option.id}
                        option={option}
                    ></QuizOption>)
                }
                {
                    options.map(option => console.log(option))
                }
            </div>
        </div>
    );
};

export default QuizQuestions;