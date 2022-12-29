import { Link } from "react-router-dom";
import {Swiper, SwiperSlide} from "swiper";
// import styles from './MovieListMarkup.module.scss';
// import './MovieListSlider.module.scss'
const baseUrl = 'https://image.tmdb.org/t/p/w500'

export function MovieListMarkup({ items }) {
    
    console.log(items)

    return (
        <>
            
        <div>
         <ul>
                    {items && items.map(item => (
                    
                        <li key={item.id} >
                            <Link to={`/movies/${item.id}`}>
                {/* {item.title}{item.name} */}
                <img src={`${ baseUrl }${ item.poster_path }`} alt={item.name} />
            </Link>
                            </li>
            
        )) }  

        </ul>

              
                </div>
                
        </>
    )
}