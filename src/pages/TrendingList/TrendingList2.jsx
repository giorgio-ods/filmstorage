import { useEffect } from "react";
import { useState } from "react";
import { Routes, Route, Link, useMatch } from "react-router-dom";
import { useGetTrendingMoviesQuery, useGetTrendingSeriesQuery } from "../../redux/movieApi";
import { NotFoundPage } from "../NotFoundPage/NotFoundPage";
import { TrendingListMarkup } from "./TrendingListMarkup";





export function TrendingList2(choice) {
    const { data, isLoading } = useGetTrendingMoviesQuery();
    
     return (<> <div> data && <TrendingListMarkup items={data} /> </div> </>)
          
    
}