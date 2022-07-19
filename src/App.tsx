import React, {useEffect, useState} from 'react';
import './App.module.css';
import {MovieList} from "./Components/MovieList";
import './App.module.css'
import axios from "axios";
import {MovieListHeader} from "./Components/MovieListHeader";
import {SearchBox} from "./Components/SearchBox";
import {AddFavourites} from "./Components/AddFavourites";
import {RemoveFavourites} from "./Components/RemoveFavourites";
import s from './App.module.css'

export type MovieType = {
    Title: string
    Year: string
    imdbID: string
    Type: string
    Poster: string
}

type GetMoviesResponse = {
    Response: string
    Search: MovieType[]
    totalResults: string
}

function App() {
    const [movies, setMovies] = useState<MovieType[]>([])
    const [favourites, setFavourites] = useState<any>([])
    const [searchValue, setSearchValue] = useState('')

    const getMovies = async (searchValue: string) => {
        const url = `https://www.omdbapi.com/?s=${searchValue}&apikey=62453f6f`;
        const {data} = await axios.get<GetMoviesResponse>(url);
        if (data.Search) {
            setMovies(data.Search)
        }
    }

    const saveToLocalStorage = (items: MovieType[]) => {
        localStorage.setItem('react-movie-app-favourites', JSON.stringify(items))
    }

    useEffect(() => {
        getMovies(searchValue)
    }, [searchValue])

    useEffect(() => {
        const favouriteMovies = localStorage.getItem('react-movie-app-favourites')
        if (favouriteMovies) {
           const memorizedFavouriteMovies: MovieType[] = JSON.parse(favouriteMovies)
            setFavourites(memorizedFavouriteMovies)
        }
    }, [])


    const addFavouriteMovie = (movie: MovieType) => {
        const newFavouriteList = [...favourites, movie]
        setFavourites(newFavouriteList)
        saveToLocalStorage(newFavouriteList)
    }

    const removeFavouriteMovie = (movie: MovieType) => {
        const newFavouriteList = favourites.filter((f: { imdbID: string}) => f.imdbID !== movie.imdbID)
        setFavourites(newFavouriteList)
        saveToLocalStorage(newFavouriteList)
    }

    return (
        <div className={'App'}>
            <div className="movie-app">
                <div className={s.header}>
                    <MovieListHeader title={'Movies'}/>
                    <SearchBox value={searchValue} setSearchValue={setSearchValue}/>
                </div>
                <div className='row'>
                    <MovieList movies={movies} favouriteComponent={AddFavourites} handleFavouriteClick={addFavouriteMovie}/>
                </div>
                <div className='row'>
                    <MovieListHeader title={'Favourites'}/>
                </div>
                <div className='row'>
                    <MovieList movies={favourites} favouriteComponent={RemoveFavourites} handleFavouriteClick={removeFavouriteMovie}/>
                </div>
            </div>
        </div>

    );
}

export default App;
