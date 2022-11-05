import React from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
const ErrorPage = () => {
    return (
        <div className='justify-items-center'>
            <h1 className='text-rose-600 font-black text-9xl'>404</h1>
            <p className='text-2xl italic'>Oops!! The page you're trying to reach doesn't exist. Go to Home page or contact with us. </p>
            <MagnifyingGlassIcon className='h-28 w-28 text-gray-500'></MagnifyingGlassIcon>
        </div>
    );
};

export default ErrorPage;