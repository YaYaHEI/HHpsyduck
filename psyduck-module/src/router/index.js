
import Home from '../view/home/index';
import { Navigate } from 'react-router-dom'
import Ybutton from '../components/Ybutton/index'
let route = [
    {
        path:'/',
        element: <Navigate to='/home' />,
    },
    {
        path:'/home',
        element: <Home />,
    },
    {
        path:'/button',
        element: <Ybutton />,
    }
]

export default route
