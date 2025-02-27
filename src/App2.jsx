import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Tache from './component/Tache.jsx'
import './App2.css'
import chibiSerious from './assets/chibiserious.png'

function App2() {

  return (
    <>  
        <div className ='mainWrap'>
          <div className="leftWrap">
            Tâches sauvegardées
          </div>
        <div className='topMid'>
            <h1>Liste des tâches en cours</h1>
            <img className='chibi'src={chibiSerious}/>
        </div>
        <div className="midWrap">
            <Tache/>
        </div>
          <div className="rightWrap">ouioui baguette </div>
        </div>
    </>
  )
}

export default App2
