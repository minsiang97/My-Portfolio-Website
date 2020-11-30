import React from 'react'
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import {SocialIcon} from 'react-social-icons'
import InventoryManagement from '../../images/InventoryManagement.png';
import peewee from '../../images/peewee.jpg';
import './InventoryManagementSystem.css'

const Inventory = () => {
    return (
        <>
        <Container fluid className="inventory-title">
            <Row className="justify-content-around">
                <Col md={8} xs={12}>
                    <img className="w-100" src={InventoryManagement}></img>
                </Col>
            </Row>
            <Row className="justify-content-center mt-3 pl-3">
                <p className="inventory">Inventory Management System</p>
            </Row>
            <Row>
                <Col md={4} xs={12} className="p-5">
                    <h3>Responsibilities</h3>
                    <ul className="team-name">
                        <li>User Experience</li>
                        <li>User Interface</li>
                        <li>Python Flask Backend</li>
                        <li>Posgresql database</li>
                        <li>Deployment</li>
                    </ul>
                </Col>
                <Col md={7} xs={12}>
                    <p className="inventory-about mt-3">About</p>
                    <p className="inventory-description mt-5">It is a web application created by myself as a part of the course. This web application allows admin who have access to this system to manage their stores, warehouses and products. </p>
                    <p className="inventory-description mt-5">Admin can either choose to add any stores, warehouses and products or delete any products that does not exist anymore. Added stores, warehouses and products will be added into database while deleted stores, warehouses and products will be deleted from database</p>
                </Col>
            </Row>
        </Container>
        <Container fluid className="challenge">
            <h1>Challenges</h1>
            <Row>
                <Col md={6} xs={12}>
                    <img className="w-100 mt-5" src={peewee}></img>
                </Col>
                <Col md={6} xs={12}>
                    <p className="challenge-description">I was engaged in doing frontend using HTML and CSS and backend using Python Flask and Postgresql database. I have faced a challenge since this is my first time dealing with backend server.</p>
                    <p className="challenge-description">The challenge I faced is using peewee documentation. The hard part for me as a beginner is when to use get and when to use select. It has confused me for quite some time but after the guidance of my mentors, I was able to figure out the difference and completing this project.  </p>
                </Col>
            </Row>
        </Container>

        <Container fluid className="learnings p-5">
            <h1>My Learnings</h1>
            <p className="learnings-title">Design a better database that fit perfectly for your project</p>
            <p className="learnings-description">I learnt to design a better database by figuring out the best relationship between the tables before creating them in the database. With a better design of it makes us easier to code for backend.  </p>
            <p className="learnings-description">I learnt to be always prepared to take up and face any new challenges and improve myself through them.</p>
        </Container>

        <Container fluid className="outcome">
            <Jumbotron className="bg-white">
                <h1>Outcome</h1>
                <p className="outcome-description">
                    Click on the button below to view Inventory Management System website.
                </p>
                <p>
                    <a href="https://ongs-inventory-management.herokuapp.com/" ><Button variant="dark" className="outcome-button">View Project</Button></a>
                </p>
            </Jumbotron>
        </Container>

        <Container fluid className="footer">
            <Row className="footer-row">
                <Col md={7} xs={12}>
                    <p className="footer-texts">I am a person with great interpersonal skill and a great team player who is always ready for a challenge. I tackle problems from multiple perspectives in a creative and analytical approach. </p>
                    <p className="footer-text2">If you think I am the Full Stack Developer you are looking for, lets <b>connect</b> and chat more!</p>
                </Col>
            </Row>
            <Row className="footer-row">
                <SocialIcon className="ml-3 " url="https://www.linkedin.com/in/min-siang-ong-2ba166170/" bgColor="white"></SocialIcon>
                <SocialIcon className="ml-3 " network="mailto" url="mailto:ongminsiang@gmail.com" bgColor="white"></SocialIcon>
                <SocialIcon className="ml-3 " url="https://github.com/minsiang97" bgColor="white"></SocialIcon>
            </Row>
        </Container>
        </>
    )
}

export default Inventory