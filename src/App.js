
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './component/Blog/Blog';
import Cartdtail from './component/CartDetail/Cartdtail';
import Statics from './component/Chart/Statics';
import Error from './component/Error/Error';
import Home from './component/Home/Home';
import Main from './Layout/Main';
import { loaderData } from './Loader/Loader';



// const router = createBrowserRouter([
//   {
//     path:'/',
//     element: <Main></Main>,
//     children: [
//       {path: '/', element: <Home></Home>},
//       {path: '/home',
//       loader: async () =>{
//         return fetch ('https://openapi.programming-hero.com/api/quiz')
//       },
//       element: <Home></Home>},
//       {path: '/', element: <Statics></Statics>},
//     ]
//   }
// ])


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<Error></Error>,  
      loader:loaderData,  
      children:[
        {path:'/', element:<Home></Home>},
        {path:'/home', element:<Home></Home>},
        {path:'/statics', element:<Statics></Statics>},
        {path:'/blog', element:<Blog></Blog>},
        {path:'/home/:homeId',
        loader:async({params}) =>{
        
          return fetch(`https://openapi.programming-hero.com/api/quiz/${params.homeId}`)
        },
         element:<Cartdtail></Cartdtail>
        }
      ]
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
