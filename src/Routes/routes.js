import Home from '../Pages/Home.tsx';

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../Pages/Login/index.jsx';
import Register from '../Pages/Register/index.jsx';
import Admin from '../Pages/Admin/Admin.tsx';

 
 
const AppRoutes = () => {
    return (
     <Router>
            <Routes>
                <Route path="/" element={<Home/>}></Route>       
                <Route path="/login" element={<Login/>}></Route> 
                <Route path="/register" element={<Register/>}></Route> 
                <Route path="/admin" element={<Admin/>}></Route>
                                
            </Routes>
        </Router>

    )
}

export default AppRoutes