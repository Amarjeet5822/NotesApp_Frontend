import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import AllRoutes from "./components/AllRoutes";

function App() {
  return (
    <div className="max-w-7xl m-auto">
      <Navbar />
      <AllRoutes />
    </div>
  );
}

export default App;
