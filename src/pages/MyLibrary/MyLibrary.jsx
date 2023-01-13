import { useSelector } from "react-redux";
import { MovieListSlider } from "../MovieListMarkup/MovieListSlider";




export function MyLibrary() {

    const movieList = useSelector(state => state.addMovie.list);
    console.log(movieList);
    return (
        <>
            <h1>My Watchlist</h1>
            <div style={{
               
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <div style={{
                    width: '1140px',
                    paddingTop: '20px'

                }} >
                <MovieListSlider items={movieList} />
                </div>
            </div>
            
        </>
    )
}