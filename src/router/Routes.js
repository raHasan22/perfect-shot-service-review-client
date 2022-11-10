import Main from "../layout/Main";
import Home from "../pages/home/Home";
import AllServices from "../pages/sevicesAll/AllServices";

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
            }
        ]
    }
]);

export default router;