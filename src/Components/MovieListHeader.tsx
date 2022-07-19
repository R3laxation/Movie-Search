import React from 'react';
import s from './MovieListHeader.module.css'

type MovieListHeaderPropsType = {
    title: string
}

export const MovieListHeader = ({title}: MovieListHeaderPropsType) => {
    return (
        <div className='col'>
            <h1>{title}</h1>
        </div>
    );
};

