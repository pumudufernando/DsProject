import React from "react";
import {NavLink} from "react-router-dom";


const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <NavLink className="nav-link" to="/MainPage">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/create">Booking</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" to="/errorPage">About Us</NavLink>
                </li>


                </ul>
            </div>
        </nav>
    );

}

export default NavBar;