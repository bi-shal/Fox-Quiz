import React from 'react';
import { BeakerIcon, EyeIcon } from '@heroicons/react/24/solid'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Showdata = ({allDta}) => {
    console.log(allDta);
    const {id,question,correctAnswer,options} = allDta

const rightAns = (correctAnswer) =>{
    toast(correctAnswer);
}

    return (


        <div className="flex flex-col p-8 space-y-4 rounded-md dark:bg-gray-900">
           <button onClick={()=>rightAns(correctAnswer)}>
           <EyeIcon className="h-6 w-6 text-blue-500"/>
           <ToastContainer />
           </button>
				<div className=" ">{question}</div>
                <div className=''> {options}</div>

			</div>


        // <div className='bg-green-400 m-20'>
        //     <h1>{question}</h1>
        //     <h1 className='bg-amber-300 m-2 '>{options}</h1>
        // </div>
    );
};

export default Showdata;