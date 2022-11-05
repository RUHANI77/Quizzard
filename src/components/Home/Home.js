import React from 'react';
import homeImage from './quition.jpg';

const Home = () => {
    return (
        <div className='grid md:grid-cols-2 sm:grid-cols-1 m-10 p-5 gap-5'>
            <div>
                <h4 className='m-4 p-8 bg-slate-200 rounded-md font-bold'>WELCOME TO QUIZZARD!</h4>
                <p className='text-2xl text-amber-400 font-semibold'>Test your skills!</p>
                <p>This is a platform where you can test your knowledge in various web development languages.</p>
            </div>

            <div>
                <img className='bg-auto bg-no-repeat bg-center' src={homeImage} alt='home background images'></img>
            </div>
           
        </div>
    );
};

export default Home;