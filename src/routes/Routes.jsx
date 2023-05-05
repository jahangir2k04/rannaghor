import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";
import ChefRecipes from "../pages/ChefRecipes/ChefRecipes";
import PrivateRoute from "./PrivateRoute";
import About from "../pages/About/About";
import Blog from "../pages/Blog/Blog";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/chef-recipes/:id',
                element: <PrivateRoute><ChefRecipes></ChefRecipes></PrivateRoute>,
                loader: ({params}) => fetch(`https://b7a10-chef-recipe-hunter-server-side-jahangir2k04-jahangir2k04.vercel.app/chef-recipes/${params.id}`)
            },
            {
                path: 'about',
                element: <About></About>
            },
            {
                path: 'blog',
                element: <Blog></Blog>,
            },
            {
                path: 'login',
                element: <Login></Login>,
            },
            {
                path: 'register',
                element: <Register></Register>
            }
        ]
    }
]);

export default router;