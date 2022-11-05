import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h3 className='m-4 text-slate-600'>Frequently Asked Questions</h3>
            <div className='m-4 p-8 bg-slate-200 rounded-md'>
                <h4 className='font-bold'>What is the purpose of react router?</h4>
                <p>React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route.</p>
            </div>
            <div className='m-4 p-8 bg-slate-200 rounded-md'>
                <h4 className='font-bold'>How does the Context API work?</h4>
                <p>The concept behind it is very simple: There is one big Provider, that provide the data to many Consumers, there's no limit in the amount of consumers you can use. Every time the data stored within the Provider changes, all the Consumers update.</p>
            </div>
            <div className='m-4 p-8 bg-slate-200 rounded-md'>
                <h4 className='font-bold'>What is react useRef Hook?</h4>
                <p>The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.</p>
            </div>
            <div className='m-4 p-8 bg-slate-200 rounded-md'>
                <h4 className='font-bold'>How does the useRef Hook works?</h4>
                <p>Simply put, the useRef hook returns a mutable (Can be modified) ref object that has a.current property that is set to the value of the argument that was just passed in. The returned object persists between component re-renders.</p>
            </div>
        </div>
    );
};

export default Blogs;