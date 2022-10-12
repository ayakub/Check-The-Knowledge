import React from 'react';
import { ToastContainer } from 'react-toastify';

const QuizOption = ({ option, handleQuestions }) => {
    return (

        <div>
            <button onClick={() => handleQuestions(option)}>{option}
            </button>
            <ToastContainer />
            {/* Same as */}
            <ToastContainer />
        </div>
    );
};

export default QuizOption;