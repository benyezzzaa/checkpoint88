import React from 'react'
import logo from './logo.svg';
import './App.css';
import { useEffect, useRef, useState } from 'react';
import MovieCard from './MovieCard';
import './css.css'
import Navbarr from './Navbar';
import Footer from './Footer';
import './css.css'
import StarRatingComponent from 'react-star-rating-component';
function MovieList() {
    const  [list , SetList]=useState([
        { title :'KOR',
        description : ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.',
        posterURL:'https://th.bing.com/th/id/OIP.cesCHGpoUz7OV4kJM_y_pgHaKr?pid=ImgDet&rs=1',
        rating : 3
    } ,
        {
          title :'le sens de lhumour',
          description : ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.',
          posterURL:'https://th.bing.com/th/id/R.6e99bfe76e0a1c20ed836fee2c463a9d?rik=GuhrdGUER37qww&riu=http%3a%2f%2farchives.lametropole.com%2fassets%2fapplication%2fgallery%2fdaab6884f3e1afd_file.jpg&ehk=jdScq1AmmEU71Bzb0tMmz%2fIVHq0v6BifD05FeE57ruU%3d&risl=&pid=ImgRaw&r=0',
          rating : 5
      },
      {
        title :'v for vendetta',
        description : ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.',
        posterURL:'https://m.media-amazon.com/images/I/41QST6DYNDL._AC_UF1000,1000_QL80_.jpg',
        rating : 5 ,
        VideoURL:'https://www.youtube.com/embed/lSA7mAHolAw?si=b4_FOPyYoBHUkem4'
    },
    {
      title :'tout schuss',
      description : ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.',
      posterURL:'https://th.bing.com/th/id/R.b2522e611985551db2739b5c783ed5d3?rik=Kx3Va%2brp0WZasg&riu=http%3a%2f%2ffr.web.img2.acsta.net%2fpictures%2f15%2f12%2f11%2f15%2f53%2f594537.jpg&ehk=ubg3SA7FntUnxVbLimeuem2b9xb1c5yJqHmuk6a494g%3d&risl=&pid=ImgRaw&r=0',
      rating : 5 ,
      VideoURL:'https://www.youtube.com/watch?v=nNlvsK1qD1E&pp=ygULdG91dCBzY2h1c3M%3D'
   
    },
      ])
    
    
    
    
      const p=useRef()
      const p1=useRef()
      const p2=useRef()
      const p3=useRef()
      const p4=useRef()
    
      const add=()=>{
       var newMovie={title:p.current.value,description:p1.current.value, posterURL:p2.current.value , rating : p3.current.value , VideoURL : p4.current.value}
    
      SetList([...list,newMovie])
      }
    
      const [filtredlist , setFilter] = useState(list)
      useEffect (()=> {
        setFilter(list)
      },[list])
    
      const search=useRef ()
      const filtrer=()=>{
        setFilter( list.filter(e=> e.title.toUpperCase().includes(search.current.value.toUpperCase())))
      }
    
       const[rating , setrating] = useState(0)
       const filterStar =(x)=>{
          setrating(x)
          setFilter( list.filter(e=> e.rating>=x))
    
       }
      return (
      
      <div className='App'>
        <Navbarr></Navbarr>
    
      <input type={'text'} ref={p} placeholder='title movie'  className='space'></input>    
      <input type={'text'} ref={p1} placeholder='description' className='space'></input>    
      <input type={'text'} ref={p2} placeholder='img movie' className='space'></input>    
      <input type={'text'} ref={p3} placeholder='rating' className='space'></input> 
      <input type={'text'} ref={p4} placeholder='Trailer'  className='space'></input>      
       <button onClick={add} className='space' id='spacee'>+</button> 
       <br></br>
       <input type={'search'} placeholder='enter your search ' ref={search} onChange={filtrer} className='onss'></input>
       <StarRatingComponent 
              name="rate1" 
              starCount={5}
              value={rating}
              onStarClick={filterStar}
              className='star'
            />
       <div className='style'>
       {filtredlist.map((e,index)=><MovieCard index={index} movie={e}></MovieCard>)}
       </div>
       <Footer></Footer>
      </div>)
}

export default MovieList