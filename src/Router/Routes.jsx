import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Root from '../Components/Root/Root';
import Errorpage from '../Components/Errors/error';
import Home from '../Pages/Home/Home';
import PropertyDetails from '../Components/PropertyDetails/PropertyDetails';
import Updateprofile from '../Pages/Update-profile/Updateprofile';
import Login from '../Components/Login/Login';
import Register from '../Components/Register/Register';
import Privateroute from '../Components/Privateroute/Privateroute';
import Privacy from '../Pages/Privacy/Privacy_policies';

const router = createBrowserRouter([
    {
      element:<Root></Root>,
      path:'/',
      errorElement:<Errorpage></Errorpage>,
      children:[
        {
         path:'/',
         element:<Home></Home>
      },
      {
        path:'/updateprofile',
        element:<Privateroute><Updateprofile></Updateprofile></Privateroute>
      },
      {
        path:'/PropertyDetails/:id',
        element:<Privateroute><PropertyDetails></PropertyDetails></Privateroute>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/Register',
        element:<Register></Register>
      },
      {
        path:'/Policy',
        element:<Privateroute><Privacy></Privacy></Privateroute>
      }
    ]
    }])
export default router