import React from 'react'
import livechatroom from '../../images/LiveChatRoom.png'
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import {SocialIcon} from 'react-social-icons'
import socket from '../../images/socket.jpg'
import './LiveChatRoom.css'

const LiveChatRoom = () => {
    return (
        <>
        <Container fluid className="livechatroom-title">
            <Row className="justify-content-around">
                <Col md={8} xs={12}>
                    <img className="w-100" src={livechatroom}></img>
                </Col>
            </Row>
            <Row className="justify-content-center mt-3">
                <p className="livechatroom">Live Chatroom</p>
            </Row>
            <Row>
                <Col md={4} xs={12} className="p-5">
                    <h3>Responsibilities</h3>
                    <ul className="team-name">
                        <li>User Experience</li>
                        <li>User Interface</li>
                        <li>React Frontend</li>
                        <li>Deployment</li>
                    </ul>
                </Col>
                <Col md={7} xs={12}>
                    <p className="livechatroom-about mt-3">About</p>
                    <p className="livechatroom-description mt-5">It is a web application created by myself as a part of the course. This web application allows users who is using this socket to chat when they are online. </p>
                    <p className="livechatroom-description mt-5">User do not need to enter a specific username as its username will randomly given everytime you sign in and avatar will be generated according to the initials of their username.</p>
                </Col>
            </Row>
        </Container>
        <Container fluid className="challenge">
            <h1>Challenges</h1>
            <Row>
                <Col md={6} xs={12}>
                    <img className="w-100 mt-5 pt-4" src={socket}></img>
                </Col>
                <Col md={6} xs={12}>
                    <p className="challenge-description">I was engaged in doing frontend using React.js and I have encountered some difficulties.</p>
                    <p className="challenge-description">The challenges I faced is using socket.io and storing the token generated in local storage. I did not understand what the token and socket is for for the first time but after a detailed explanation from my mentor, I starting to get it and knew the token generated represent the identity of the users. After receiving some hints from my mentors, I was able to make it work before the end of the day.</p>
                </Col>
            </Row>
        </Container>

        <Container fluid className="learnings p-5">
            <h1>My Learnings</h1>
            <p className="learnings-title">The concept of generating client token as user identity</p>
            <p className="learnings-description">I learnt to generate a specific client token for every users using socket.io and the token is acting as an identity for the specific user. For every token generated, it will be stored in a place called local storage and removed it when the user signed out. </p>
            <p className="learnings-description">I learnt to be always prepared to take up and face any new challenges and improve myself through them.</p>
        </Container>

        <Container fluid className="outcome">
            <Jumbotron className="bg-white">
                <h1>Outcome</h1>
                <p className="outcome-description">
                    Click on the button below to view Live Chatroom website.
                </p>
                <p>
                    <a href="https://jolly-minsky-ea075e.netlify.app" ><Button variant="dark" className="outcome-button">View Project</Button></a>
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

export default LiveChatRoom