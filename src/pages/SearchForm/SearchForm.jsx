// import { useState } from "react";
// import { useDispatch } from "react-redux";
// import { useSearchMovieQuery } from "../../redux/movieApi";
// import { SearchResults } from "../SearchResults/SearchResults";
import { searchValue } from "../../redux/movieSearch";

import { useState } from "react";
import { useDispatch } from "react-redux";
import InputField from "../InputField/InputField";
import { SearchResultsPage } from "../SearchResultsPage/SearchResultsPage";
import { useNavigate } from "react-router-dom";


// export function SearchForm() {
//     // const dispatch = useDispatch();
//     const [movie, setMovie] = useState('');
//    const handleSubmit = e => {
//        e.preventDefault();
//        setMovie(e.currentTarget.elements.searchMovie.value);
//     //    dispatch(searchMovieValue(movie))
//        console.log(movie);
//     }
//     // const { data, isFetching } = useSearchMovieQuery(movie);


//     return <>
//     <h1>Search Form</h1>
//         <form autoComplete="off" onSubmit={() => handleSubmit} >
//             <input type="text" name="searchMovie" />
//             <button type="submit">Search</button>
//     </form>
        
//         {/* {isFetching && <h2>Loading...</h2>} */}
//         {/* <div> <SearchResults items={data} />  </div> */}
//     </>
// }


export function SearchForm() {
    const [movie, setMovie] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
    // const handleSubmit = e => {
    //     e.preventDefault();
    //     // console.log('click');
    //     setMovie(e.currentTarget.elements.searchMovie.value);
    //     dispatch(searchValue(movie));
    //     console.log(movie);
    // }
  
  const handleSubmit = (e) => {
    dispatch(searchValue(movie));
    navigate('/search')
    // setMovie('')

  }

    return (<>
      <InputField movie={movie} handleInput={setMovie} handleSubmit={handleSubmit} />
      
 </>
      );
}