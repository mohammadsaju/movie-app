import { Badge } from '@material-ui/core';
import React from 'react';
import { img_300, unavailable } from '../../config/Config';
import ContentModal from '../contentModal/ContentModal';
import './SingleComponent.css';

const SingleComponent = ({
    id, 
    poster,
    title,
    date,
    media_type,
    vote_average
}) => {
    return (
        <ContentModal media_type={media_type} id={id}>
            <Badge badgeContent={vote_average} color={vote_average>6 ? 'primary' : 'secondary'} />
            <img className='poster' src={poster ? `${img_300}/${poster}` : unavailable} alt={title}/>
            <b className='title'>{title}</b>
            <span className='subtitle'>
                {media_type === 'tv' ? 'Tv series' : 'Movie'}
                <span>{date}</span>
            </span>
        </ContentModal>
    )
}

export default SingleComponent;
