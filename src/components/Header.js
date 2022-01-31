import React, { useState } from 'react';

import '../styles/header.css';

export default function Header() {
    const [menuToogle, setMenuToogle] = useState(false);
    const ToogleMenu = ()=>{
        menuToogle ? setMenuToogle(false) : setMenuToogle(true);
    }

    return (
        <header>
            <a href="https://www.google.com">
                <h2>Hello, Scientist!</h2>
            </a>
            <nav className={menuToogle?"nav--active":""}
                 onClick={ToogleMenu}>
                <ul className='Navbar'>
                    <li>
                        <a href="https://www.google.com">Products</a>
                    </li>
                    <li>
                        <a href="https://www.google.com">Services</a>
                    </li>
                    <li>
                        <a href="https://www.google.com">About Us</a>
                    </li>
                </ul>
                <ul className='Login'>
                    <li>
                        <a href="https://www.google.com">Login</a>
                    </li>
                    <li>
                        <a href="https://www.google.com">Sign Up</a>
                    </li>
                </ul>
            </nav>
            <div className={menuToogle?"toogle_menu toogle_menu--active":"toogle_menu"}
                 onClick={ToogleMenu}>
            </div>
        </header>
    )
}

