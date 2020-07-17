import React,{useState,useEffect} from 'react'
import Header from './Header.js'
import {NASA_API_KEY} from './Key.js'
import './App.css'
import axios from 'axios'

function Home(props){
    const [headerBG, setHeaderBG] = useState('#')

    useEffect(() => {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}`)
            .then(api => {
                console.log(api)
                setHeaderBG(api.data.hdurl)
            })
            .catch(() => {
                debugger
            })
    },[])
    return(
        <>
            <Header type='white'></Header>
            <img src={headerBG} alt='Nasa Photo of the Day'></img>
        </>
    )
}

export default Home