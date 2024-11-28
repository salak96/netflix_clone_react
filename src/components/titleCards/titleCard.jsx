import React, { useEffect, useState } from 'react'; 
import './titleCard.css'; 

const TitleCard = () => {
    const [movies, setMovies] = useState([]); // State for movie data
    const [loading, setLoading] = useState(true); // State for loading
    const [error, setError] = useState(null); // State for error handling 

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const apiKey = "8f38a77b78899a5500c2f94daea756a1";
                const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`;

                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error("Failed to fetch movies");
                }
                const data = await response.json();
                setMovies(data.results); 
            } catch (err) {
                setError(err.message); 
            } finally {
                setLoading(false); 
            }
        };

        fetchMovies(); 
    }, []); 

    if (loading) {
        return <div className="text-center">Loading...</div>;
    }

    if (error) {
        return (
            <div className="text-center text-red-500">
                <p>Error: {error}</p>
            </div>
        );
    }

    return (
        <div className="title-card">
            <h2>Popular Movies</h2> 
            <div className="card-list">
                {movies.map((movie, index) => (
                    <div className="card" key={index}>
                        <img 
                            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                            alt={movie.title} 
                           
                        />
                       <p>{movie.title}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TitleCard;
