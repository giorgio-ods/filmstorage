import { Route, Routes, Link } from 'react-router-dom';
import { TrendingList } from '../TrendingList/TrendingList';

export function HomePage() {
    return (
        <>
            <TrendingList />

            {/* <Link to='/trendingMovies'>Best Movies</Link>
            <Link to='/trendingShows'>Best Shows</Link> */}

            
        </>
    )
}