import React from "react";
import ReactDOM from "react-dom/client";
import Header from "home/Header";
import Footer from "home/Footer";
import "./index.css";


const App = () => (
  <div className="container">
    <Header />
    <div>Name: portfolio</div>
    <div>Framework: react</div>
    <div>Language: JavaScript</div>
    <div>CSS: Empty CSS</div>
    <Footer />
  </div>
);
const rootElement = document.getElementById("app")
if (!rootElement) throw new Error("Failed to find the root element")

const root = ReactDOM.createRoot(rootElement)

root.render(<App />)