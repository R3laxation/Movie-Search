import React from 'react';
import { MovieType } from '../App';
import s from './MovieList.module.css'

type MoviesListPropsType = {
    movies: MovieType[]
    favouriteComponent: React.FC
    handleFavouriteClick: (movie: MovieType) => void
}

export const MovieList = ({movies, favouriteComponent, handleFavouriteClick}: MoviesListPropsType) => {

    const FavouriteComponent = favouriteComponent;

    return (
        <div className={s.movieList}>
            {movies.map((m,i) => <div className={s.imageContainer} key={i}>
                <img src={m.Poster} alt={m.Title} className={s.movieListImage}/>
                <div className={s.overlay} onClick={() => handleFavouriteClick(m)}>
                    <FavouriteComponent/>
                </div>
                </div>

            )}
        </div>
    );
};

