import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import AboutUsPage from "./Pages/AboutUs";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";
import SignUp from "./Pages/SignUp";
import Contact from "./Pages/Contact";
import PrivateRoute from "./Routes/PrivateRoute";

function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Router>
          <Navbar />
          <div className="flex-grow">
            <Routes>
              <Route path="/signup" element={<SignUp />} />
              <Route path="/" element={<Home />} />
              <Route path="/aboutus" element={<AboutUsPage />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/" element={<PrivateRoute />}></Route>
            </Routes>
            </div>
          <Footer />
        </Router>
      </div>
    </>
  );
}

export default App;
