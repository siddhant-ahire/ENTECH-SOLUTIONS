// src/App.js
import { Link, Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import MaintenanceModal from './components/MaintenanceModal';
import { useEffect, useState } from 'react';

const App = () => {
  const [isMaintenanceMode, setIsMaintenanceMode] = useState(false);

  useEffect(() => {
    // Simulate fetching maintenance mode status from an API or configuration
    const checkMaintenanceMode = async () => {
      // const response = await fetch('/api/maintenance-status'); // Replace with your API endpoint
      // const data = await response.json();
      setIsMaintenanceMode(true);
    };

    checkMaintenanceMode();
  }, []);

  return (
    <div>
      <Header/>
      <main>
        <Outlet />
        {/* <MaintenanceModal isOpen={isMaintenanceMode} setIsMaintenanceMode={setIsMaintenanceMode} /> */}
        {/* Content rendered by the router will go here */}
      </main>
      <Footer/>
    </div>
  );
};

export default App;