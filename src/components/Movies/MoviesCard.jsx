import React from 'react';
import { NavLink } from "react-router-dom";

function MoviesCard(props) {
	return (
		<div className="moviesCard">
      <div className="moviesImg" >
        <img src={props.movieImage} alt="moviesCard" />
      </div>
      <div className="moviesLabel">
        <label>{props.label}</label>
        <NavLink to={props.moviePath} className="hoverRed">
        	<img src="/assets/icons/download.svg" width="15" alt="Download" />
        </NavLink>
      </div>
      <p>{props.title}</p>
    </div>
	);
}

export default MoviesCard;