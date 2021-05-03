import { Switch, Route } from 'react-router-dom';
import Searchbar from './components/Searchbar';
import HomeView from './views/HomeView';
import MoviesView from './views/MoviesView';
import MovieDetailsView from './views/MovieDetailsView';
import './App.css';

const App = () => (
  <>
    <Searchbar />

    <Switch>
      <Route exact path="/" component={HomeView} />
      <Route path="/movies/:movieId" component={MovieDetailsView} />
      <Route path="/movies" component={MoviesView} />
    </Switch>
  </>
);

export default App;
