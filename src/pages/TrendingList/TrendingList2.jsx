import { useEffect } from "react";
import { useState } from "react";
import { Routes, Route, Link, useMatch } from "react-router-dom";
import { useGetTrendingMoviesQuery, useGetTrendingSeriesQuery } from "../../redux/movieApi";
import { MovieListSlider } from "../MovieListMarkup/MovieListSlider";
import { NotFoundPage } from "../NotFoundPage/NotFoundPage";
import { TrendingListMarkup } from "./TrendingListMarkup";





export function TrendingList2() {
    const { data, isFetching } = useGetTrendingMoviesQuery('');
    console.log(data)
    return (<>  
        <h1>What's New? Take a look</h1>

        <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <div style={{
                    width: '1140px',
                    paddingTop: '20px'

                }} >
                {isFetching && <h2>Loading...</h2>}
        {data && <MovieListSlider items={data.results} />} 
                </div>
            </div>
        
    </>)
          
    
}
