import { Route, Routes, Link } from 'react-router-dom';
import { TrendingList2 } from '../TrendingList/TrendingList2';

export function HomePage() {
    return (
        <>
            <TrendingList2 />

            {/* <Link to='/trendingMovies'>Best Movies</Link>
            <Link to='/trendingShows'>Best Shows</Link> */}

            
        </>
    )
}