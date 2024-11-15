import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-primary bg-primary fw-medium">
                <div className="container">
                    <a className="navbar-brand text-white" href="#">Redux-project</a>
                    <ul className="navbar-nav d-flex flex-row">
                        <li className="nav-item mx-3">
                            <Link to='/' className="nav-link text-white" href="#">Home</Link>
                        </li>
                        <li className="nav-item mx-3">
                            <Link to='/about' className="nav-link text-white" href="#">About</Link>
                        </li>
                        <li className="nav-item mx-3">
                            <Link to='/contact' className="nav-link text-white" href="#">Contact</Link>
                        </li>
                        <li className="nav-item mx-3">
                            <Link to='/users' className="nav-link text-white" href="#">Users</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar