import { Container } from '@material-ui/core';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import SimpleBottomNavigation from './components/MainMenu';
import Movie from './pages/movies/Movie';
import Search from './pages/search/Search';
import Trending from './pages/trending/Trending';
import Series from './pages/series/Series';

function App() {
  return (
    <>
    <BrowserRouter>
      <Header/>
        <div className="app">
          <Container>
            <Switch>
              <Route path='/' exact>
                <Trending/>
              </Route>
              <Route path='/movies' exact>
                <Movie/>
              </Route>
              <Route path='/series' exact>
                <Series/>
              </Route>
              <Route path='/search' exact>
                <Search/>
              </Route>
            </Switch>
          </Container>
        </div>
      <SimpleBottomNavigation/>
    </BrowserRouter>
    </>
  );
}

export default App;
