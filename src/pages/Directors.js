import { directors } from "../data";
import NavBar from "../components/NavBar";
import { v4 as uuid } from "uuid";

function Directors() {
  
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Directors Page</h1>
        {directors.map(director => {
          return (
            <article key={uuid()}>
              <h2>{director.name}</h2>
              <ul>
                {director.movies.map(movie => {
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

export default Directors;
