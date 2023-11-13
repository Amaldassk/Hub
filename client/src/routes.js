import Home from './pages/Home'
import Profile from './pages/Profile'
import SignUp from './pages/SignUp'

export const privateRoutes = [
    {
        path: "/",
        element: <Home />,
    },
    {
        path:"/profile",
        element:<Profile/>
    }
];

export const publicRoutes = [
    {
        path:'/signup',
        element:<SignUp/>
    }
];