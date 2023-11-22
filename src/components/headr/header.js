// Header.js
import React from 'react';
import './header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="logo">Moje portfolio</div>
            <nav className="nav">
                <ul>
                    <li><a href="#section1">Práce</a></li>
                    <li><a href="#section2">Kontakt</a></li>
                    <li><a href="#section3">Random</a></li>
                    {/* Přidejte další položky navigace podle potřeby */}
                </ul>
            </nav>
        </header>
    );
}

export default Header;
