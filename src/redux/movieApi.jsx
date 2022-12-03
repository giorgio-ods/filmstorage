import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const movieApi = createApi({
    reducerPath: 'movieApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.themoviedb.org/3' }),
    endpoints: (builder) => ({
        getTrendingMovies: builder.query({
            query: () =>  '/trending/movie/day?api_key=11fad27138e60ff4ac198d4feaa381ed' 
        }),
        getSingleMovie: builder.query({
            query: (id) => `/movie/${id}?api_key=11fad27138e60ff4ac198d4feaa381ed`
        }),
        getTrendingSeries: builder.query({
            query: () =>  '/trending/tv/day?api_key=11fad27138e60ff4ac198d4feaa381ed' 
        }),
        getSingleSerie: builder.query({
            query: (id) => `/tv/${id}?api_key=11fad27138e60ff4ac198d4feaa381ed`
        }),
        searchMovie: builder.query({
            query: () => `/search/movie?api_key=11fad27138e60ff4ac198d4feaa381ed`
        }),
        
    })
})

export const { useGetTrendingMoviesQuery, useGetSingleMovieQuery, useGetTrendingSeriesQuery, useGetSingleSerieQuery } = movieApi;