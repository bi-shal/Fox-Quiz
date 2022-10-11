import React, { createContext } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Header from '../component/Header/Header';

export const ProductContext = createContext([])
const Main = () => {
    const products = useLoaderData()
    // console.log(products)
    return (
        <div>
            <ProductContext.Provider value={products}>
            <Header></Header>
            <Outlet></Outlet>
            </ProductContext.Provider>
        </div>
    );
};


export default Main;