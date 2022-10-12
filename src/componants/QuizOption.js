import React from 'react';
import { ToastContainer } from 'react-toastify';

const QuizOption = ({ option, handleQuestions }) => {
    return (

        <div>
            <button className='border-orange-600 bg-green-800 m-3 p-3 w-72  text-slate-400 text-2xl font-semibold rounded-md ' onClick={() => handleQuestions(option)}>{option}
            </button>
            <ToastContainer />
            {/* Same as */}
            <ToastContainer />
        </div>
    );
};

export default QuizOption;