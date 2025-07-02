import React from 'react'

const AnimeDetails = ({ anime }) => {
	return (
		<div className="grid grid-cols-[100px_1fr] gap-x-2 gap-y-[20px] w-full sm:grid-cols-[150px_1fr] max-w-[800px] w-full">
			{/* Genres */}
			<div className="label">Genres</div>
			<div className="flex gap-[9px] flex-wrap">
				{anime.genres.map((genre) => (
					<div key={genre.mal_id} className="genres">{genre.name}</div>
				))}
			</div>

			{/* Overview */}
			<div className="label">Overview</div>
			<div className="text-white text-[16px] whitespace-pre-line">
				{anime.synopsis}
			</div>

			{/*Aired*/}
			<div className='label'>Aired</div>
			<div className='text-[#D6C7FF]'>{anime.aired.string}</div>

			{/*Status*/}
			<div className='label'>Status</div>
			<div className='text-[#D6C7FF]'>{anime.status}</div>

			{/*Type*/}
			<div className='label'>Type</div>
			<div className='text-[#D6C7FF]'>{anime.type}</div>

			{/*Duration*/}
			<div className='label'>Duration</div>
			<div className='text-[#D6C7FF]'>{anime.duration}</div>

			{/*Studios*/}
			<div className='label'>Studios</div>
			<div className='text-[#D6C7FF]'>
				{anime.studios.length > 0 ? (
					anime.studios.map((studio, index) => (
						<div key={studio.mal_id}>
							{studio.name}
							{index < anime.studios.length - 1 && <span className='text-[#D6C7FF]'>●</span>}
						</div>
					))) : "N/A"
				}
			</div>

			{/*Producers*/}
			<div className='label'>Producers</div>
			<div className='text-[#D6C7FF] flex gap-x-[4px] flex-wrap'>
				{anime.producers.length > 0 ? (anime.producers.map((producer, index) => (
					<div key={producer.mal_id} className='flex items-center gap-x-[4px]'>
						{producer.name}
						{index < anime.producers.length - 1 && <span className='text-[#D6C7FF]'>●</span>}
					</div>
				))) : "N/A"
			}
			</div>
		</div>

	)
}

export default AnimeDetails