import { actors } from "../data";
import NavBar from "../components/NavBar";
import { v4 as uuid } from "uuid";


function Actors() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
      <h1>Actors Page</h1>
        {actors.map(actor => {
          return (
            <article key={uuid()}>
              <h2>{actor.name}</h2>
              <ul>
                {actor.movies.map(movie => {
                  return <li key={uuid()}>{movie}</li>
                })}
              </ul>
            </article>
          )
        })}
      </main>
    </>
  );
};

export default Actors;
