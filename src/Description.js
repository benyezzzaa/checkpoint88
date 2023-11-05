import React from 'react'
import { useParams } from 'react-router'
import Navbarr from './Navbar';
import Footer from './Footer';
import './css.css'
import { NavLink } from 'react-router-dom';

function Description({movies}) {
    const {id}=useParams() ;
    console.log(id)
  return (
    <div>
     <NavLink to={'/'}>
     <Navbarr></Navbarr>
     </NavLink>
     <h1 className='title'> {movies[id].title} </h1>
     <div  className='trailer'>
     <iframe width="887" height="499" src={movies[id]. VideoURL} title="The Green Mile | 4K Trailer | Warner Bros. Entertainment" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen ></iframe>
     </div>
     <p className='description'>{movies[id].description}</p>
     <Footer></Footer>
    </div>
  )
}

export default Description
