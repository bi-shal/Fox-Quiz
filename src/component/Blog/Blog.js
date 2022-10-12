import React from 'react';

const Blog = () => {
    
    return (
        <div className='grid grid-cols-1 m-5 '>
            <div className='bg-sky-800 m-5 p-5'>
                <h1 className='text-2xl font-bold '>React Router</h1>
                <h3>React Router is a fully-featured client and server-side routing library for React, a JavaScript library for building user interfaces. React Router runs anywhere React runs; on the web, on the server with node.js, and on React Native.</h3>
            </div>
            <div className='bg-sky-800 m-5 p-5'>
                <h1 className='text-2xl font-bold '>Context API Work</h1>
                <h3>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</h3>
            </div>
            <div className='bg-sky-800 m-5 p-5'>
                <h1 className='text-2xl font-bold '>React useRef</h1>
                <h3>Essentially, useRef is like a “box” that can hold a mutable value in its .current property. You might be familiar with refs primarily as a way to access the DOM. If you pass a ref object to React with  , React will set its .current property to the corresponding DOM node whenever that node changes.</h3>
            </div>

        </div>
    );
};

export default Blog;