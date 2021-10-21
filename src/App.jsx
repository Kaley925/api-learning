import React from "react";
import { useEffect, useState } from "react";

const App = () => {
  const [films, setFilms] = useState([]);
  const [people, setPeople] = useState([]);
  //const [getFilms, setGetFilms] = useState(false);

  const getFilmData = async () => {
    const res = await fetch("https://ghibliapi.herokuapp.com/films");
    const allFilms = await res.json();
    console.log(allFilms);
    setFilms(allFilms);
  };

  const getPeopleData = async () => {
    const pes = await fetch("https://ghibliapi.herokuapp.com/people");
    const allPeople = await pes.json();
    console.log(allPeople);
    setPeople(allPeople);
  };

  //if getFilms=true then return films.map thing
  // let total = (films.rt_score)
  // if (total>80){
  //  console.log ('higher than 80')
  // }

  return (
    <div>
      <h1 class="justify-content-center mt-5 row">Learning API</h1>
      <div class="butt">
        <button
          class=" first badge badge-pill btn-outline-dark"
          onClick={getFilmData}
        >
          Load Films
        </button>
        <button
          class=" second badge badge-pill btn-outline-dark"
          onClick={getPeopleData}
        >
          Load People
        </button>
      </div>

      <div class="people-info container">
        <section className="row justify-content-center mt-5">
          {people.map((people) => (
            <div class="card" style={{ width: "36rem" }}>
              <div class="card-body" key={`people-name-${people.id}`}>
                <h4 class="card-title">Name:{people.name}</h4>
                <h5 class="card-text">Gender:{people.gender}</h5>
                <h5 class="card-text">Age:{people.age}</h5>
                <a class="decor" href={people.url} target="_blank">
                  JSON response
                </a>
              </div>
            </div>
          ))}
        </section>
      </div>

      <div className="film-info container">
        <section className="row justify-content-center mt-5">
          {films.map((films) => (
            <div class="card" style={{ width: "36rem" }}>
              <div class="card-body" key={`film-name-${films.id}`}>
                <h4 class="card-title">Title:{films.title}</h4>
                <h5 class="card-text">Release Date:{films.release_date}</h5>
                <h5 class="card-text">Rotten Tomato Score:{films.rt_score}</h5>
                <h5 class="card-text">About This Film:{films.description}</h5>
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};
export default App;
