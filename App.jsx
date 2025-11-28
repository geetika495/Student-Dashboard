import React from "react";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import Dashboard from "./components/Dashboard";
import "./App.css";

function App() {
  return (
    <div className="layout">
      <div className="sidebar-wrapper">
        <Sidebar />
      </div>
      <div className="main">
        <Topbar />
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
