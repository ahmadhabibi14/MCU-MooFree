import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";

class Movies extends Component {
  render() {
    return (
      <div className="movies">
        {/* Movies Container*/}
        <div className="moviesContainer">

          {/* Movies List*/}
          <div className="moviesList">
            <div className="moviesImg">
              <img src="/movie_images/34.jpg" alt="Fantastic Four" title="Fantastic Four" />
            </div>
            <div className="moviesLabel">
              <label>2024</label>
              <NavLink to="/donate" className="hoverRed"><img src="/icons/download.svg" width="15" /></NavLink>
            </div>
            <p>Fantastic Four</p>
          </div>

          <div className="moviesList">
            <div className="moviesImg">
              <img src="/movie_images/33.jpg" alt="Ant-Man and The Wasp: Quantumania" title="Ant-Man and The Wasp: Quantumania" />
            </div>
            <div className="moviesLabel">
              <label>2023</label>
              <NavLink to="/donate" className="hoverRed"><img src="/icons/download.svg" width="15" /></NavLink>
            </div>
            <p>Ant-Man and The Wasp: Quantumania</p>
          </div>

          <div className="moviesList">
            <div className="moviesImg">
              <img src="/movie_images/32.jpg" alt="Blade" title="Blade" />
            </div>
            <div className="moviesLabel">
              <label>2023</label>
              <NavLink to="/donate" className="hoverRed"><img src="/icons/download.svg" width="15" /></NavLink>
            </div>
            <p>Blade</p>
          </div>

          <div className="moviesList">
            <div className="moviesImg">
              <img src="/movie_images/31.jpg" alt="The Marvels" title="The Marvels" />
            </div>
            <div className="moviesLabel">
              <label>2023</label>
              <NavLink to="/donate" className="hoverRed"><img src="/icons/download.svg" width="15" /></NavLink>
            </div>
            <p>The Marvels</p>
          </div>

          <div className="moviesList">
            <div className="moviesImg">
              <img src="/movie_images/30.jpg" alt="Black Panther: Wakanda Forever" title="Black Panther: Wakanda Forever" />
            </div>
            <div className="moviesLabel">
              <label>2022</label>
              <NavLink to="/donate" className="hoverRed"><img src="/icons/download.svg" width="15" /></NavLink>
            </div>
            <p>Black Panther: Wakanda Forever</p>
          </div>

          <div className="moviesList">
            <div className="moviesImg">
              <img src="/movie_images/29.jpg" alt="Thor: Love and Thunder" title="Thor: Love and Thunder" />
            </div>
            <div className="moviesLabel">
              <label>2022</label>
              <NavLink to="/donate" className="hoverRed"><img src="/icons/download.svg" width="15" /></NavLink>
            </div>
            <p>Thor: Love and Thunder</p>
          </div>

          <div className="moviesList">
            <div className="moviesImg">
              <img src="/movie_images/28.jpg" alt="Doctor Strange in the Multiverse of Madness" title="Doctor Strange in the Multiverse of Madness" />
            </div>
            <div className="moviesLabel">
              <label>2022</label>
              <NavLink to="/donate" className="hoverRed"><img src="/icons/download.svg" width="15" /></NavLink>
            </div>
            <p>Doctor Strange in the Multiverse of Madness</p>
          </div>

          <div className="moviesList">
            <div className="moviesImg">
              <img src="/movie_images/27.jpg" alt="Spider-Man: No Way Home" title="Spider-Man: No Way Home" />
            </div>
            <div className="moviesLabel">
              <label>2021</label>
              <NavLink to="/donate" className="hoverRed"><img src="/icons/download.svg" width="15" /></NavLink>
            </div>
            <p>Spider-Man: No Way Home</p>
          </div>

          <div className="moviesList">
            <div className="moviesImg">
              <img src="/movie_images/26.jpg" alt="Eternals" title="Eternals" />
            </div>
            <div className="moviesLabel">
              <label>2021</label>
              <NavLink to="/donate" className="hoverRed"><img src="/icons/download.svg" width="15" /></NavLink>
            </div>
            <p>Eternals</p>
          </div>

          <div className="moviesList">
            <div className="moviesImg">
              <img src="/movie_images/25.jpg" alt="Shang-Chi and The Legends of The Ten Rings" title="Shang-Chi and The Legends of The Ten Rings" />
            </div>
            <div className="moviesLabel">
              <label>2021</label>
              <NavLink to="/donate" className="hoverRed"><img src="/icons/download.svg" width="15" /></NavLink>
            </div>
            <p>Shang-Chi and The Legends of The Ten Rings</p>
          </div>

          <div className="moviesList">
            <div className="moviesImg">
              <img src="/movie_images/24.jpg" alt="Black Widow" title="Black Widow" />
            </div>
            <div className="moviesLabel">
              <label>2021</label>
              <NavLink to="/donate" className="hoverRed"><img src="/icons/download.svg" width="15" /></NavLink>
            </div>
            <p>Black Widow</p>
          </div>

          <div className="moviesList">
            <div className="moviesImg">
              <img src="/movie_images/23.jpg" alt="Spider-Man: Far From Home" title="Spider-Man: Far From Home" />
            </div>
            <div className="moviesLabel">
              <label>2019</label>
              <NavLink to="/donate" className="hoverRed"><img src="/icons/download.svg" width="15" /></NavLink>
            </div>
            <p>Spider-Man: Far From Home</p>
          </div>

          <div className="moviesList">
            <div className="moviesImg">
              <img src="/movie_images/22.jpg" alt="Avengers: Endgame" title="Avengers: Endgame" />
            </div>
            <div className="moviesLabel">
              <label>2019</label>
              <NavLink to="/donate" className="hoverRed"><img src="/icons/download.svg" width="15" /></NavLink>
            </div>
            <p>Avengers: Endgame</p>
          </div>

          <div className="moviesList">
            <div className="moviesImg">
              <img src="/movie_images/21.jpg" alt="Captain Marvel" title="Captain Marvel" />
            </div>
            <div className="moviesLabel">
              <label>2019</label>
              <NavLink to="/donate" className="hoverRed"><img src="/icons/download.svg" width="15" /></NavLink>
            </div>
            <p>Captain Marvel</p>
          </div>

          <div className="moviesList">
            <div className="moviesImg">
              <img src="/movie_images/20.jpg" alt="Ant-Man and The Wasp" title="Ant-Man and The Wasp" />
            </div>
            <div className="moviesLabel">
              <label>2018</label>
              <NavLink to="/donate" className="hoverRed"><img src="/icons/download.svg" width="15" /></NavLink>
            </div>
            <p>Ant-Man and The Wasp</p>
          </div>

          <div className="moviesList">
            <div className="moviesImg">
              <img src="/movie_images/19.jpg" alt="Avengers: Infinity Wars" title="Avengers: Infinity Wars" />
            </div>
            <div className="moviesLabel">
              <label>2018</label>
              <NavLink to="/donate" className="hoverRed"><img src="/icons/download.svg" width="15" /></NavLink>
            </div>
            <p>Avengers: Infinity War</p>
          </div>

          <div className="moviesList">
            <div className="moviesImg">
              <img src="/movie_images/18.jpg" alt="Black Panther" title="Black Panther" />
            </div>
            <div className="moviesLabel">
              <label>2018</label>
              <NavLink to="/donate" className="hoverRed"><img src="/icons/download.svg" width="15" /></NavLink>
            </div>
            <p>Black Panther</p>
          </div>

          <div className="moviesList">
            <div className="moviesImg">
              <img src="/movie_images/17.jpg" alt="Thor: Ragnarok" title="Thor: Ragnarok" />
            </div>
            <div className="moviesLabel">
              <label>2017</label>
              <NavLink to="/donate" className="hoverRed"><img src="/icons/download.svg" width="15" /></NavLink>
            </div>
            <p>Thor: Ragnarok</p>
          </div>

          <div className="moviesList">
            <div className="moviesImg">
              <img src="/movie_images/16.jpg" alt="Spider-Man: Homecoming" title="Spider-Man: Homecoming" />
            </div>
            <div className="moviesLabel">
              <label>2017</label>
              <NavLink to="/donate" className="hoverRed"><img src="/icons/download.svg" width="15" /></NavLink>
            </div>
            <p>Spider-Man: Homecoming</p>
          </div>

          <div className="moviesList">
            <div className="moviesImg">
              <img src="/movie_images/15.jpg" alt="Guardians of the Galaxy Vol. 2" title="Guardians of the Galaxy Vol. 2" />
            </div>
            <div className="moviesLabel">
              <label>2017</label>
              <NavLink to="/donate" className="hoverRed"><img src="/icons/download.svg" width="15" /></NavLink>
            </div>
            <p>Guardians of the Galaxy Vol. 2</p>
          </div>

          <div className="moviesList">
            <div className="moviesImg">
              <img src="/movie_images/14.jpg" alt="Doctor Strange" title="Doctor Strange" />
            </div>
            <div className="moviesLabel">
              <label>2016</label>
              <NavLink to="/donate" className="hoverRed"><img src="/icons/download.svg" width="15" /></NavLink>
            </div>
            <p>Doctor Strange</p>
          </div>

          <div className="moviesList">
            <div className="moviesImg">
              <img src="/movie_images/13.jpg" alt="Captain America: Civil War" title="Captain America: Civil War" />
            </div>
            <div className="moviesLabel">
              <label>2016</label>
              <NavLink to="/donate" className="hoverRed"><img src="/icons/download.svg" width="15" /></NavLink>
            </div>
            <p>Captain America: Civil War</p>
          </div>

          <div className="moviesList">
            <div className="moviesImg">
              <img src="/movie_images/12.jpg" alt="Ant-Man" title="Ant-Man" />
            </div>
            <div className="moviesLabel">
              <label>2015</label>
              <NavLink to="/donate" className="hoverRed"><img src="/icons/download.svg" width="15" /></NavLink>
            </div>
            <p>Ant-Man</p>
          </div>

          <div className="moviesList">
            <div className="moviesImg">
              <img src="/movie_images/11.jpg" alt="Avengers: Age of Ultron" title="Avengers: Age of Ultron" />
            </div>
            <div className="moviesLabel">
              <label>2015</label>
              <NavLink to="/donate" className="hoverRed"><img src="/icons/download.svg" width="15" /></NavLink>
            </div>
            <p>Avengers: Age of Ultron</p>
          </div>

          <div className="moviesList">
            <div className="moviesImg">
              <img src="/movie_images/10.jpg" alt="Guardians of the Galaxy" title="Guardians of the Galaxy" />
            </div>
            <div className="moviesLabel">
              <label>2014</label>
              <NavLink to="/donate" className="hoverRed"><img src="/icons/download.svg" width="15" /></NavLink>
            </div>
            <p>Guardians of the Galaxy</p>
          </div>

          <div className="moviesList">
            <div className="moviesImg">
              <img src="/movie_images/09.jpg" alt="Captain America: The Winter Soldier" title="Captain America: The Winter Soldier" />
            </div>
            <div className="moviesLabel">
              <label>2014</label>
              <NavLink to="/donate" className="hoverRed"><img src="/icons/download.svg" width="15" /></NavLink>
            </div>
            <p>Captain America: The Winter Soldier</p>
          </div>

          <div className="moviesList">
            <div className="moviesImg">
              <img src="/movie_images/08.jpg" alt="Thor: The Dark World" title="Thor: The Dark World" />
            </div>
            <div className="moviesLabel">
              <label>2013</label>
              <NavLink to="/donate" className="hoverRed"><img src="/icons/download.svg" width="15" /></NavLink>
            </div>
            <p>Thor: The Dark World</p>
          </div>

          <div className="moviesList">
            <div className="moviesImg">
              <img src="/movie_images/07.jpg" alt="Iron Man 3" title="Iron Man 3" />
            </div>
            <div className="moviesLabel">
              <label>2013</label>
              <NavLink to="/donate" className="hoverRed"><img src="/icons/download.svg" width="15" /></NavLink>
            </div>
            <p>Iron Man 3</p>
          </div>

          <div className="moviesList">
            <div className="moviesImg">
              <img src="/movie_images/06.jpg" alt="The Avengers" title="The Avengers" />
            </div>
            <div className="moviesLabel">
              <label>2012</label>
              <NavLink to="/donate" className="hoverRed"><img src="/icons/download.svg" width="15" /></NavLink>
            </div>
            <p>The Avengers</p>
          </div>

          <div className="moviesList">
            <div className="moviesImg">
              <img src="/movie_images/05.jpg" alt="Captain America: The First Avenger" title="Captain America: The First Avenger" />
            </div>
            <div className="moviesLabel">
              <label>2011</label>
              <NavLink to="/donate" className="hoverRed"><img src="/icons/download.svg" width="15" /></NavLink>
            </div>
            <p>Captain America: The First Avenger</p>
          </div>

          <div className="moviesList">
            <div className="moviesImg">
              <img src="/movie_images/04.jpg" alt="Thor" title="Thor" />
            </div>
            <div className="moviesLabel">
              <label>2011</label>
              <NavLink to="/donate" className="hoverRed"><img src="/icons/download.svg" width="15" /></NavLink>
            </div>
            <p>Thor</p>
          </div>

          <div className="moviesList">
            <div className="moviesImg">
              <img src="/movie_images/03.jpg" alt="Iron Man 2" title="Iron Man 2" />
            </div>
            <div className="moviesLabel">
              <label>2010</label>
              <NavLink to="/donate" className="hoverRed"><img src="/icons/download.svg" width="15" /></NavLink>
            </div>
            <p>Iron Man 2</p>
          </div>

          <div className="moviesList">
            <div className="moviesImg">
              <img src="/movie_images/02.jpg" alt="The Incredible Hulk" title="The Incredible Hulk" />
            </div>
            <div className="moviesLabel">
              <label>2008</label>
              <NavLink to="/donate" className="hoverRed"><img src="/icons/download.svg" width="15" /></NavLink>
            </div>
            <p>The Incredible Hulk</p>
          </div>

          <div className="moviesList">
            <div className="moviesImg">
              <img src="/movie_images/01.jpg" alt="Iron Man" title="Iron Man" />
            </div>
            <div className="moviesLabel">
              <label>2008</label>
              <NavLink to="/donate" className="hoverRed"><img src="/icons/download.svg" width="15" /></NavLink>
            </div>
            <p>Iron Man</p>
          </div>

        </div>
      {/* AKhir Movies Container*/}

      </div>
    );
  }
}
 
export default Movies;
