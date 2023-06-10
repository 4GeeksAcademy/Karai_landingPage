import React from 'react'
import Navbar from './Navbar.jsx'
import Jumbotron from './Jumbotron.jsx'
import Card from './Card.jsx'

const Landing = () => {
    return(
        <div>
        <Navbar/>
            <div className='container'>
                <Jumbotron/>
                <div className='d-flex'>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        </div>  
    )
}

export default Landing