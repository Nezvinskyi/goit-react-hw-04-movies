import noImg from './no-image.jpg'
import styles from './Cast.module.scss';

const IMG_URL = 'https://image.tmdb.org/t/p/w200'

const Cast = ({ cast }) => {
	return (
		<ul>
			{cast.map(({ id, profile_path, name, character })=>(
				<li key={id} >
					{<img className={styles.castImg} src={profile_path ? `${IMG_URL}${profile_path}`: noImg} alt={`${name}`} />}
					<p>Actor: { name }</p>
					<p>Character: { character}</p>
				</li>
			))}
		</ul>
	 );
}
 
export default Cast;