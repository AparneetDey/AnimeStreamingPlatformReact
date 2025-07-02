import React from 'react'
import { Link } from 'react-router'

const HomeButton = () => {
  return (
    <Link to={"/"} className='home-btn'>Visit Homepage <i className="fa-solid fa-arrow-right"></i></Link>
  )
}

export default HomeButton