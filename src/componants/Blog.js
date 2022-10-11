import React from 'react';

const Blog = () => {
    return (
        <div className=' bg-green-200 mt-5 '>
            <div className='ml-20 mr-20 grid lg:grid-rows-1  lg:grid-flow-col  md:grid-rows-2  md:grid-flow-col  sm:grid-rows-4 sm:grid-flow-col gap-6 text-teal-900 p-10'>
                <div className='bg-green-300  p-10 rounded-md shadow-2xl'>
                    <h3 className='text-3xl font-bold'>What is purpoes react router</h3>
                    <p>A tool that allows you to handle routes in a web app, using dynamic routing. Dynamic routing takes place as the app is rendering on your machine, unlike the old routing architecture where the routing is handled in a configuration outside of a running app. React router implements a component-based approach to routing. It provides different routing components according to the needs of the application and platform. The following illustration shows how react router’s dynamic routing works as compared to traditional static routing:</p>
                </div>
                <div className='bg-green-300  p-10 rounded-md shadow-2xl'>
                    <h2 className='text-3xl font-bold'>How does contex api works</h2>
                    <p>Context provides a way to pass data through the component tree without   having to pass props down manually at every level.
                        In a typical React application, data is passed top-down (parent to child) via props, but such usage can be cumbersome for certain types of props (e.g. locale preference, UI theme) that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.
                    </p>
                </div>
                <div className='bg-green-300 p-10 rounded-md shadow-2xl'>
                    <h2 className='text-3xl font-bold'>What is useRef?</h2>
                    <p>
                        The useRef hook is the new addition in React 16.8. Before proceeding to this article there is a prerequisite to know about the ref in react.
                        The useRef is a hook that allows to directly create a reference to the DOM element in the functional component.The useRef returns a mutable ref object. This object has a property called .current. The value is persisted in the refContainer.current property. These values are accessed from the current property of the returned object. The .current property could be initialised to the passed argument initialValue e.g. useRef(initialValue). The object can persist a value for a full lifetime of the component.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;