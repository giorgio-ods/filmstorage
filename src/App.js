
import { Route, Routes, Link } from 'react-router-dom';
import './App.scss';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { HomePage } from './pages/HomePage/HomePage';
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage';
import {MyLibrary} from './pages/MyLibrary/MyLibrary'
import { NavBar } from './pages/NavBar/NavBar';
import { SingleMovieInfo } from './pages/SingleMovieInfo/SingleMovieInfo';
import Container from './components/Container/Container';
import Header from './components/Header/Header';
import { SearchResultsPage } from './pages/SearchResultsPage/SearchResultsPage';

// import {TrendingList2 } from './pages/TrendingList/TrendingList2'

function App() {
  return (
    <Container>
      <div className="App">
        <Header>
          {/* <h1> ▶ </h1> */}
          {/* <img src={logo} alt='logo' /> */}
      <header>
        <NavBar />
          </header>
          </Header>
      <Routes>
        <Route path='/' element={ <HomePage /> } />
        <Route path='/library' element={ <MyLibrary /> } />
        <Route path='*' element={<NotFoundPage />} />
          <Route path='/movies/:movieId' element={<SingleMovieInfo />} />
          <Route path='/search' element={ <SearchResultsPage /> } />
      </Routes>
      </div>
      </Container>
  );
}

export default App;
