import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizQuestions from './QuizQuestions';

const Quizes = () => {
    const quizOption = useLoaderData();
    const { name, questions, } = quizOption.data;
    return (
        <div className='mt-10'>
            <div className='text-green-500  font-bold mb-10'>
                <h2 className='text-4xl'>Quiz of {name}</h2>
            </div>
            <div className='text-green-500  bg-slate-200 rounded-md'>
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

        </div >
    );
};
export default Quizes;