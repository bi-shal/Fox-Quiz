import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bars3Icon,XMarkIcon } from '@heroicons/react/24/solid'


const Header = () => {

    const [open,setOpen] = useState(false);

    return (
        <div>
            <header className="p-4 dark:bg-gray-800 dark:text-gray-100">
	<div className="container flex justify-between h-16 mx-auto">
		<Link to='/' rel="noopener noreferrer" href="#" aria-label="Back to homepage" className="flex items-center p-2 text-green-600 text-4xl font-bold">
			Fox Quiz
		</Link>
		<ul className={`md:flex   justify-center p-6 md:static  absolute duration-500 ease-in    ${open ? 'top-20 mr-[-50px]':'top-[-190px]'}`}>
			<li className="flex">
            <Link to='/home' rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent dark:text-violet-800 dark:border-violet-800">Home</Link>
			</li>
			<li className="flex">
				<Link to='/statics' rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">Statics</Link>
			</li>
			
			<li className="flex">
				<Link to='/blog' rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">Blog</Link>
			</li>
			<li className="flex">
            <Link to='/statics'  rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">Topics</Link>
				
			</li>
		</ul>
		<button onClick={() => setOpen(!open)} className="h-6 w-6 md:hidden">
			{open ? <XMarkIcon /> : <Bars3Icon /> }
	
		</button>
	</div>
</header>
        </div>
    );
};

export default Header;