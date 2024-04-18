import './App.css'
import {Login} from "./component/login/Login.tsx";
import {Register} from "./component/register/Register.tsx";
import {router} from "./app-routes.tsx";
import {RouterProvider} from "react-router-dom";

function App() {
    return (
        <RouterProvider router={router}/>
    )
}

export default App
