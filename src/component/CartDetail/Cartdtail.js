import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Showdata from '../Showdata/Showdata';

const Cartdtail = () => {
    const cartData = useLoaderData()
    // console.log(cartData.data.questions);
    const {name} = cartData.data
    return (
        <div>

            <h1 className='text-center text-3xl text-orange-700'> {name}</h1>

            <section className="p-6 dark:bg-gray-800 dark:text-gray-100">
	<div className="container mx-auto">
		<span className="block mb-2 text-xs font-medium tracking-widest text-center uppercase dark:text-violet-400">How it works</span>
		<h2 className="text-5xl font-bold text-center dark:text-gray-50">Building with Mamba is simple</h2>
		<div className="grid gap-6 my-16 lg:grid-cols-1">

        {
                cartData.data.questions.map(allDta=> <Showdata
                key={allDta.id}
                allDta={allDta}
                ></Showdata>)
            }
			
		</div>
	</div>
</section>
           
            
        </div>
    );
};

export default Cartdtail;


