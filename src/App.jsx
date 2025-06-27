import React, { useEffect, useState } from 'react';
import Search from './components/Search';
import Spinner from './components/spinner';
import AnimeCard from './components/AnimeCard';
import { useDebounce } from 'react-use';

const API_BASE_URL = "https://api.jikan.moe/v4"

const  API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
  }
}

const App = () => {
  const [animeList, setAnimeList] = useState([]);
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('')
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  useDebounce( () => 
    setDebouncedSearchTerm(searchTerm),
     500, 
    [searchTerm]
  );

  const fetchAnime = async (query) => {
    setIsLoading(true);
    setErrorMessage('');

    try {
      const endpoint = query 
      ? `${API_BASE_URL}/anime?q=${encodeURIComponent(query)}`
      : `${API_BASE_URL}/top/anime?filter=bypopularity&sort=desc`;

      const response = await fetch(endpoint, API_OPTIONS);

      if(!response.ok) {
        throw new Error('Error fetching anime!');
      }

      const data = await response.json();
      
      if(!data.data || data.data.length === 0) {
        setErrorMessage(data.Error || 'No anime found!');
        setAnimeList([]);
        return;
      }

      setAnimeList(data.data);

    } catch (error) {
      console.log(`Error fetching anime: ${error}`);
      setErrorMessage('Error fetching anime! Please try again later.');
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchAnime(debouncedSearchTerm);
  }, [debouncedSearchTerm]);

  return (
    <main>
      <div className='pattern' />

      <div className='wrapper'>
        <header>
          <img src="/hero.png" alt="Hero Banner" className='text-white'/>
          <h1>Find The <span className='text-gradient'>Animes</span> That You Love Without Any Hassle</h1>

          <Search searchTerm = {searchTerm} setSearchTerm = {setSearchTerm} />
        </header>

        <section className='all-animes'>
          <h2 className='mt-[40px]'>Popular Animes</h2>
          
          {isLoading ? (
            <Spinner />
          ): errorMessage ? (
            <p className='text-red-500'>{errorMessage}</p>
          ): (
            <ul>
              {animeList.map((anime) => (
                <AnimeCard key = {anime.mal_id} anime = {anime} />
              ))}
            </ul>
          )}
        </section>
      </div>
    </main>
  )
}

export default App
