import React from 'react'
import { useLoaderData } from 'react-router'

const formatNumber = (num) => {
  if (num >= 1_000_000) {
    return Math.round(num / 1_000_000) + 'M';
  }
  if (num >= 1_000) {
    return Math.round(num / 1_000) + 'K';
  }
  return num.toString();
};

const AnimePreview = () => {
  const anime = useLoaderData();
  console.log(anime);
  const { title, title_english, year, airing, episodes, score, scored_by, rating, images, trailer } = anime;

  const embedUrl = `${trailer.embed_url}?rel=0&modestbranding=1`;


  return (
    <section className='anime-preview'>
      <div className='anime-section'>
        <div className='content'>
          <section className='top'>
            <div className='title'>
              <h2>{title_english ? title_english : title}</h2>
              <div>
                <p>{year} <span>●</span> {rating.split(' ')[0]} <span>●</span> {episodes}</p>
              </div>
            </div>

            <div className='rating'>
              <img src="/star.svg" alt="Star Icon" />
              <p className='text-white'>{score ? score.toFixed(1) : "N/A"}</p>
              <p>{score ? "/10" : ""}</p>
              <p>{scored_by ? `(${formatNumber(scored_by)})` : ''}</p>
            </div>
          </section>

          <section className='mid'>
            <img src={images.jpg.image_url} alt={title_english ? title_english : title} />
            <iframe
              width="100%"
              height="100%"
              src={embedUrl}
              title={title_english? title_english : title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
              className="rounded-xl"
            />
          </section>

          <section className='bot'>
            
          </section>
        </div>
      </div>
    </section>
  )
}

export default AnimePreview