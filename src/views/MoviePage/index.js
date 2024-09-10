import React, { useEffect, useState } from 'react';
import Layout from "../../Components/layout/Layout";
import { useParams } from "react-router";
import { handleGenerateApi, originalPath } from "../../Components/services";
import axios from 'axios';
import './style.css';
import Loader from "../../Components/Loader/Loader";

const MoviePage = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState({});
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        axios.get(handleGenerateApi(`movie/${id}`))
            .then((response) => setMovie(response.data))
            .catch((error) => console.error("Error fetching movie data:", error));

        axios.get(handleGenerateApi(`movie/${id}/videos`))
            .then((response) => setVideos(response.data.results))
            .catch((error) => console.error("Error fetching video data:", error));
    }, [id]);

    if (!movie.id) {
        return (
            <div style={{
                height: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}>
                <Loader />
            </div>
        );
    } else {
        return (
            <Layout>
                <div className="movie-wrapper">
                    <div className="left-side">
                        <img src={originalPath + movie.poster_path} alt={movie.title} />
                    </div>
                    <div className="right-side">
                        <h2 className="title">{movie.title}</h2>
                        <h3 className="sub-title">{movie.release_date}</h3>
                        <h3 className="sub-title">{movie.original_title}</h3>
                        <p className="description">{movie.overview}</p>
                        <div>
                            {
                                videos.map(video => (
                                    <iframe
                                        key={video.id}
                                        src={`https://www.youtube.com/embed/${video.key}`}
                                        title={video.name}
                                        allowFullScreen
                                        className="video-iframe"
                                        width={300}
                                    ></iframe>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </Layout>
        );
    }
};

export default MoviePage;
