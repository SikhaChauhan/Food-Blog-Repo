import React from 'react';
import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './components/header/header.jsx';
import Footer from './components/Footer.jsx';

function App() {

  return (
    <div className='mx-auto max-w-screen-2xl'>
      <Header/>
      <div className='min-h-[calc(100vh-136)]'>
        <Outlet/>
      </div>
      <Footer/>
    </div>
  )
}

export default App
