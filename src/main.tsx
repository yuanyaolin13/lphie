import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router";

import './index.css'

import App from './App.tsx'
import Home from "./components/pages/Home.tsx";
import Active from "./components/pages/Active.tsx";
import Chapter from "./components/pages/Chapter.tsx";
import Rush from "./components/pages/Rush.tsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <div>404 not found go back pls :(</div>,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: '/active',
                element: <Active />
            },
            {
                path: '/chapter',
                element: <Chapter />
            },
            {
                path: '/rush',
                element: <Rush />
            }
        ]
    }
]);

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={router}></RouterProvider>
    </StrictMode>,
)
