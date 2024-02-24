import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';

import Layout from './components/shared/Layout';
import Home from './pages/Home';
import Login from './pages/Login';
import { AuthContextProvider } from './components/shared/AuthContext';

function App() {
  return (
    <AuthContextProvider>
      <Layout>
        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </Layout>
    </AuthContextProvider>
  );
}

export default App;
