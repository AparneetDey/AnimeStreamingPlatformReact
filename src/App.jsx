import React, { useState } from 'react'
import Search from './components/Search'

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <main>
      <div className='pattern' />
      <img src="/BG.png" alt="banner" className='absolute'/>

      <div className='wrapper'>
        <header>
          <img src="/hero.png" alt="Hero Banner" className='text-white'/>
          <h1>Find The <span className='text-gradient'>Movies</span> That You Love Without Any Hassle</h1>
        </header>

        <Search searchTerm = {searchTerm} setSearchTerm = {setSearchTerm} />
      </div>
    </main>
  )
}

export default App
