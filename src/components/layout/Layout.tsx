import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Announcement from './Announcement';

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Announcement />
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;