import React from 'react'
import logo from './ghanta.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
    
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">
                            <img src={logo} alt="" width="30" height="24" className="d-inline-block align-text-top" />
                            GhantaNews
                        </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/about">About</Link>
                                    </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/headlines">Top Headlines</Link>
                                    </li>
                                
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    
}

export default Navbar
