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
import Hero from "./components/Hero";
import Run from "./components/Run";
import Departments from "./components/Departments";
import Topcourses from "./components/Topcourses";
import Benifits from "./components/Benifits";
import Partners from "./components//Partners";
import Testinomials from "./components/Testinomials";
import Map from "./components/Map";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col">
        <div className="w-full">
          <WorkingHours />
        </div>
        <div className="w-full">
          <Header />
        </div>
        <div className="w-full">
          <Hero />
        </div>
        <div className="w-full">
          <Run />
        </div>
        <div className="w-full">
          <Departments />
        </div>
        <div className="w-full">
          <Topcourses />
        </div>
        <div className="w-full">
          <Benifits />
        </div>
        <div className="w-full">
          <Partners />
        </div>
        <div className="w-full">
          <Testinomials />
        </div>
        <div className="w-full">
          <Map />
        </div>
        <div className="w-full">
          <Footer />
        </div>
        <div className="w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/pages" element={<Pages />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;



