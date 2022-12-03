
import { Route, Routes, Link } from 'react-router-dom';
import './App.css';
import { HomePage } from './pages/HomePage/HomePage';
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage';
import {MyLibrary} from './pages/MyLibrary/MyLibrary'
import { NavBar } from './pages/NavBar/NavBar';
import { SingleMovieInfo } from './pages/SingleMovieInfo/SingleMovieInfo';
import {TrendingList2 } from './pages/TrendingList/TrendingList2'

function App() {
  return (
    <div className="App">
      <h1>FilmStorage</h1>
      <header>
        <NavBar />
      </header>
      <Routes>
        <Route path='/' element={ <HomePage /> } />
        <Route path='/library' element={ <MyLibrary /> } />
        <Route path='*' element={<NotFoundPage />} />
        <Route path='/movies/:movieId' element={<SingleMovieInfo />} />
      </Routes>
    </div>
  );
}

export default App;
