import React from 'react'
import { useLoaderData } from 'react-router'

const AnimePreview = () => {
	const anime = useLoaderData();

	const {title_english} = anime;

  return (
    <p className='text-white'>{title_english}</p>
  )
}

export default AnimePreview