import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Booked from "./components/Booked";
import Homepage from "./components/Homepage";
function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path="/"  element={<Homepage/>}/> 
      <Route path="/booked"  element={<Booked/>}/> 
      
      </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
