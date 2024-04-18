import {createBrowserRouter, RouteObject} from "react-router-dom";
import {Login} from "./component/login/Login.tsx";
import {Register} from "./component/register/Register.tsx";
import {Welcome} from "./component/welcome/Welcome.tsx";


const routes: RouteObject[] = [
    {
        path: 'login',
        Component: Login
    },
    {
        path: 'register',
        Component: Register
    },
    {
        path: '',
        Component: Welcome
    }
]

export const router = createBrowserRouter(routes);