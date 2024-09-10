import React from 'react';
import { handleShortDescription, originalPath } from "../services";
import './style.css';
import { Link } from "react-router-dom";

const MovieList = ({ movies }) => {
    return (
        <div className={'row'}>
            {
                movies.map(movie =>
                    <div className={'col-4'}>
                        <Link to={`/movie/${movie.id}`}>
                            <div className={'movie-box'}>
                                <img className={'movie-img'} src={originalPath + movie.poster_path} alt={movie.title} />
                                <h3>{movie.title}</h3>
                                <p>{handleShortDescription(movie.overview)}</p>
                                <p>{movie.vote_average}</p>
                            </div>
                        </Link>
                    </div>
                )
            }
        </div>
    );
};

export default MovieList;
