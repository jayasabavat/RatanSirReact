import MovieCard from "./MovieCard";

function MovieGrid({movies}){
    return (
        <>
            <h1>Movie List</h1>
            <div>
                {movies.map((movie, index) => (
                    <MovieCard key={index} movie={movie} />
                ))}
            </div>
        </>
    );
    
}
export default  MovieGrid;