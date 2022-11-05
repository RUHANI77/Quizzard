import React from 'react';
import './Home.css';
import homeImage from './quition.jpg';

const Home = () => {
    return (
        <div className='grid md:grid-cols-1 sm:grid-cols-1 m-2 p-5 gap-5'>
            <div>
                <h4 className='p-10 bg-slate-200 rounded-md font-bold'>WELCOME TO <span className='text-cyan-700'>QUIZZARD!</span></h4>
                <p className='text-2xl text-amber-500 font-semibold'>Test your skills!</p>
                <p>This is a platform where you can test your knowledge in various web development languages.</p>
                <div className='' >
                    <img src={homeImage} alt='home background images'></img>
                </div>
            </div>
        </div>
    );
};

export default Home;