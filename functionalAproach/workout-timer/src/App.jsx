import { Routes, Route, Outlet } from "react-router-dom";
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import AdminLayout from "./layouts/admin/AdminLayout";
import Dashboard from "./pages/admin/Dashboard";
import Settings from "./pages/admin/settings/Settings";
import SettingsGeneral from "./pages/admin/settings/SettingsGeneral";
import SettingsThemes from "./pages/admin/settings/SettingsThemes";
import SettingsSite from "./pages/admin/settings/SettingsSite";


// import './App.css'

function App() {

  return (
      <div>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/contacts" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/admin" element={<AdminLayout />}>
              <Route path="dashboard" element={<Dashboard />}/>
              <Route path="manage" element={<Dashboard />}/>
              <Route path="manage/user/:userId" element={<Dashboard />}/>
              <Route path="settings" element={<Settings />}>
                <Route path="general" element={<SettingsGeneral />}/>
                <Route path="themes" element={<SettingsThemes />}/>
                <Route path="site" element={<SettingsSite />}/>
              </Route>
            </Route>
          </Routes>
      </div>
  )
}

export default App
