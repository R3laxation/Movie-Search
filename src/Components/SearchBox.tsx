import React from 'react';
import { MovieType } from '../App';

type MoviesListPropsType = {
    movies: MovieType[]
}

export const MovieList = ({movies}: MoviesListPropsType) => {
    return (
        <>
            {movies.map((m,i) => <div className={'d-flex justify-content-start m-3'} key={i}>
                <img src={m.Poster} alt={m.Title}/>
                </div>

            )}
        </>
    );
};

