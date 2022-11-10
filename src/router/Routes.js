import Main from "../layout/Main";
import About from "../pages/about/About";
import Blogs from "../pages/Blogs/Blogs";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import ServiceDetail from "../pages/servicedetail/ServiceDetail";
import AllServices from "../pages/sevicesAll/AllServices";
import SignUp from "../pages/signUp/SignUp";

const { createBrowserRouter } = require("react-router-dom");

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
                path: '/services',
                element: <AllServices></AllServices>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/service/:id',
                element: <ServiceDetail></ServiceDetail>,
                loader: ({params}) => fetch(`http://localhost:5000/service/${params.id}`)
            },
        ]
    }
]);

export default router;