import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';

import Layout from './components/shared/Layout';
import Home from './pages/Home';
import Login from './pages/Login';
import Movies from './pages/Movies';
import ProtectedRoute from './components/shared/ProtectedRoute';
import { AuthContextProvider } from './components/shared/AuthContext';

function App() {
  return (
    <AuthContextProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<ProtectedRoute accessBy="non-authenticated"><Login /></ProtectedRoute>}></Route>
          <Route path="/movies" element={<ProtectedRoute accessBy="authenticated"><Movies /></ProtectedRoute>}></Route>
        </Routes>
      </Layout>
    </AuthContextProvider>
  );
}

export default App;
