import React, { useEffect, useState } from 'react'
import Search from './components/Search'
import { useDebounce } from 'use-debounce';

const API_BASE_URL = "https://api.jikan.moe/v4"

const  API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
  }
}

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [anime, setAnime] = useState([]);

  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  const fetchAnime = async () => {
    try {
      const endpoint = `${API_BASE_URL}/top/anime`;

      const response = await fetch(endpoint, API_OPTIONS);

      if(!response.ok) {
        throw new Error('Error fetching anime!');
      }

      const data = await response.json();
      console.log(data);

    } catch (error) {
      console.log(`Error fetching anime: ${error}`);
      setErrorMessage('Error fetching anime! Please try again later.');
    }
  }

  useEffect(() => {
    fetchAnime();
  }, []);

  return (
    <main>
      <div className='pattern' />
      {/* <img src="/BG.png" alt="banner" className='absolute'/> */}

      <div className='wrapper'>
        <header>
          <img src="/hero.png" alt="Hero Banner" className='text-white'/>
          <h1>Find The <span className='text-gradient'>Movies</span> That You Love Without Any Hassle</h1>

          <Search searchTerm = {searchTerm} setSearchTerm = {setSearchTerm} />
        </header>

        <section className='all-movies'>
          <h2>All Movies</h2>
          {errorMessage && <p className='text-red-500'>{errorMessage}</p>}
        </section>
      </div>
    </main>
  )
}

export default App
