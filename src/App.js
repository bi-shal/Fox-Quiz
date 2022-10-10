
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './component/Blog/Blog';
import Error from './component/Error/Error';
import Home from './component/Home/Home';
import Main from './Layout/Main';
import { loaderData } from './Loader/Loader';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement:<Error></Error>,  
    loader:loaderData,  
    children:[
      {path:'/', element:<Home></Home>},
      {path:'/home', element:<Home></Home>},
      {path:'/topics', element:<Home></Home>},
      {path:'/blog', element:<Blog></Blog>}
    ]
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
