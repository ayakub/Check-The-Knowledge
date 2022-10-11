import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleItem from './SingleItem';

const Home = () => {
    const items = useLoaderData();
    return (
        <div className=" bg-green-200 mt-5 ">
            <div className='grid lg:grid-rows-1  lg:grid-flow-col  md:grid-rows-2  md:grid-flow-col  sm:grid-rows-4 sm:grid-flow-col gap-10 md:mr-20 md:ml-20'>
                {
                    items.data.map(item => <SingleItem
                        key={item}
                        item={item}

                    ></SingleItem>)
                }
            </div>

        </div>
    );
};

export default Home;