import React from "react";
import CartWidget from './CartWidget';
import { NavLink } from "react-router-dom";

export const NavBar = () => {
    return(
        <>
        <div className="custom-container">
            <nav className="custom-nav">
                <ul className="nav__list">
                    <li>
                        <NavLink className="nav__link"to='cart' ><CartWidget greeting="Carrito"/></NavLink>
                    </li>
                    <li>
                        <NavLink className="nav__link"to='/categoria/deinterior' >De interior</NavLink>
                    </li>
                    <li>
                        <NavLink className="nav__link"to='/categoria/deexterior' >De exterior</NavLink>
                    </li>
                    <li>
                        <NavLink className="nav__link"to='/' >Todos los productos</NavLink>
                    </li>
                    <li>
                        <NavLink className="nav__brand" to='/'>Furniture's City</NavLink>
                    </li>
                </ul>
            </nav>
        
        </div>
        </>
    );
}

export default NavBar;