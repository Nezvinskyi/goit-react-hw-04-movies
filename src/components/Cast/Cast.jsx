import noImg from '../../images/no-user-image.jpg'
import './Cast.scss';

const IMG_URL = 'https://image.tmdb.org/t/p/w200'

const Cast = ({ cast }) => {
	return (
		<ul className='Cast-list'>
			{cast.map(({ id, profile_path, name, character }) => (
				<li key={id}>
					<div className='card'>
						{<img className='CastImg' src={profile_path ? `${IMG_URL}${profile_path}` : noImg} alt={`${name}`} />}
						<div className="card-body">
							<p>Actor: <strong>{name}</strong></p>
							<p>Character: <strong>{character}</strong></p>
						</div>
					</div>
				</li>
			))}
		</ul>
	);
};
 
export default Cast;