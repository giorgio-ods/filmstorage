import { Link } from "react-router-dom";
const baseUrl = 'https://image.tmdb.org/t/p/w500'

export function TrendingListMarkup({ items }) {
    
    console.log(items)

    return (
        <>
        <div>
         <ul>
                    {items && items.results.map(item => (
            
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