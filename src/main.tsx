import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router";

import './index.css'

import App from './App.tsx'
import Home from "./components/Home.tsx";
import WIP from './components/WIP.tsx';

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
                element: <WIP />
            },
            {
                path: '/chapter',
                element: <WIP />
            },
            {
                path: '/rush',
                element: <WIP />
            }
        ]
    }
]);

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={router}></RouterProvider>
    </StrictMode>,
)
