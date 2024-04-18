import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {router} from "./app-routes.tsx";
import {RouterProvider} from "react-router-dom";
import {Welcome} from "./component/welcome/Welcome.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
