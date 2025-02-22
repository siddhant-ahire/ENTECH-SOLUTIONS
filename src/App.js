// src/App.js
import { Link, Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import MaintenanceModal from './components/MaintenanceModal';
import { useEffect, useState } from 'react';
import useWebsiteStore from './store/websiteStore';

const App = () => {
  const [isMaintenanceMode, setIsMaintenanceMode] = useState(false);

  useEffect(() => {
    // get website data with api call
    const websiteAPI = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/api/v1/website`);
        const data = await response.json();
        useWebsiteStore.setState({ website: data?.data });
      } catch (error) {
        console.error('Error fetching website data:', error);
      }
    };
    websiteAPI();
  }, []);

  return (
    <div>
      <Header/>
      <main>
        <Outlet />
        <MaintenanceModal isOpen={isMaintenanceMode} setIsMaintenanceMode={setIsMaintenanceMode} />
        {/* Content rendered by the router will go here */}
      </main>
      <Footer/>
    </div>
  );
};

export default App;