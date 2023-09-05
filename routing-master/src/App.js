import React from "react";
import "./App.css";
import {
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import Home from "./pages/Home";
import Userss from "./pages/Userss";
import Contact from "./pages/Contact";
import Menu from "./components/Menu";
import UserDetails from "./pages/UserDetails";
function App() {
  return (
    <BrowserRouter>
    <Menu/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Userss />} />
        <Route path="/users/:id" element={< UserDetails/>} />

        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
