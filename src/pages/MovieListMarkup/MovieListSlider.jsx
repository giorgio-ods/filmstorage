import { Link, Route, NavLink } from "react-router-dom";
import { Navigation, Thumbs, Pagination } from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
// import styles from './MovieListMarkup.module.scss';
import "swiper/css";
import "swiper/css/pagination";
import './MovieListSlider.scss'
import { SingleMovieInfo } from "../SingleMovieInfo/SingleMovieInfo";
const baseUrl = 'https://image.tmdb.org/t/p/w500'

export function MovieListSlider({ items }) {
    
    console.log(items)
    if (items.length === 0) {
        return (<h2>Sorry, no movies found</h2>)
    }
    return (
        <>
            
        <div>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={10}
                    modules={[Pagination]}
                    pagination={{
                        clickable: true
                    }}
                    className='slider'
                > 
                    {items && items.map(item => (
                    
                        <SwiperSlide key={item.id} >
                            <NavLink to={`/movies/${item.id}`}>
                                <div>
                                <img src={`${baseUrl}${item.poster_path}`} alt={item.name} />
                                    {item.title}{item.name}
                                    </div>
            </NavLink>
                            </SwiperSlide>
            
        )) }   

        
</Swiper>

              
                              
                </div>
                
        </>
    )
}