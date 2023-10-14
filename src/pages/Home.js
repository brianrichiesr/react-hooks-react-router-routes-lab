import { movies } from "../data";
import NavBar from "../components/NavBar";
import MovieCard from "../components/MovieCard";
import { v4 as uuid } from "uuid";

function Home() {

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Home Page</h1>
        {movies.map(movie => {
          return <MovieCard key={uuid()} title={movie.title} />
        })}
      </main>
    </>
  );
};

export default Home;
