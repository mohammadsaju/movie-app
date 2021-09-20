import axios from 'axios';
import React, { useEffect, useState } from 'react';
import SingleComponent from '../../components/singleComponent/SingleComponent';
import CustomPagination from '../pagination/Pagination';
import './Trending.css';

const Trending = () => {
    const [page, setPage] = useState(1);
    const [content, setContent] = useState([]);
    const fetchApi = async() => {
        const {data} = await axios.get(`
        https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}&&page=${page}`);
        setContent(data.results);
    }
    useEffect(() => {
        fetchApi();
    },[page]);

    return (
        <div>
            <span className='page__title'>Trending page</span>
            <div className="trending">
                {content && content.map(c => 
                    <SingleComponent 
                    key={c.id}
                    id={c.id}
                    poster={c.poster_path}
                    title={c.title || c.name} 
                    date={c.release_date || c.first_air_date} media_type={c.media_type} 
                    vote_average={c.vote_average} 
                    />
                )}
            </div>
            <CustomPagination setPage={setPage}/>
        </div>
    )
}

export default Trending;
