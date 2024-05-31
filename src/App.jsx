import React,{ useState }  from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Signin from './Signin'
import Appbar from './Appbar'
import Signup from './SignUp'

function App() {

  return (
    <>
    <div style={{
      width:"100vw", height:"100vh", backgroundColor:"#eeeeee"
    }}>
      <Appbar/>
    <Router>
      <Routes>
<Route path='/login' element={<Signin/>} />
<Route path='/signup' element={<Signup/>} />
      </Routes>
    </Router>
      </div>
    </>
  )
}

export default App;