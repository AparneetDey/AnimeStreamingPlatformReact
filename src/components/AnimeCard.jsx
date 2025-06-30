import React from 'react'
import { Link } from 'react-router'

const AnimeCard = ( {anime: { mal_id, title, title_english, images, episodes, score, genres}} ) => {
  return (
    <Link to={`/anime/${mal_id}`} className='anime-card'>
        <img 
        src={
            images.jpg.image_url ? images.jpg.image_url : '/no-movie.png'
        } 
        alt={title_english} />

        <div className='mt-4'>
            <h3>{title_english ? title_english : title}</h3>
        </div>

        <div className='content'>
            <div className='rating'>
                <img src="/star.svg" alt="StarIcon" />
                <p>{score ? score.toFixed(1) : 'N/A'}</p>
            </div>

            <span>●</span>

            <p className='episode'>{episodes}</p>

            <span>●</span>

            <p className='genre'>{genres[1] ? genres[1].name : 'N/A'}</p>
        </div>
    </Link>
  )
}

export default AnimeCard