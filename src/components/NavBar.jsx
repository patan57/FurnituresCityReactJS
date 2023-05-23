import React from "react";
import CartWidget from './CartWidget';

export const NavBar = () => {
    return(
        <>
        <div className="container">
            <nav className="nav">
                <ul className="nav__list">
                    <li>
                        <a className="nav__link"><CartWidget greeting="Carrito"/></a>
                    </li>
                    <li>
                        <a className="nav__link" >De interior</a>
                    </li>
                    <li>
                        <a className="nav__link">De exterior</a>
                    </li>
                    <li>
                        <a className="nav__link">Conocé nuestra historia</a>
                    </li>
                    <li>
                        <a className="nav__brand">Furniture's City</a>
                    </li>
                </ul>
            </nav>
        
        </div>
        </>
    );
}

export default NavBar;