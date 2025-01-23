import React, { useState, useEffect } from 'react';

interface Movie {
	id: string;
	title: string;
	genre: string;
	release_date: string;
	synopsis: string;
}

const App: React.FC = () => {
	const [movies, setMovies] = useState<Movie[]>([]);
	const [filteredMovies, setFilteredMovies] = useState<Movie[]>([]);
	const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

	const handleMovieClick = (movie: Movie) => {
		setSelectedMovie(movie);
	};

	const handleFilter = (genre: string) => {
		const filtered = movies.filter((m) => m.genre === genre);
		setFilteredMovies(filtered);
	};

	// fetch movie on Component mount
	useEffect(() => {
		fetch('http://example.com')
			.then((response) => response.json())
			.then((data: Movie[]) => {
				setMovies(data);
				setFilteredMovies(data); // initially display all movies
			})
			.catch((error) => console.error('Error fetching movie', error));
	}, []);

	const closeModal = () => {
		setSelectedMovie(null);
	};

	return (
		<>
			<ul>
				{filteredMovies.map((movie) => (
					<li key={movie.id} onClick={() => handleMovieClick(movie)}>
						{movie.title}
					</li>
				))}
			</ul>

			{selectedMovie && (
				<div className='modal'>
					<span onClick={closeModal}>Close</span>
					<h2>selectedMovie.title</h2>
					<p>Relese date: {selectedMovie.release_date}</p>
					<p>{selectedMovie.synopsis}</p>
				</div>
			)}
		</>
	);
};

export default App;
