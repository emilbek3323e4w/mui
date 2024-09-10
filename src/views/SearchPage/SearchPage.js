import React, { useEffect, useState } from 'react';
import Layout from "../../Components/layout/Layout";
import axios from 'axios';
import { handleSearchApi } from "../../Components/services";
import MovieList from "../../Components/MovieList/MovieList";
import { useSearchParams } from "react-router-dom";
import mascot from '../../Components/Assets/Search_any_movies-removebg-preview.png';
import './style.css';

const SearchPage = () => {
    const [movies, setMovies] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const [search, setSearch] = useState(searchParams.get('query') || '');
    const [hasSearched, setHasSearched] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        if (search) {
            setLoading(true);
            axios(handleSearchApi('search/movie', search))
                .then(({ data }) => {
                    setMovies(data.results);
                    if (data.results.length === 0) {
                        setError('No movies found for this search query.');
                    }
                })
                .catch(() => setError('Error fetching movies. Please try again later.'))
                .finally(() => setLoading(false));
            setHasSearched(true);
        }
    }, []); // Initial load to fetch movies

    const handleSubmit = () => {
        if (!search.trim()) return;
        setLoading(true);
        setError('');
        axios(handleSearchApi('search/movie', search))
            .then(({ data }) => {
                setMovies(data.results);
                if (data.results.length === 0) {
                    setError('No movies found for this search query.');
                }
            })
            .catch(() => setError('Error fetching movies. Please try again later.'))
            .finally(() => setLoading(false));

        setSearchParams({ query: search });
        setHasSearched(true);
    };

    const handleSearchInput = (e) => {
        const query = e.target.value;
        setSearch(query);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSubmit();
        }
    };

    return (
        <Layout>
            <div className="search-page-container">
                <div className="search-input-container">
                    <input
                        type="text"
                        value={search}
                        onChange={handleSearchInput}
                        onKeyDown={handleKeyDown}
                        className="search-input"
                        placeholder="Search movies..."
                    />
                    <button
                        onClick={handleSubmit}
                        className="search-button"
                    >
                        Search
                    </button>
                </div>
                {loading ? (
                    <p>Loading...</p>
                ) : (
                    !hasSearched ? (
                        <img src={mascot} alt="Mascot" className="mascot-image" />
                    ) : (
                        <>
                            {error ? (
                                <p>{error}</p>
                            ) : (
                                <div className="movie-list-container">
                                    <MovieList movies={movies} />
                                </div>
                            )}
                        </>
                    )
                )}
            </div>
        </Layout>
    );
};

export default SearchPage;
