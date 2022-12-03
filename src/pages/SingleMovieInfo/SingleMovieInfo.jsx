import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useGetSingleMovieQuery, useGetSingleSerieQuery } from "../../redux/movieApi";
import { addMovie, clearLibrary } from "../../redux/movieLibSlice";



export function SingleMovieInfo() {
    const { movieId } = useParams();
    const { data, isLoading, error } = useGetSingleMovieQuery(movieId);
    const baseUrl = 'https://image.tmdb.org/t/p/w500'
    console.log(data);
    
    // const handleSubmit = (id) => {
    //     setMovieList(prevState => [...prevState, {id}])
    //     console.log(movieList);
    // }

    const idList = useSelector((state) => state.library);

    const dispatch = useDispatch();

    const addMovieObj = function () {
        dispatch(addMovie(data.find(item => item.id === movieId)));
    }
   
    // console.log(idList);
    
    return (
        <>
            {data && (<div>
                <p>{movieId}</p>
                <img src={`${ baseUrl }${ data.poster_path }`} alt={data.name} />

                <h2>{data.original_title}</h2>
                <p>Vote: {data.vote_average}</p>
                <p>Plot: {data.overview} </p>
                <button onClick={() => addMovieObj()}>Add to watchlist</button>
                 {/* <button onClick={() => dispatch(clearLibrary())}>Clear Library</button> */}
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
}
