import { Route, Routes } from 'react-router-dom';
import './App.css';
import Sidebar from './components/SideBar';
import Accounts from './components/SidebarItems/Accounts';
import CreditCards from './components/SidebarItems/CreditCards';
import Dashboard from './components/SidebarItems/Dashboard';
import Investments from './components/SidebarItems/Investments';
import Loans from './components/SidebarItems/Loans';
import MyPrivileges from './components/SidebarItems/MyPrivileges';
import Services from './components/SidebarItems/Services';
import Setting from './components/SidebarItems/Setting';
import Transactions from './components/SidebarItems/Transactions';

function App() {
  return (
    <>
      <div className="flex">
        <div className="flex">
          <Sidebar />

          <div className="flex-1">
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/transactions" element={<Transactions />} />
              <Route path="/accounts" element={<Accounts />} />
              <Route path="/investments" element={<Investments />} />
              <Route path="/cards" element={<CreditCards />} />
              <Route path="/loans" element={<Loans />} />
              <Route path="/services" element={<Services />} />
              <Route path="/privileges" element={<MyPrivileges />} />
              <Route path="/settings" element={<Setting />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
