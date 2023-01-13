
import { searchValue } from "../../redux/movieSearch";

import { useState } from "react";
import { useDispatch } from "react-redux";
import InputField from "../InputField/InputField";
import { SearchResultsPage } from "../SearchResultsPage/SearchResultsPage";
import { useNavigate } from "react-router-dom";

export function SearchForm() {
    const [movie, setMovie] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
    
  const handleSubmit = (e) => {
    dispatch(searchValue(movie));
    navigate('/search')
    

  }

    return (<>
      <InputField movie={movie} handleInput={setMovie} handleSubmit={handleSubmit} />
      
 </>
      );
}