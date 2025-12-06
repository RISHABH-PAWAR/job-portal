import { useContext, useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import ApplyJob from './pages/ApplyJob'
import Applications from './pages/Applications'
import RecuriterLogin from './components/RecuriterLogin'
import { AppContext } from './context/AppContext'

function App() {
  const{showRecruiterLogin} = useContext(AppContext)

  return (
    <>
      <div>
       { showRecruiterLogin && <RecuriterLogin/>}
        <Routes>
          <Route path='/' element = {<Home/>}/>
          <Route path='/apply-job/:id' element = {<ApplyJob/>}/>
          <Route path='/application' element = {<Applications/>}/>
        </Routes>

      </div>
    </>
  )
}

export default App
