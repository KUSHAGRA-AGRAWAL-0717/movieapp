import { useFetch } from "../hooks/useFetch";
import { useTitle } from "../hooks/useTitle";
import { Card } from "../components";


export const MovieList = ({apiPath, title}) => {
  const { data: movies } = useFetch(apiPath);
  useTitle(title);

  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap other:justify-evenly">       
          { movies && movies.length > 0 ? (
            movies.map((movie) => (

            <Card key={movie.id} movie={movie} />
            ))
          ) : (
            <p>No movies available at the moment.</p>
          )}          

        </div>
      </section>
    </main>
  )
}
