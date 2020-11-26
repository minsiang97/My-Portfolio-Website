import React from 'react'
import nextagram1 from '../../images/Nextagram1.png'
import {Link} from 'react-router-dom'
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import {SocialIcon} from 'react-social-icons'
import axios from '../../images/axios.jpg'
import jwt from '../../images/jwt.png'
import './Nextagram.css'

const Nextagram = () => {
    return (
        <>
        <Container fluid className="nextagram-title">
            <Row className="justify-content-around">
                <Col md={8} xs={12}>
                    <img className="w-100" src={nextagram1}></img>
                </Col>
            </Row>
            <Row className="justify-content-center mt-3">
                <p className="nextagram">Nextagram</p>
            </Row>
            <Row>
                <Col md={4} xs={12} className="p-5">
                    <h3>Responsibilities</h3>
                    <ul className="team-name">
                        <li>User Experience</li>
                        <li>User Interface</li>
                        <li>React Frontend</li>
                        <li>Python Flask Backend</li>
                        <li>Postgresql database</li>
                        <li>Deployment</li>
                    </ul>
                </Col>
                <Col md={7} xs={12}>
                    <p className="nextagram-about mt-3">About</p>
                    <p className="nextagram-description mt-5">It is a recreation of web application of Instagram created by myself as a part of the course. This web application has been created twice which the creating the 1st time using React.js and fetch the api in postman while the second time using HTML,CSS and Python Flask. </p>
                    <p className="nextagram-description mt-5">I recreated this application using React.js in a span of 2 weeks but only 9 days when using Python and HTML.</p>
                </Col>
            </Row>
        </Container>
        <Container fluid className="challenge">
            <h1>Challenges</h1>
            <Row>
                <Col md={6} xs={12}>
                    <img className="w-100 braintree mt-5" src={axios}></img>
                </Col>
                <Col md={6} xs={12}>
                    <p className="challenge-description">I was engaged in doing both frontend and backend and I have encountered some difficulties.</p>
                    <p className="challenge-description">One of the challenges I faced is using axios. This is the first time using axios in React.js. I was confused on how to use them to fetch data from the backend server. But after a detailed explanation from mentors, I am able to understand and move on to the next step.</p>
                </Col>
            </Row>

            <Row className="flex-row-reverse mt-5">
                <Col md={6} xs={12}>
                    <img className="w-100 peewee mt-5" src={jwt}></img>
                </Col>
                <Col md={6} xs={12}>
                    <p className="challenge-description">Another challenges I faced would be getting jwt token when creating api using python. I was confused about using jsonify and didn't know what it is for. After doing some researche online and explanation from mentors, I was able to understand and make it work in a second. </p>
                </Col>
            </Row>
        </Container>

        <Container fluid className="learnings p-5">
            <h1>My Learnings</h1>
            <p className="learnings-title">Create web applications that applicable to our life with the best user experience possible.</p>
            <p className="learnings-description">We learnt to focus on solving user problems by allowing users to have the best experience possible. We have to think out of the box and put user's experience at the core and creating application that suits every users.  </p>
            <p className="learnings-description">We learnt to be always prepared to take up and face any new challenges and keep myself up to date to the latest knowledge of every development language and framework used.</p>
        </Container>

        <Container fluid className="outcome">
            <Jumbotron className="bg-white">
                <h1>Outcome</h1>
                <p className="outcome-description">
                    Click on the button below to view Nextagram website.
                </p>
                <p>
                    <a href="https://young-mountain-50273.herokuapp.com/" ><Button variant="dark" className="outcome-button">View Project</Button></a>
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

export default Nextagram