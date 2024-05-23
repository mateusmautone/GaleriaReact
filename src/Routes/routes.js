import Home from '../Pages/Home.tsx';

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import  Login  from '../Pages/Login.tsx';

 
 
const AppRoutes = () => {
    return (
     <Router>
            <Routes>
                <Route path="/" element={<Home/>}></Route>       
                <Route path="/login" element={<Login/>}></Route>                 
            </Routes>
        </Router>

    )
}

export default AppRoutes