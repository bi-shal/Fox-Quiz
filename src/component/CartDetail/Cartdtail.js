import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Showdata from '../Showdata/Showdata';

const Cartdtail = () => {
    const cartData = useLoaderData()
    // console.log(cartData.data.questions);
    const {name} = cartData.data
    return (
        <div>

            

            <section className="p-6 dark:bg-gray-200 dark:text-gray-100">
	<div className="container mx-auto">
		<h2 className="text-5xl font-bold text-center dark:text-gray-500">{name}</h2>
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


