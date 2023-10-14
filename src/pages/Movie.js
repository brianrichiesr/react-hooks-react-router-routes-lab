import { movies } from "../data";
import NavBar from "../components/NavBar";
import { useParams } from "react-router-dom";
import { v4 as uuid } from "uuid";

function Movie() {
  const params = useParams();

  const movie = movies.find(movie => movie.title === params.title);
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>{movie.title}</h1>
        <p>{movie.time}</p>
        {movie.genres.map(genre => {
          return <span key={uuid()}>{genre}</span>
        })}
      </main>
    </>
  );
};

export default Movie;
