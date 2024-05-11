// src/App.js
import { Link, Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Header/>
      <main>
        <Outlet />
        {/* Content rendered by the router will go here */}
      </main>
      <Footer/>
    </div>
  );
};

export default App;