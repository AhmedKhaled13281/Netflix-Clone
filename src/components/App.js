import React from 'react';
import Home from './home/home'
import Register from './Register/register'
import { Routes , Route } from 'react-router-dom';
import './App.scss'
const App = () => {
    return (
        <div>
            <Routes>
                <Route exact path="/" element={<Register/>}/>
                <Route path="/home" element={<Home/>}/>
            </Routes>

        </div>
    );
}

export default App;