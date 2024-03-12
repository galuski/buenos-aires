import { Route, Routes } from 'react-router-dom'
import {Navbar} from './cmps/Navbar'
import { WhatToDo } from './pages/WhatToDo'
import { NechitaRaka } from './pages/NechitaRaka'
import { Information } from './pages/Information'
import { Contact } from './pages/Contact'
import { HomePage } from './pages/HomePage'
import './App.css'
import './assets/styles/main.css'

function App() {

  return (
    <div className='app'>
    <Navbar/>
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/what-to-do' element={<WhatToDo />} />
      <Route path='/nechita-raka' element={<NechitaRaka />} />
      <Route path='/information' element={<Information />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
    </div>
  )
}

export default App
