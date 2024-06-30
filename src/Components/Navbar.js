"use client";
import Image from 'next/image';
function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg sticky-top ps-5 shadow-sm " style={{ backgroundColor: '#fefefe' }}>
                <div className="container-fluid">
                    <a className="navbar-brand w-25" href="/"><Image width={293} height={60} src='/imgs/hobbycue_logo.png' alt="hobbycue Logo"/></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <form className="me-5" role="search">
                            <div className="input-group">
                                <input className="form-control bg-light" type="search" placeholder="Search here..." aria-label="Search" />
                                <span className="input-group-text bg-color" id="basic-addon2"><i className="bi bi-search text-white"></i></span>
                            </div>
                        </form>

                        <ul className="navbar-nav">
                            <div className="nav-item dropdown me-4">
                                <button className="nav-link dropdown-toggle" type="button" data-toggle="dropdown"><i className="bi bi-compass-fill text-passion fs-6 me-2"></i> Explore
                                    <span className="caret"></span></button>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item pe-5" href="/">People - Community</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item pe-5" href="/">Places - Venues</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item pe-5" href="/">Programs Events</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item pe-5" href="/">Products Store</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item pe-5" href="/">Blogs</a></li>
                                </ul>
                            </div>
                            <div className="nav-item dropdown me-4">
                                <button className="nav-link dropdown-toggle" type="button" data-toggle="dropdown"><i className="bi bi-star bg-color text-white p-1 rounded-pill me-2"></i> Hobbies
                                    <span className="caret"></span></button>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item pe-5" href="/">Hobby 1</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item pe-5" href="/">Hobby 2</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item pe-5" href="/">Hobby 3</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item pe-5" href="/">Hobby 4</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item pe-5" href="/">Hobby 5</a></li>
                                </ul>
                            </div>
                            <li className="nav-item me-4">
                                <a className="nav-link" aria-current="page" href="/"><i className="bi bi-bookmark-fill text-passion fs-5"></i></a>
                            </li>
                            <li className="nav-item me-4">
                                <a className="nav-link" aria-current="page" href="/"><i className="bi bi-bell-fill text-passion fs-5"></i></a>
                            </li>
                            <li className="nav-item me-4">
                                <a className="nav-link" aria-current="page" href="/"><i className="bi bi-cart-fill text-passion fs-5"></i></a>
                            </li>
                            <li className="nav-item">
                                <a className="btn btn-outline-primary px-4" aria-current="page" href="/">Sign In</a>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;