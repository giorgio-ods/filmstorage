import { useSelector } from "react-redux"
import { useSearchMovieQuery } from "../../redux/movieApi";
import { MovieListSlider } from "../MovieListMarkup/MovieListSlider";

export const SearchResultsPage = () => {
    const value = useSelector((state) => state.searchValue.value)
    
    const { data } = useSearchMovieQuery(value);
    
    return (
        <>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <div style={{
                    width: '1140px',
                    paddingTop: '20px'

                }} >
                    {data && <MovieListSlider items={data.results} />}
                    
                    
                </div>
            </div>
                
            
        </>
    )
}