import React from "react";
import { NavLink } from "react-router-dom";

function MoviesCard(props) {
  return (
    <div className="flex flex-col justify-between w-44 border rounded-xl p-3 shadow-lg
    dark:bg-zinc-900 bg-zinc-200 dark:border-zinc-700 border-zinc-300">
      <div className="flex flex-col space-y-2">
        <div className="w-full h-auto rounded-xl overflow-hidden">
          <img
            src={props.img}
            alt={props.title}
            className="w-full h-full object-cover rounded-xl hover:scale-125 duration-300 z-10"
          />
        </div>
        <p className="text-sm">{props.title}</p>
      </div>
      <div className="flex flex-row space-x-2 mt-2">
        <span className="text-xs py-0.5 px-2 rounded-full border border-red-500 text-red-500 cursor-pointer"
              title={`Release ${props.year}`}
          >
          {props.year}
        </span>
        <NavLink
          to={props.path}
          className="w-full text-xs py-0.5 px-2 rounded-full
          bg-red-500 text-zinc-100 text-center hover:bg-red-400
            border border-red-400"
          title="Go to movie"
        >
          View
        </NavLink>
      </div>
    </div>
  );
}

export default MoviesCard;
