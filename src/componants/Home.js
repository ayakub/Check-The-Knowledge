import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleItem from './SingleItem';
import pic from '../img/pic.webp'
const Home = () => {
    const items = useLoaderData();
    return (
        <div>
            <div className='mr-20 ml-20 bg-slate-700 px-10 py-7 mt-5 rounded-md md:flex '>
                <div className='md:w-50'>
                    <img className='w-/4 rounded-md' src={pic} alt="" />
                </div>
                <div className='text-gray-300 w-50 ml-3'>
                    <h1 className='text-2xl'> <p>quiz is a form of game or mind sport in which players attempt to answer questions correctly about a certain or variety of </p> subjects. Quizzes can be used as a brief assessment in education and similar fields to measure growth in knowledge, abilities, or skills</h1>
                </div>
            </div>
            <div className=" bg-green-200 mt-5 ">
                <div className='grid lg:grid-rows-1  lg:grid-flow-col  md:grid-rows-2  md:grid-flow-col  sm:grid-rows-4 sm:grid-flow-col gap-10 mr-10 ml-10 -py-5'>

                    {
                        items.data.map(item => <SingleItem
                            key={item}
                            item={item}

                        ></SingleItem>)
                    }
                </div>

            </div>
        </div>
    );
};

export default Home;