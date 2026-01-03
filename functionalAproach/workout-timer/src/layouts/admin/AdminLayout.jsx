import { useEffect } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';

// Here is the most appropriate plase to check if the user is allowed to access admin routes

export default function AdminLayout() {
  const navigate = useNavigate();

  const isAdmin = true; // might be replaced with more complicated logic

  useEffect(() => {
    if (!isAdmin) {
      navigate('/');
    }
  }, [isAdmin, navigate]);

  return (
    <div>
      <header>Admin Panel</header>
      {/* You can add here a nav/sidebar/header/breadcrumbs/etc */}
      
      <main>
        {/* Render the nested routes here */}
        <Outlet />
      </main>
    </div>
  );
}

