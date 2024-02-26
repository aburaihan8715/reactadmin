import { Outlet } from 'react-router-dom';
import Topbar from '../components/topbar/Topbar';
import Sidebar from '../components/sidebar/Sidebar';
import './appLayout.css';

const AppLayout = () => {
  return (
    <div>
      <Topbar />
      <main className="container">
        <div className="sidebarContainer">
          <Sidebar />
        </div>
        <div className="outletContainer">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default AppLayout;
