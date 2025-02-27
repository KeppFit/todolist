import './Tache.css'
import { useState } from 'react'
import tachesEnCours from '../saveTaches/tachesEnCours.json'


function Tache(){

    const [isVisible, setIsVisible] = useState(false);
    const toggleVisible = (event) => {
        const isClickable = ["DIV", "H1"].includes(event.target.tagName);
        console.log(event.target.tagName)
        if (isClickable) {
            setIsVisible(!isVisible)}
        }
    console.log(tachesEnCours)
    return(
        <>
            {tachesEnCours.map((tache, index) => (
                <div key={index} className={`tache${isVisible? "show" : ""}`} onClick={toggleVisible}>
                    <h1>{tache.title}</h1> 
                    <div className={`tacheWrapper${isVisible? "show" : ""}`}>
                        <ul>
                            {tache.sousTaches.map((sousTache, yndex) => (
                                <li>
                                    <input type='checkbox'/> <label>{sousTache}</label>
                                </li>
                            ))}
                        </ul>
                    <button className='button-56'>terminer tache</button>
                    </div>
                </div>        
            ))
        }       
    </>
    )
}

export default Tache