import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Genres from '../../components/genres/Genres';
import SingleComponent from '../../components/singleComponent/SingleComponent';
import useGenre from '../../hooks/useGenres';
import CustomPagination from '../pagination/Pagination';

const Movie = () => {
    const [genres, setGenres] = useState([]);
    const [selectedGenres, setSelectedGenres] = useState([]);
    const [page, setPage] = useState(1);
    const [content, setContent] = useState([]);
    const [numOfPage, setNumOfPage] = useState();
    const genreForUrl = useGenre(selectedGenres);

    const fetchMovies = async() => {
        const { data } = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreForUrl}`);
        setContent(data.results);
        setNumOfPage(data.total_pages);
    }

    useEffect(() => {
        fetchMovies();
    }, [page, genreForUrl]); 
// console.log(content);
// console.log(numOfPage);
    return (
        <div>
            <span className='page__title'>Movie page</span>
            <Genres 
            type='movie'
            genres={genres}
            setGenres={setGenres}
            selectedGenres={selectedGenres}
            setSelectedGenres={setSelectedGenres}
            setPage={setPage}
            />
            <div className="trending">
                {content && content.map(c => 
                    <SingleComponent 
                    key={c.id}
                    id={c.id}
                    poster={c.poster_path}
                    title={c.title || c.name} 
                    date={c.release_date || c.first_air_date} 
                    media_type='movie' 
                    vote_average={c.vote_average} 
                    />
                )}
            </div>
            {numOfPage > 1 && <CustomPagination setPage={setPage} setNumOfPage={numOfPage}/>}
        </div>
    )
}

export default Movie;