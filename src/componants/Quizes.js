import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizQuestions from './QuizQuestions';

const Quizes = () => {
    const quizOption = useLoaderData();
    const { name, questions, } = quizOption.data;
    return (
        <div className='mt-10'>
            <div>
                <h2 className='text-2xl'>{name}</h2>
            </div>
            <div>
                {
                    questions.map(newQues => <QuizQuestions
                        key={newQues.id}
                        quizQues={newQues}
                    ></QuizQuestions>)
                }
            </div>
            {/* {
                questions.map(newQues => console.log(newQues))
            } */}

        </div>
    );
};
export default Quizes;