import { navBar, Containers } from "react-bootstrap";
import { useState, useEffect } from "react";
import Nav from 'react-bootstrap';

import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/navIcon1.svg';
import navIcon2 from '../assets/img/navIcon2.svg';
import navIcon3 from '../assets/img/navIcon3.svg';


export const navBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            }
            else {
                setScrolled(false);
            }
        }
        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);

    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (


        function Pillbar() {
            return (

                <Nav variant="pills" defaultActiveKey="/home">
                    <className = {scrolled ? "scrolled" : ""}>
                    <Nav.Item>
                        <Nav.Link href="/home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}
                            onClick={() => onUpdateActiveLink('home')}>
                            <img src={logo} alt="Logo" />
                            Home</Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                        <Nav.Link eventKey="skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'}
                            onClick={() => onUpdateActiveLink('skills')}>
                            Skills</Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                        <Nav.Link eventKey="projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}
                            onClick={() => onUpdateActiveLink('projects')}>
                            Projects</Nav.Link>
                    </Nav.Item>
                    <span className="navbar-text">

                        <div className="social-icon">
                            <a href="#"> <img src={navIcon1} alt="" /> </a>
                            <a href="#"><img src={navIcon2} alt="" /></a>
                            <a href="#"><img src={navIcon3} alt="" /></a>
                        </div>
                        <button className="contact-btn" onClick={() => console.log('connect')}>
                            <span>Let's Connect</span>
                        </button>
                    </span>
                </Nav>

            );
        }

    export default Pillbar;
    );
}