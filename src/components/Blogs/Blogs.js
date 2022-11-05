import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div className='m-4 p-8 bg-red-300 rounded-md'>
                <h4 className='font-bold'>What is the purpose of react router?</h4>
                <p>React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route.</p>
            </div>
        </div>
    );
};

export default Blogs;