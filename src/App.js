import Main from "./components/Main";
import React, { useState } from 'react';
import Sidebar from "./components/Sidebar";
import "./App.css"

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  return (
  
      <div className={`app ${sidebarOpen ? 'sidebar-open' : ''}`}>
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      <Main />
    </div>
   
  );
}

export default App;
