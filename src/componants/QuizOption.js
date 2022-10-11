import React from 'react';

const QuizOption = ({ option }) => {
    return (
        <div >
            <input
                type="radio"
                name="quiz"
                value={option}
                className=" checked:bg-red-500 cursor-pointer mr-2 mt-1 radio"
            />{option}
        </div>
    );
};

export default QuizOption;