const IMG_URL = 'https://image.tmdb.org/t/p/w200/'

const Cast = ({ cast }) => {
	return (
		<ul>
			{cast.map(({ id, profile_path, name, character })=>(
				<li key={id} >
					<img src={`${IMG_URL}/${profile_path}`} alt=""/>
					<p>Actor: { name }</p>
					<p>Character: { character}</p>
				</li>
			))}
		</ul>
	 );
}
 
export default Cast;