import { useState, componentDidMount } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useGetSingleMovieQuery } from "../../redux/movieApi";
import { addMovie, checkLibrary, clearLibrary, deleteMovie } from "../../redux/movieLibSlice";
import styles from './SingleMovieInfo.module.css';



export function SingleMovieInfo() {
    const { movieId } = useParams();
    const { data, isLoading, error } = useGetSingleMovieQuery(movieId);
    const baseUrl = 'https://image.tmdb.org/t/p/w500'
    
    const idList = useSelector((state) => state.library);

    const dispatch = useDispatch();

     
    // const check = () => dispatch(checkLibrary(data));
    // console.log(check);
    
    const movieObj = useSelector((state) => state.addMovie.list )
    const check = () => dispatch(movieObj);
    
    
    
    return (
        <>
            {data && (<div>
                <div className={styles.box}>
                <div className="left">
                <img src={`${ baseUrl }${ data.poster_path }`} alt={data.name} />
                </div>
                <div className="right">
                <h2>{data.original_title}</h2>
                <p>Average Vote: {data.vote_average}</p>
                        <p>{data.overview} </p>
                        <div>
                         <button onClick={() => dispatch(addMovie(data))}>Add to watchlist</button>
                 {/* <button onClick={() => dispatch(deleteMovie(data))}>Delete from watchlist</button> */}
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

            <div>
                <button>Back</button>
            </div>
        </>
    )
    
    
    // return (
    //     <>
    //         {data && (<div>
    //             <p>{movieId}</p>
    //             <img src={`${ baseUrl }${ data.poster_path }`} alt={data.name} />

    //             <h2>{data.original_title}</h2>
    //             <p>Vote: {data.vote_average}</p>
    //             <p>Plot: {data.overview} </p>
                
                           
    //              <div>      
    //                 {!check && (<button onClick={() => dispatch(addMovie(data))}>Add to watchlist</button>)}
    //             {check && (<button onClick={() => dispatch(deleteMovie(data))}>Delete from watchlist</button>)}
                
    //             </div>
    //         </div>
    //         )}

    //         {error && 
    //             (
    //             <h2>oops..!</h2>
    //         )}

    //         <div>
    //             <button>Back</button>
    //         </div>
    //     </>
    // )
}
