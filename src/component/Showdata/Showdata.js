
import { EyeIcon } from '@heroicons/react/24/solid'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Qanswer from '../Qanswer/Qanswer';


const Showdata = ({allDta}) => {
    // console.log(allDta);
    const {question,correctAnswer,options} = allDta

const rightAns = (correctAnswer) =>{
    toast(correctAnswer);
}

const clickMe = (opt) =>{
   
    if(correctAnswer === opt){
        toast('its true')

    }else{
        toast('its false')
    }
    
}

    return (


        <div className="flex flex-col p-8 space-y-4 rounded-md dark:bg-gray-900">
           <button onClick={()=>rightAns(correctAnswer)}>
           <EyeIcon className="h-6 w-6 text-blue-500"/>
           <ToastContainer />
           </button>
				<h1 className=" text-2xl pb-5">{question}</h1>
                <div className="grid gap-10 my-2 lg:grid-cols-2">
                    {
                        options.map((opt,index) => <Qanswer
                            index={index}
                            opt={opt}
                            clickMe={clickMe}
                        ></Qanswer>)
                    }
                </div>

			</div>

    );
};

export default Showdata;