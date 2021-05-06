import { Suspense, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import AppBar from './components/AppBar';
// import HomeView from './views/HomeView';
// import MoviesView from './views/MoviesView';
// import MovieDetailsView from './views/MovieDetailsView';
// import SearchView from './views/SearchView';
import routes from './routes';
import './App.css';

const HomeView = lazy(() =>
  import('./views/HomeView' /* webpackChunkName: "home-view" */),
);
const MoviesView = lazy(() =>
  import('./views/MoviesView' /* webpackChunkName: "movies-view" */),
);
const MovieDetailsView = lazy(() =>
  import(
    './views/MovieDetailsView' /* webpackChunkName: "movie-details-view" */
  ),
);
const SearchView = lazy(() =>
  import('./views/SearchView' /* webpackChunkName: "search-view" */),
);

const App = () => (
  <>
    <AppBar />
    <Suspense fallback={<h1>...loading</h1>}>
      <Switch>
        <Route exact path={routes.home} component={HomeView} />
        <Route path={routes.movieDetails} component={MovieDetailsView} />
        <Route path={routes.movies} component={MoviesView} />
        <Route path={routes.search} component={SearchView} />
        {/* <Route path={routes.searchQuery} component={SearchView} /> */}
        <Redirect to="/" />
      </Switch>
    </Suspense>
  </>
);

export default App;
