import { createBrowserRouter } from "react-router-dom";
import Blog from "../componants/Blog";
import Home from "../componants/Home";
import Main from "../componants/Main";
import Statics from "../componants/Statics";

export const router = createBrowserRouter([
    {
        path: '/', element: <Main></Main>, children: [
            { path: '/', element: <Home></Home> },
            { path: '/home', element: <Home></Home> },
            { path: '/statics', element: <Statics></Statics> },
            { path: '/blog', element: <Blog></Blog> },
        ]
    }
]);