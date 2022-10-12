


import React from 'react';
import QuizOption from './QuizOption';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';

const QuizQuestions = ({ quizQues }) => {
    const { question, correctAnswer, options } = quizQues


    const handleQuestions = option => {
        if (option === correctAnswer) {
            toast.success("Correct!", { autoClose: 500, position: "top-center", theme: "colored", })
        } else {
            toast.error("Wrong", { autoClose: 500, position: "top-center", theme: "colored" })
        }

    }
    const handleEye = () => {
        // toast.info(`Correct answare:  ${correctAnswer}`, { autoClose: 500, })
        Swal.fire(correctAnswer)
    }
    return (
        <div>
            <div className=' mb-7'> <h3 className='text-3xl'>{question}</h3></div>
            <div className='bg-teal-100'>
                <div className='text-end md:mr-96'>
                    <button className='text-4xl' onClick={handleEye}><FontAwesomeIcon icon={faEye}></FontAwesomeIcon></button>
                </div>
                {
                    options.map(option => <QuizOption
                        key={option}
                        option={option}
                        handleQuestions={handleQuestions}
                    ></QuizOption>)
                }
            </div>
        </div >
    );
};

export default QuizQuestions;