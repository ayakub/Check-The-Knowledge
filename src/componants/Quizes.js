import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizQuestions from './QuizQuestions';

const Quizes = () => {
    const quizOption = useLoaderData();
    const { name, questions, logo } = quizOption.data;
    return (
        <div className='mt-10'>
            <div><img src={logo} alt="" />
                <h2 className='text-2xl'>{name}</h2>
            </div>
            {
                questions.map(newQues => <QuizQuestions
                    key={newQues.id}
                    quizQues={newQues}
                ></QuizQuestions>)
            }
            {/* {
                questions.map(newQues => console.log(newQues))
            } */}

        </div>
    );
};
export default Quizes;