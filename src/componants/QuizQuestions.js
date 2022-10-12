// import React from 'react';
// import QuizOption from './QuizOption';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';


import React from 'react';
import QuizOption from './QuizOption';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const QuizQuestions = ({ quizQues }) => {
    const { question, correctAnswer, options } = quizQues


    const handleQuestions = option => {
        if (option === correctAnswer) {
            toast.success("Correct!", { autoClose: 500, position: "top-center", theme: "colored", })
        } else {
            toast.error("Wrong", { autoClose: 500, position: "top-center", theme: "colored" })
        }

    }
    return (
        <div>
            <div className=' mb-7'> <h3 className='text-3xl'>{question}</h3></div>
            <div className='bg-teal-100'>
                {
                    options.map(option => <QuizOption
                        key={option.id}
                        option={option}
                        handleQuestions={handleQuestions}
                    ></QuizOption>)
                }
            </div>
        </div >
    );
};

export default QuizQuestions;