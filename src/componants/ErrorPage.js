import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='content-center'>
            <div className='text-3xl font-bold text-red-500'>
                <h1>404</h1>
                <h2>Page not found</h2>
            </div>
            <div>
                <Link to='/'><button>Back Home</button></Link>
            </div>
        </div>
    );
};

export default ErrorPage;