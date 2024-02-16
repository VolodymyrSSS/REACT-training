import React, { useState, useEffect } from 'react';
import axios from 'axios';

import styles from './Articles.module.scss';

function Articles() {
	const [posts, setPosts] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const { data } = await axios.get(
					'https://jsonplaceholder.typicode.com/posts'
				);

				setPosts(data);
			} catch (error) {
				alert(error.info);
			}
			setLoading(false);
		};
		fetchData();
	}, []);

	return (
		<div style={{ padding: '20px 50px' }}>
			<h1>Articles</h1>
			{loading && 'LOADING .....'}
			<div className={styles.wrapper}>
				{posts.map((post) => (
					<div className={styles.card} key={post.id}>
						<h4>{post.title}</h4>
						<h5>Post # {post.id}</h5>
						<p>{post.body}</p>
						<a href='/'>Read more</a>
					</div>
				))}
			</div>
		</div>
	);
}

export default Articles;
