import React, {useEffect, useState} from 'react';
import Layout from "../../Components/layout/Layout";
import axios from "axios";
import {handleGenerateApi} from "../../Components/services";
import MovieList from "../../Components/MovieList/MovieList";
import Carousel from "../../Components/Carousel/Carousel";

const HomePage = () => {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        console.log(handleGenerateApi('movie/popular'))
        axios(handleGenerateApi('movie/popular'))
            .then(({data}) => setMovies(data.results))
    }, [])

    return (
        <Layout>
            <Carousel movies={movies} />
           <MovieList movies={movies} />
        </Layout>
    );
};

export default HomePage;