
import React from 'react'
import Home from '../view/home/index';
import { Navigate } from 'react-router-dom'

let route = [
    {
        path:'/',
        element: <Navigate to='/home' />,
    },
    {
        path:'/home',
        element: <Home />,
    }
]

export default route
