import React from 'react';
import { Link } from 'react-router-dom';

const SingleItem = ({ item }) => {

    const { name, logo, total, id } = item;
    return (
        < div className='bg-green-900 md:p-7 mt-10 shadow-lg rounded-md '>

            <p className='text-right -mt-5'><span className='bg-teal-400 text-green-900 p-2 rounded-md'>total: {total}</span></p>
            <img className='' src={logo} alt="" />

            <div className='mt-7 justify-between  text-teal-400  inline-block relative'>

                <h3 className='text-2xl font-bold'>{name}</h3>

                <Link to={`quiz/${id}`}><button className='text-1xl font-semibold bg-teal-400  hover:bg-pink-400 hover:text-white text-green-900 py-3 px-3 rounded-md'>Go Practice</button></Link>
            </div>
        </div >
    );
};

export default SingleItem;