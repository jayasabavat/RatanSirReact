function MovieCard({movie}){
    return (
        <>
            <p>Title: {movie.Title}</p>
            <p>Description: {movie.description}</p>
            <p>Release: {movie.releaseDate}</p>
            <p>Rating: {movie.rating}</p>
        </>
    );
}export default MovieCard;