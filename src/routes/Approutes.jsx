import React from 'react'
import { Route,Routes } from 'react-router-dom'
import CreateProducts from '../Components/Products/CreateProducts'
import VewProducts from '../Components/Products/VewProducts'
import Home from '../Components/Home'
import Notfound from '../Components/Notfound'
const Approutes = () => {
  return (
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/products' element={<VewProducts/>}/>
    <Route path='/add-products/:id?' element={<CreateProducts/>}/>
    <Route path="*" element={<Notfound/>}/>
    
       
    </Routes>
   
  )
}

export default Approutes