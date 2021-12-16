import React from 'react'
import Header from './Header/Header'
import Background from './Background/Background'
import Search from './Search/Search'
import "./Homepage.css"

const Homepage = () => {
    return (
        <div className='homepage-style'>
            <Header />
            <Background />
            <Search />
        </div>
    )
}

export default Homepage
