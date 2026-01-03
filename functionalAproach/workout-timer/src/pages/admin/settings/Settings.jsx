import { Link, Outlet } from 'react-router-dom';

export default function Settings() {
  return (
    <div>
      <h3>All admin settings</h3>

      <ul>
        <li><Link to='general'>General</Link></li>
        <li><Link to='themes'>Themes</Link></li>
        <li><Link to='site'>Site</Link></li>
      </ul>

      <div>
        <h4>Content :</h4>

        < Outlet />
      </div>
    </div>
  )
}
