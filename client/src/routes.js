import ProductDashboard from './components/products/ProductDashboard';
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
    },
    {
        path:"/profile/products",
        element:<ProductDashboard/>
    }
];

export const publicRoutes = [
    {
        path:'/signup',
        element:<SignUp/>
    }
];