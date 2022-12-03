import { Routes, Route, Link, useMatch } from "react-router-dom";
import { useGetTrendingMoviesQuery, useGetTrendingSeriesQuery } from "../../redux/movieApi";





export function TrendingList() {
    const { data, isLoading } = useGetTrendingMoviesQuery();
    // const { data: dataTv, isLoading: isLoadingTv } = useGetTrendingSeriesQuery();
    const baseUrl = 'https://image.tmdb.org/t/p/w500'
    console.log(data);

    return (
        <>
        <div>
         <ul>
                    {data && data.results.map(item => (
            
                        <li key={item.id} >
                            <Link to={`/movies/${item.id}`}>
                {item.title}{item.name}
                <img src={`${ baseUrl }${ item.poster_path }`} alt={item.name} />
            </Link>
                        </li>
            
        )) }  

        </ul>

              
        </div>
        </>
    )
}