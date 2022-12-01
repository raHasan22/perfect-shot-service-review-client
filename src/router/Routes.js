import Main from "../layout/Main";
import About from "../pages/about/About";
import Blogs from "../pages/Blogs/Blogs";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import AddReview from "../pages/MyReview/AddReview";
import CheckReview from "../pages/MyReview/CheckReview";
import ServiceDetail from "../pages/servicedetail/ServiceDetail";
import AllServices from "../pages/sevicesAll/AllServices";
import SignUp from "../pages/signUp/SignUp";
import PrivateRoute from "./PrivateRoute";

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
                loader: ({params}) => fetch(`https://service-review-server-ashen.vercel.app/service/${params.id}`)
            },
            {
                path: '/addreview',
                element: <PrivateRoute><AddReview></AddReview></PrivateRoute>
            },
            {
                path: '/checkreview',
                element: <PrivateRoute><CheckReview></CheckReview></PrivateRoute>
            }
        ]
    }
]);

export default router;