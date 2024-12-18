import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './index.scss';
import LogoJ from '../../assets/images/logo-jesse.png';
import LogoSubtitle from '../../assets/images/logo_sub.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faEnvelope, faSuitcase } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <div className="nav-bar">
            <Link className="logo" to="/">
                <img src={LogoJ} alt="logo" />
                <img className="sub-logo" src={LogoSubtitle} alt="slobodan" />
            </Link>
            <div className="hamburger-icon" onClick={toggleMobileMenu}>
                <span className={isMobileMenuOpen ? 'close-icon' : 'open-icon'}>
                    {isMobileMenuOpen ? '✖' : '☰'}
                </span>
            </div>
            <nav className={isMobileMenuOpen ? 'mobile-show' : ''}>
                <NavLink
                    exact="true"
                    activeclassname="active"
                    to="/"
                    onClick={toggleMobileMenu}
                >
                    <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
                </NavLink>
                <NavLink
                    exact="true"
                    activeclassname="active"
                    className="about-link"
                    to="/about"
                    onClick={toggleMobileMenu}
                >
                    <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
                </NavLink>
                <NavLink
                    exact="true"
                    activeclassname="active"
                    className="portfolio-link"
                    to="/portfolio"
                    onClick={toggleMobileMenu}
                >
                    <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
                </NavLink>
                <NavLink
                    exact="true"
                    activeclassname="active"
                    className="contact-link"
                    to="/contact"
                    onClick={toggleMobileMenu}
                >
                    <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
                </NavLink>
            </nav>
            <ul>
                <li>
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://www.linkedin.com/in/david-jesse-odhiambo/"
                    >
                        <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
                    </a>
                </li>
                <li>
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://github.com/DavJesse"
                    >
                        <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
