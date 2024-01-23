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
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
