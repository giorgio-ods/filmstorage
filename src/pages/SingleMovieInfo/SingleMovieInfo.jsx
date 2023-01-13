
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useGetSingleMovieQuery } from "../../redux/movieApi";
import { addMovie, deleteMovie } from "../../redux/movieLibSlice";
import styles from './SingleMovieInfo.module.css';



export function SingleMovieInfo() {
    const { movieId } = useParams();
    const { data, error } = useGetSingleMovieQuery(movieId);
    const baseUrl = 'https://image.tmdb.org/t/p/w500'
    
    const dispatch = useDispatch();
           
    return (
        <>
            {data && (<div>
                <div className={styles.box}>
                <div className={styles.left}>
                <img src={`${ baseUrl }${ data.poster_path }`} alt={data.name} />
                </div>
                <div className={styles.right}>
                <h2>{data.original_title}</h2>
                <p>Average Vote: {data.vote_average}</p>
                        <p>{data.overview} </p>
                        <div>
                         <button className={styles.button} onClick={() => dispatch(addMovie(data))}>Add to watchlist</button>
                 <button className={styles.button} onClick={() => dispatch(deleteMovie(data))}>Delete from watchlist</button>
                            {/* <button onClick={() => dispatch(clearLibrary())}>Clear Library</button> */}
                            
                </div>
                </div>      
                </div>       
                
            
            </div>
            )}

            {error && 
                (
                <h2>oops..!</h2>
            )}


        </>
    )
    

}
