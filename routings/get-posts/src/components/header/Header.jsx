import React from 'react';
import { Link } from 'react-router-dom';
import { menu } from '../../assets/menu.js';
import logo from '../../assets/img/spidermonkey.svg';

import styles from './Header.module.scss';

function Header() {
	return (
		<div className={styles.header}>
			<div className={styles.logo}>
				<img src={logo} alt='logo' height='35' />
			</div>
			<div className={styles.wrapper}>
				<ul className={styles.menu}>
					{menu.map((item, index) => (
						<li key={index}>
							<Link to={item.link}>{item.title}</Link>
						</li>
					))}
				</ul>
				<div className={styles.buttons}>
					<button className={styles['login-button']}>Login</button>
					<button className={styles['signup-button']}>Sign up</button>
				</div>
			</div>
		</div>
	);
}

export default Header;
