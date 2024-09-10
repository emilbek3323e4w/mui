import React from 'react';
import {Route, Routes} from "react-router";
import HomePage from "./views/HomePage";
import MoviePage from "./views/MoviePage";
import SearchPage from "./views/SearchPage/SearchPage";

const App = () => {
    return (
        <Routes>
            <Route path={'/'} element={<HomePage/>}/>
            <Route path={'/movie/:id'} element={<MoviePage/>}/>
            <Route path={'/search'} element={<SearchPage/>}/>

        </Routes>
    );
};

export default App;