import React, { useEffect, useState } from 'react';

const Card = () => {
    const [movies, setMovies] = useState([]); // State untuk data film
    const [loading, setLoading] = useState(true); // State untuk loading
    const [error, setError] = useState(null); // State untuk error handling

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const apiKey = '8f38a77b78899a5500c2f94daea756a1';
                const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`;

                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error('Failed to fetch movies');
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
        return <div className='text-center'>Loading...</div>;
    }

    if (error) {
        return (
            <div className='text-center text-red-500'>
                <p>Error: {error}</p>
            </div>
        );
    }

    return (
        <div className='container mx-auto p-4'>
            <h1 className='text-3xl font-semibold text-center mb-6'>Popular Movies</h1>
            <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                {movies.map((movie) => (
                    <li key={movie.id} className='bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300'>
                        <img
                            src={
                                movie.poster_path
                                    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                                    : 'https://via.placeholder.com/500x750?text=No+Image'
                            }
                            alt={movie.title}
                            className='w-full h-56 object-cover rounded-md mb-4'
                        />
                        <h2 className='text-xl font-semibold text-center text-gray-800'>{movie.title}</h2>
                        <p className='text-sm text-center text-gray-700 mt-2'>{movie.overview || 'No description available.'}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Card;
