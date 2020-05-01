import React from 'react';
import {Route} from "react-router-dom"


import './App.css';
import Home from "./Components/Home"
import Projects from "./Components/Projects";
import About from "./Components/About";
import Contact from "./Components/Contact";

function App() {
  return (
    <div className="App">
      <Route 
      path = "/"
      exact component = {Home}/>
      <Route
      path = "/Projects"
      component = {Projects}/>
      <Route
      path = "/About"
      component = {About}/>
      <Route
      path = "/Contact"
      component = {Contact}/>
      
    </div>
  );
}

export default App;
