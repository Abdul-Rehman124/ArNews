import React from 'react'
import { Link} from 'react-router-dom'
import { useState } from 'react'



const Navbar =()=> {
    
const [selectedCategory, setSelectedCategory] = useState('Category');
 
 
        return (
            <div>
                <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">AR News</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link style={{hovercolor: 'green'}} className="nav-item mx-3 link-dark text-decoration-none" aria-current="page" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-item link-dark text-decoration-none" to="/about">About</Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link className="nav-itemdropdown-toggle mx-3 link-dark text-decoration-none dropdown-toggle-split" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                     {selectedCategory}
                                    </Link>

                                    <ul className="dropdown-menu">
                                        
                                        <li><Link className="dropdown-item" to="/general " onClick={() => setSelectedCategory('general ')}>general </Link></li>
                                        <li><Link className="dropdown-item" to="/business" onClick={() => setSelectedCategory('business')}>business </Link></li>
                                        <li><Link className="dropdown-item" to="/entertainment" onClick={() => setSelectedCategory('entertainment')}>entertainment </Link></li>
                                        <li><Link className="dropdown-item" to="/health" onClick={() => setSelectedCategory('health ')}>health </Link></li>
                                        <li><Link className="dropdown-item" to="/science" onClick={() => setSelectedCategory('science')}>science </Link></li>
                                        <li><Link className="dropdown-item" to="/sports" onClick={() => setSelectedCategory('sports ')}>sports </Link></li>
                                        <li><Link className="dropdown-item" to="/technology" onClick={() => setSelectedCategory('technology')}>technology</Link></li>
                                    </ul>
                                </li>
                              
                            </ul>
                            <form className="d-flex" role="search">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                                    <button className="btn btn-outline-success" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
   


export default Navbar
