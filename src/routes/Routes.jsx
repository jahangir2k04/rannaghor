import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";
import ChefRecipes from "../pages/ChefRecipes/ChefRecipes";


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
                element: <ChefRecipes></ChefRecipes>,
                loader: ({params}) => fetch(`http://localhost:5000/chef-recipes/${params.id}`)
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