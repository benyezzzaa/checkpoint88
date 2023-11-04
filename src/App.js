import logo from './logo.svg';
import './App.css';

import React, { useState } from 'react'
import MovieList from './MovieList'
import { Route, Routes } from 'react-router'
import Description from './ Description'

function App() {
  const  [list , SetList]=useState([
    { title :'shutter island',
    description : ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.',
    posterURL:'https://images-na.ssl-images-amazon.com/images/S/pv-target-images/4651306db4501622166aa68b058b20e7a3c598bcfebea4ebc56733301d54fdae._RI_TTW_.jpg',
    rating : 3,
    VideoURL:"https://www.youtube.com/embed/v8yrZSkKxTA?si=vC3tv3bJhQyW1BUn" } ,
    {
      title :'green mile',
      description : ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.',
      posterURL:'https://flxt.tmsimg.com/assets/p24429_p_v12_bf.jpg',
      rating : 5 ,
      VideoURL:'https://www.youtube.com/embed/Ki4haFrqSrw?si=TO7pgyU1FnNd9L3J'
  },
  {
    title :'v for vendetta',
    description : ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.',
    posterURL:'https://m.media-amazon.com/images/I/41QST6DYNDL._AC_UF1000,1000_QL80_.jpg',
    rating : 5 ,
    VideoURL:'https://www.youtube.com/embed/lSA7mAHolAw?si=b4_FOPyYoBHUkem4'
},
{
  title :'interstellar',
  description : ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.',
  posterURL:'https://img.fruugo.com/product/6/84/32299846_max.jpg',
  rating : 5 ,
  VideoURL:'https://www.youtube.com/embed/zSWdZVtXT7E?si=93gTDvn4BA4z2-pB'
},
  ])
  return (
    <div>
      <Routes>
      <Route path='/' element={<MovieList></MovieList>}></Route>
      <Route path='description/:id' element={<Description movies={list}></Description>}></Route>

      </Routes>
    </div>
  )
}

export default App;
