
const IMG_URL = 'https://image.tmdb.org/t/p/w200'

const MoviePreview = ({title, name, poster_path}) => {
	return (
		<div className="card">
			<img src={IMG_URL+poster_path} alt={title || name} />
			<div className="card-body">
				<h4 className="card-title">{ title || name}</h4>
			</div>
		</div>
	 );
}
 
export default MoviePreview;