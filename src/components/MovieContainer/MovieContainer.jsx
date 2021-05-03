const IMG_URL = 'https://image.tmdb.org/t/p/w400'

const MovieContainer = ({ backdrop_path, id, original_title, vote_average, overview, genres }) => {
	return (
		<>
			<img src={`${IMG_URL}/${backdrop_path}`} alt={`Poster of ${original_title}`} />
			<h1>{original_title}</h1>
			<p>User score: {vote_average * 10}%</p>
			<h2>Overview</h2>
			<p>{overview}</p>
			<h2>Genres</h2>
			<p>{genres.map(genre=>genre.name).join(' ')}</p>
			
		</>
	 );
}
 
export default MovieContainer;