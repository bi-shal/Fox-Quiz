import React from 'react';
import { ToastContainer } from 'react-toastify';

const Qanswer = ({opt,clickMe}) => {



    return (
        <div >
            <div className='rounded-md p-4 bg-orange-500 text-stone-900'>
                <button className='rounded-md p-4 bg-orange-500 text-stone-900'
                onClick={() => clickMe(opt)}>
                {opt}
                </button>
                <ToastContainer />
            </div>
        </div>
    );
};

export default Qanswer;