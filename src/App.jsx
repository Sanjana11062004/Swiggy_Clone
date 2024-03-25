import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Dish from "./components/Dish";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/dish" element={<Dish/>} />
      </Routes>
    </div>
  );
}

export default App;
