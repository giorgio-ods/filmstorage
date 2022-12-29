import { useSelector } from "react-redux";
// import { MovieListMarkup } from "../MovieListMarkup/MovieListMarkup";
import { MovieListSlider } from "../MovieListMarkup/MovieListSlider";




export function MyLibrary() {

    const movieList = useSelector(state => state.addMovie.list);
    console.log(movieList);
    return (
        <>
            <h1>My Watchlist</h1>
            <div style={{
                // height: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <div style={{
                    width: '1140px',
                    // height: '1000px',
                    // backgroundColor: '#fff',
                    paddingTop: '20px'

                }} >
                <MovieListSlider items={movieList} />
                </div>
            </div>
            
        </>
    )
}