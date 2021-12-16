import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className="header">
            <div className='container'>
                <Link to='/'><h1>The Grand Exchange</h1></Link>
                <ul>
                    <li><a href="/login">Login</a></li>
                    <li><a href="/about">About</a></li>
                </ul>
            </div>
        </header>
    )
}

export default Header