import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Registration from './Components/Registration/Registration.jsx';
import Root from './Components/Root/Root.jsx';
import LogIn from './Components/LogIn/LogIn.jsx';
import OwnerDashboard from './Components/OwnerDashboard/OwnerDashboard.jsx';
import AddNewHouse from './Components/AddNewHouse/AddNewHouse.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>,
    children:[
      {
        path:"/registration",
        element:<Registration></Registration>
      },
      {
        path:"/login",
        element:<LogIn></LogIn>
      },
      {
        path:"/owner-dashboard",
        element:<OwnerDashboard></OwnerDashboard>
      },
      {
        path:"/addnewhouse",
        element:<AddNewHouse></AddNewHouse>

      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
