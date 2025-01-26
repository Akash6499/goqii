import { useState } from 'react'
import  "./App.css"
import Header from './components/Header'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Users from './pages/Users'
import EditUser from './pages/EditUser'
import AddUser from './pages/AddUser'

function App() {
  

  return (
    <>
    <div className='container-fluid p-0'>

    
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Users' element={<Users/>}/>
      <Route path='/AddUser' element={<AddUser/>}/>
      <Route path='/EditUser/:id' element={<EditUser/>}/>
    </Routes>
    </div>
    </>
  )
}

export default App
