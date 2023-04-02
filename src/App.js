import React from "react";
import './App.css'
import Navbar from "./Components/Navbar/Navbar";
import Contact from "./Components/Contact/Contact";
import Home from "./Components/Home/Home";
import Projects from "./Components/Projects/Projects";
import Skills from "./Components/Skills/Skills";
import { Route, Routes } from 'react-router-dom';
const App = () =>{
    return (
        <div className="app">
         <Navbar/>
            <Home/>
            <Skills/>
            <Projects/>
            <Contact/>
  
    </div>
    ) 
}
export default App;