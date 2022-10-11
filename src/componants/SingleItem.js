import React from 'react';
import { Link } from 'react-router-dom';

const SingleItem = ({ item }) => {

    const { name, logo, total, id } = item;
    return (
        < div className='bg-green-900  p-10 mt-10 shadow-lg rounded-md '>
            <p className='text-right   -mt-5'><span className='bg-teal-400 text-green-900 p-2 rounded-md'>total: {total}</span></p>
            <img className='object-scale-down' src={logo} alt="" />
            <div className='mt-7 flex justify-between bg-teal-400 text-green-900'>
                <h3 className='text-2xl font-bold'>{name}
                </h3>
                <Link to={`quiz/${id}`}><button className='bg-'>Go Practice</button></Link>
            </div>
        </div >
    );
};

export default SingleItem;