import React, { useEffect } from 'react';
import axios from 'axios';
import { Chip } from '@material-ui/core';

const Genres = ({
    type,
    setPage,
    genres,
    setGenres,
    selectedGenres,
    setSelectedGenres
}) => {
  const handleAdd = (genre) => {
    setSelectedGenres([...selectedGenres, genre]);
    setGenres(genres.filter((g) => g.id !== genre.id))
    setPage(1)
  }
  const handleRemove = (genre) => {
    setGenres([...genres, genre]);
    setSelectedGenres(selectedGenres.filter((g) => g.id !== genre.id));
    setPage(1)
  }
    const fetchGenres = async () => {
        const { data } = await axios.get(
          `https://api.themoviedb.org/3/genre/${type}/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
        );
        setGenres(data.genres);
      };
    
      useEffect(() => {
        fetchGenres();
    
        return () => {
          setGenres({}); // unmounting
        };
      }, []);
    return (
        <div style={{padding: "6px 0px"}}>
          {selectedGenres && selectedGenres.map(genre => (
                <Chip
                label={genre.name}
                size='small'
                clickable
                style={{margin: "3px"}}
                key={genre.id}
                color='primary'
                onDelete={() => handleRemove(genre)}
                />
            ))}
            {genres && genres.map(genre => (
                <Chip
                label={genre.name}
                size='small'
                clickable
                style={{margin: "3px"}}
                key={genre.id}
                onClick={() => handleAdd(genre)}
                color='secondary'
                />
            ))}
        </div>
    )
}

export default Genres
