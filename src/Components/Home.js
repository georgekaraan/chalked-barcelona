import React from 'react'
import './Home.css'
import { useNavigate } from 'react-router-dom'

export default function Home() {

    let navigate = useNavigate()
    return (
        <div className='splash-screen'>
            <h1 className='splash-txt'>Welcome to <span>Chalked</span></h1>
            <h3 className='splash-h3'>We are asustainable clothing store based in Barcelona.</h3>
            <div><p className='splash-p' onClick={() => navigate('/shop')}>Shop now!</p></div>


        </div>
    )
}
