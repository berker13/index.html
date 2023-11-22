// Footer.js
import React from 'react';
import './footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-logo">Vše s výhledem</div>
                <div className="footer-info">
                    <p>Kontaktní informace: example@email.com</p>
                    <p>&copy; {new Date().getFullYear()} Můj Projekt. Všechna práva vyhrazena.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
