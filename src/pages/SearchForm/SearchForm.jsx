import { useState } from "react"
import { useSearchMovieQuery } from "../../redux/movieApi";

export function SearchForm() {
    
    const [movie, setMovie] = useState('');
    const { data } = useSearchMovieQuery(movie);

    const handleSubmit = e => {
        e.preventDefault();
        setMovie(e.currentTarget.elements.searchMovie.value)
    }
    
    return <>
    <h1>Search Form</h1>
        <form autoComplete="off" onSubmit={handleSubmit} >
            <input type="text" name="searchMovie" />
            <button type="submit">Search</button>
    </form>
        
    </>
}