import React, { useState, useEffect } from "react";
import apiConfig from '../api/apiConfig';
import axios from "axios";

function MoviePage(props) {
   var url = apiConfig.BASE_URL + props.movieID + '?api_key=' + apiConfig.API_KEY + '&language=en-US'
   // https://api.themoviedb.org/3/movie/1726?api_key=ddd659323326f11b9570281365551ef0&language=en-US
   const [movie, setMovie] = useState([]);
   function fetchMovieData() {
      axios.get(url)
         .then((response) => {
            setMovie(response.data);
         })
         .catch((err) => {
            console.log(err);
         });
   }
   useEffect(() => {
      fetchMovieData();
   }, []);
   
   console.log(movie)

   return (
      <section>
         <img src={apiConfig.BACKDROP_IMAGE_URL + movie.backdrop_path} alt={movie.Title} />

         <p>{movie.Title}</p>
         <div>
            <img src="/img/MoviesImage/01.jpg" alt="Iron Man" />
         </div>
      </section>
   );
}

export default MoviePage;
