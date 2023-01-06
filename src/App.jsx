
import './index.css'
import React  from 'react'
import Navbar  from './Navbar'
import Home from './Home'
import Video from './Video'
import Support from './Support'
import Package from './Package'
import Footer from './Footer'
import { Routes, Route } from 'react-router-dom'
import NotFound from './NotFound'


function App() {
  return (
   <>
    <Navbar></Navbar>
 <Routes>
 
   <Route  path='/' element={<Home></Home>}/>

   <Route  path='/video' element={<Video></Video>}/>

   <Route  path='/support' element={<Support></Support>}/>

   <Route  path='/package' element={<Package></Package>}/>

   <Route path='*' element={<NotFound></NotFound>}> </Route>
 </Routes>
   <Footer></Footer>
   
   </>
  )
}

export default App
