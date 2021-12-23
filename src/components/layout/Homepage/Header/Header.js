import React from 'react'
import './Header.css'

const Header = () => {
    return (
        <header className="header">
            <div className='container'>
                <h1><a href='/'>The Grand Exchange</a></h1>
                <ul>
                    <li><a href="/login">Login</a></li>
                    <li><a href="/about">About</a></li>
                </ul>
            </div>
        </header>
    )
}

export default Header