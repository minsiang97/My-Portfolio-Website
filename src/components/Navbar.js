import React, {useState} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';
import {SocialIcon} from 'react-social-icons';
import './Navbar.css'

const WebNavbar = () => {
    const [navbar, setNavbar] = useState(false)

    const changeBackground = () => {
        if (window.scrollY >= 80){
            setNavbar(true)
        } else {
            setNavbar(false)
        }
    }

    window.addEventListener('scroll', changeBackground)

    return (
        <Navbar collapseOnSelect expand="lg" fixed="top" className={navbar? 'navabr active' : 'navbar'} variant="light">
            <Navbar.Brand className="navbar-brand" href="/">minsiang</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" className="nav-toggle">
            </Navbar.Toggle>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto nav">
                <Nav.Link href="/projects" className="work mt-2">My Project</Nav.Link>
                <SocialIcon className="mt-1 socialIcon" url="https://www.linkedin.com/in/min-siang-ong-2ba166170/" bgColor="transparent" fgColor="black"></SocialIcon>
                <SocialIcon className="mt-1 socialIcon" network="mailto" url="mailto:ongminsiang@gmail.com" bgColor="transparent" fgColor="black"></SocialIcon>
                <SocialIcon className="mt-1 socialIcon" url="https://github.com/minsiang97" bgColor="transparent" fgColor="black"></SocialIcon>
                <Link to ="/resume"><button className="navbar-button btn btn-dark">My Resume</button></Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default WebNavbar