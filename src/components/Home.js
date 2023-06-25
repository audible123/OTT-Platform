import React from "react";
import Header from "./Header";
import Row from "./Row";
import requests from "../utils/Requests";
import MovieDetail from "./MovieDetail";

function Home (){
    return (
        <>
        <Header/>
        <Row 
        title='Netflix Originals' 
        movieType={requests.requestPopular} />
        <Row 
        title='Trending Now' 
        movieType={requests.requestTrending} />
        <Row 
        title='Top Rated' 
        movieType={requests.requestTopRated} />
        <Row 
        title='Horror Movies' 
        movieType={requests.requestHorror} />
        <Row 
        title='Romance Movies' 
        movieType={requests.requestUpcoming} />
        <MovieDetail/>
        </>
    )
}

export default Home