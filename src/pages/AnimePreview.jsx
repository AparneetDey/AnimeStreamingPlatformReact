import React, { useState, useEffect} from 'react'
import { useLoaderData } from 'react-router'
import '@fortawesome/fontawesome-free/css/all.min.css';
import HomeButton from '../components/HomeButton';
import AnimeDetails from '../components/AnimeDetails';
import { getTrendCount } from '../appwrite';
import ScrollToTop from '../components/ScrollToTop';


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
  const { title, title_english, year, mal_id, episodes, score, scored_by, rating, images, trailer } = anime;

  const [trendCount, setTrendCount] = useState(0);

  const embedUrl = `${trailer.embed_url}?rel=0&modestbranding=1`;

  useEffect(() => {
    setTrendCount(getTrendCount(mal_id));
  }, [])
  

  return (
    <section className='anime-preview'>
      <ScrollToTop />
      <div className='anime-section'>
        <div className='content'>
          <section className='top'>
            <div className='title'>
              <h2>{title_english ? title_english : title}</h2>
              <div>
                <p>{year ? year : "N/A"} <span>●</span> {rating.split(' ')[0]} <span>●</span> {episodes}</p>
              </div>
            </div>

            <div className='rating flex flex-col gap-[10px] sm:flex-row'>
              <div>
                <img src="/star.svg" alt="Star Icon" />
                <p className='text-white flex'>{score ? score.toFixed(1) : "N/A"}<p>{score ? "/10" : ""}</p></p>
                <p>{scored_by ? `(${formatNumber(scored_by)})` : ''}</p>
              </div>
              <div>
                <img src="/popular.svg" alt="Grow Icon" />
                <p>{trendCount}</p>
              </div>
            </div>
          </section>

          <section className='mid'>
            <img src={images.jpg.image_url} alt={title_english ? title_english : title} />
            {trailer.embed_url ? (
              <iframe
                width="100%"
                height="100%"
                src={embedUrl ? embedUrl : ""}
                title={title_english ? title_english : title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
                className="rounded-xl"
              />
            ) : (
              <div>
                No Trailer Available
              </div>
            )}

          </section>

          <section className='bot'>
            <AnimeDetails anime={anime} />
            <HomeButton />
          </section>
        </div>
      </div>
    </section>
  )
}

export default AnimePreview