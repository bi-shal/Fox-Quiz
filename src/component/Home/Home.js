import React, { useContext } from 'react';
import { ProductContext } from '../../Layout/Main';
import Cart from '../Cart/Cart';


const Home = () => {
    const products = useContext(ProductContext)
   

    return (
        <div>
            <section>
	<div className="dark:bg-violet-400">
		<div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 dark:text-gray-900">
			<h1 className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl dark:text-gray-900">Do Someting New !</h1>
			<p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl dark:text-gray-900">Work hard and you can achieve anything. That’s a bit of advice that’s been repeated to us so many times that it’s sort of lost its meaning. The problem is that we already feel like we are working hard, but for many of us, it seems like we aren’t getting anywhere.!</p>
			
		</div>
	</div>
	<img src="https://i.ibb.co/KswJQCL/vasily-koloda-8-Cq-Dv-Puo-k-I-unsplash.jpg" alt="" className="w-5/6 mx-auto mb-12 -mt-20 rounded-lg shadow-md lg:-mt-40 dark:bg-gray-500 w-200 h-auto" />
</section>

    
    <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
      <div className='grid gap-8 row-gap-5 mb-8 lg:grid-cols-4 lg:row-gap-8'>

        {
            products.map(product => <Cart
                product={product}
                key = {product.id}
                // handleAddToCart={handleAddToCart}
            ></Cart>)
        }

    </div>
        </div>
    </div>
    );
};

export default Home;