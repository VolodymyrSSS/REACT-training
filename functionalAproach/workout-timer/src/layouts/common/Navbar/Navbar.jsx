import { Link } from 'react-router-dom';

import css from './Navbar.module.css';

export default function Navbar() {
  const navItems = [
    {
        title: "Home",
        href: "/"
    },
    {
        title: "About",
        href: "/about"
    },
    {
        title: "Contacts",
        href: "/contacts"
    },
    {
      title: "Admin",
      href: "/admin/dashboard"
    }
  ];

  return (
    <nav className={css.nav}>
      <ul>
        {navItems.map(item => (
          <li key={item.title}>
            <Link to={item.href}>{item.title}</Link>
            {/* <a href={item.href}>{item.title}</a> */}
          </li>
          ))
        }
      </ul>
    </nav>
  )
}
