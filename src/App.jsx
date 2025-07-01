import React, { useEffect, useState } from 'react';
import Search from './components/Search';
import Spinner from './components/spinner';
import AnimeCard from './components/AnimeCard';
import { useDebounce } from 'react-use';
import { updateSearchCount, getTrendingAnimes } from './appwrite.js'
import { Link } from 'react-router';

const API_BASE_URL = "https://api.jikan.moe/v4"

const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
  }
}

export const animeLoader = async ({ params }) => {
  try {
    const { animeId } = params;
    const res = await fetch(`${API_BASE_URL}/anime/${animeId}`);

    if (!res.ok) {
      throw new Error("Failed to fetch anime data");
    }
    const data = await res.json();
    return data.data;
  } catch (error) {
    console.log(`Error fetching anime data: ${error}`);
  }
}

const App = () => {
  const [animeErrorMessage, setAnimeErrorMessage] = useState('');
  const [animeList, setAnimeList] = useState([]);
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('')
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [trendingAnimes, setTrendingAnimes] = useState([])
  const [trendErrorMessage, setTrendErrorMessage] = useState('');

  useDebounce(() =>
    setDebouncedSearchTerm(searchTerm),
    700,
    [searchTerm]
  );

  const fetchAnime = async (query) => {
    setIsLoading(true);
    setAnimeErrorMessage('');

    try {
      const endpoint = query
        ? `${API_BASE_URL}/anime?q=${encodeURIComponent(query)}`
        : `${API_BASE_URL}/top/anime?filter=bypopularity&sort=desc`;

      const response = await fetch(endpoint, API_OPTIONS);

      if (!response.ok) {
        throw new Error('Error fetching anime!');
      }

      const data = await response.json();

      if (!data.data || data.data.length === 0) {
        setAnimeErrorMessage(data.Error || 'No anime found!');
        setAnimeList([]);
        return;
      }

      console.log(data.data);

      setAnimeList(data.data);

      if (query && data.data.length > 0) {
        await updateSearchCount(searchTerm, data.data[0]);
      }

    } catch (error) {
      console.log(`Error fetching anime: ${error}`);
      setAnimeErrorMessage('Error fetching anime! Please try again later.');
    } finally {
      setIsLoading(false);
    }
  }

  const loadTrendingAnimes = async () => {
    setIsLoading(true);
    setTrendErrorMessage('');

    try {
      const animes = await getTrendingAnimes();

      setTrendingAnimes(animes);
    } catch (error) {
      console.log(`Error loading trending animes: ${error}`);
      setTrendErrorMessage('Error loading trending animes!');
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchAnime(debouncedSearchTerm);
  }, [debouncedSearchTerm]);

  useEffect(() => {
    loadTrendingAnimes()
  }, [])


  return (
    <main>
      <div className='pattern' />

      <div className='wrapper'>
        <header>
          <img src="/hero.png" alt="Hero Banner" className='text-white' />
          <h1>Find The <span className='text-gradient'>Animes</span> That You Love Without Any Hassle</h1>

          <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </header>

        {trendingAnimes.length > 0 && searchTerm == '' && (
          <section className='trending'>
            <h2>Trending Animes</h2>

            {isLoading ?
              <Spinner />
              : trendErrorMessage ? (
                <p className='text-red-500'>{trendErrorMessage}</p>
              ) : (
                <ul>
                  {trendingAnimes.map((anime, index) => (
                    <li key={anime.$id}>
                      <p>{index + 1}</p>
                      <Link to={`/anime/${anime.anime_id}`}>
                        <img src={anime.poster_url} alt={anime.title_english} />
                      </Link>
                    </li>
                  ))}
                </ul>
              )
            }
          </section>
        )}

        <section className='all-animes'>
          <h2 className='mt-2'>Popular Animes</h2>

          {isLoading ? (
            <Spinner />
          ) : animeErrorMessage ? (
            <p className='text-red-500'>{animeErrorMessage}</p>
          ) : (
            <ul>
              {animeList.map((anime) => (
                <AnimeCard key={anime.mal_id} anime={anime} />
              ))}
            </ul>
          )}
        </section>
      </div>
    </main>
  )
}

export default App
