import React, { useState, useEffect } from 'react';

import styles from './Articles.module.scss';

function Articles() {
	const [posts, setPosts] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(
					'https://jsonplaceholder.typicode.com/posts'
				);
				const data = await response.json();
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
