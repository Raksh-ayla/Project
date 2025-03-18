import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./Page/Home";
import Courses from "./Page/Courses";
import AboutUs from "./Page/AboutUs";
import Pages from "./Page/Pages";
import Blog from "./Page/Blog";
import Contact from "./Page/Contact";
import WorkingHours from "./components/WorkingHours";
import Login from "./Page/Login";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col">
        <WorkingHours />
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/pages" element={<Pages />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;




