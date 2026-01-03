import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, createBrowserRouter, RouterProvider } from "react-router-dom";
import 'virtual:windi.css'
import './index.css'
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import AdminLayout from "./layouts/admin/AdminLayout";
import Dashboard from "./pages/admin/Dashboard";
import Settings from "./pages/admin/settings/Settings";
import SettingsGeneral from "./pages/admin/settings/SettingsGeneral";
import SettingsThemes from "./pages/admin/settings/SettingsThemes";
import SettingsSite from "./pages/admin/settings/SettingsSite";
import UserDetails from './pages/admin/UserDetails';


const router = createBrowserRouter([
  {
    path:"/",
    element:<Home />
  },
  {
    path:"/contacts",
    element:<Contact />
  },
  {
    path:"/about",
    element:<About />
  },
  {
    path:"/admin",
    element:<AdminLayout />,
    children: [
      { path:"dashboard", element:<Dashboard /> },
      { path:"manage", element: <Dashboard /> },
      { 
        path:"manage/user/:userId",
        element: <UserDetails />,
        loader(){
        // має бути так: loader({params, request}){
          // console.log(params);
          // console.log(request);
          // fetch user and return result like return fetch('/api/users/' + params.userId); or
          return {
            tralalala: "olala" // simple object
          } 
          // return new Response(JSON.stringify({
          //     tralalala: "olala"
          //   })); or even like this
          // return json({
          //   tralalala: "Ooo no! Not like that!" // but json is depricated and you need it to import it as well
          // })
        },
        async action({params, request}) {
        // має бути так: action({params, request}){
          console.log(params);
          console.log(request);
          const formData = await request.formData();
          console.log('formData is ', Object.fromEntries(formData));

          return {
            errors: 'The email is wrong'
          }
        }
      },

      {
        path:"settings", 
        element:<Settings />,
        children: [
          { index: true, element: <SettingsGeneral /> },
          { path:"general", element:<SettingsGeneral /> },
          { path:"themes", element:<SettingsThemes /> },
          { path:"site", element:<SettingsSite /> },
        ]
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
