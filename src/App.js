import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from './component/Home'
import Footer from './component/layout/Footer'
import Header from './component/layout/Header'
import Contactus from './component/Contactus'
import Campus from './component/Campus'
import Research from './component/Research'
import Placements from './component/Placements'
function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/contactus' element={<Contactus/>}/>
      <Route path='/campuslife' element={<Campus/>}/>
      <Route path='/research' element={<Research/>}/>
      <Route path='/placements' element={<Placements/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App