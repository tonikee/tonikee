import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FloatingButtons from "./components/FloatingButtons";
import Home from "./pages/Home";
import DigiPage from "./pages/DigiPage";
import RepairsPage from "./pages/RepairsPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import { Toaster } from "./components/ui/sonner";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/digi" element={<DigiPage />} />
            <Route path="/reparaciones" element={<RepairsPage />} />
            <Route path="/sobre-nosotros" element={<AboutPage />} />
            <Route path="/contacto" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
        <FloatingButtons />
        <Toaster />
      </BrowserRouter>
    </div>
  );
}

export default App;
