import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Admin from "./components/Admin";
import Create from "./components/Create";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Update from "./components/Update";
import Header from "./shared/Header";
import Footer from "./shared/Footer";

function App() {
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : {};
  });
  return (
    <div>
      <Header user={user} setUser={setUser} />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/create" element={<Create />} />

        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={<Login user={user} setUser={setUser} />}
        />

        <Route
          path="/signup"
          element={<Signup user={user} setUser={setUser} />}
        />

        <Route path="/update" element={<Update />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
