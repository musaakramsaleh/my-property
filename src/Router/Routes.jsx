import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Root from '../Components/Root/Root';
import Errorpage from '../Components/Errors/error';
import Home from '../Pages/Home/Home';
import PropertyDetails from '../Components/PropertyDetails/PropertyDetails';
import Updateprofile from '../Pages/Update-profile/Updateprofile';

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
        element:<Updateprofile></Updateprofile>
      },
      {
        path:'/PropertyDetails/:id',
        element:<PropertyDetails></PropertyDetails>
      }
    ]
    }])
export default router