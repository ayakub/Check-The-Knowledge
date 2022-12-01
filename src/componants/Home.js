import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleItem from './SingleItem';
import pic from '../img/pic.webp'
const Home = () => {
    const items = useLoaderData();
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 w-3/5 bg-indigo-300 mx-auto'>
                <div className='md:w-50'>
                    <img className='' src={pic} alt="" />
                </div>
                <div className='flex items-center'>
                    <h1 className='text-2xl'>quiz is a form of game or mind sport in which players attempt to answer questions correctly about a certain or variety of subjects. <span className='sm:hidden'>Quizzes can be used as a brief assessment in education and similar fields to measure growth in knowledge, abilities, or skills</span></h1>
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