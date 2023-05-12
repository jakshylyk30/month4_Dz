import React from "react";
import './App.css';
import Cards from "./components/Cards/Cards";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import About from "./components/About/About";
import Header from "./components/Header/Header";


function App() {
  return (
    <div className="App">
        <Header/>
            <Routes>
                <Route path='/' element={<Cards/>}/>
                <Route path='/about/:id' element={<About/>}/>
            </Routes>
    </div>
  );
}

export default App;
