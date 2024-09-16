import React from 'react'
import { Navigate, Outlet, Route, Routes } from 'react-router-dom'
import path from './Path'
import MainLayout from '../Layout/MainLayout/Index'
import Home from '../Pages/Home/Components/Index'

function Router() {
  return (
    <Routes>
      

        <Route path={path.home} element={<MainLayout/>}>
            <Route index element={<Home/>} />
            
           
        </Route>
       
    </Routes>
  )
}

export default Router