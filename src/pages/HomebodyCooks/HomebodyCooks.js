import React from 'react';
import {Link} from 'react-router-dom'
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import HomebodyCooks from '../../images/HomebodyCooks2.png';
import braintreeChallenges from '../../images/braintree-challenges.png'
import peewee from '../../images/peewee.jpg';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import {SocialIcon} from 'react-social-icons'
import './HomebodyCooks.css'

const MyHomebodyCooks = () => {
    return (
        <>
        <Container fluid className="homebody-cooks-title">
            <Row className="justify-content-around">
                <Col md={8} xs={12}>
                    <img className="w-100" src={HomebodyCooks}></img>
                </Col>
            </Row>
            <Row className="justify-content-center mt-3">
                <p className="homebody-cooks">Homebody Cooks</p>
            </Row>
            <Row>
                <Col md={4} xs={12} className="p-5">
                    <h3>Team Member</h3>
                    <ul className="team-name">
                        <li>Ong Min Siang</li>
                        <li>Victor Lim</li>
                    </ul>
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
                    <p className="homebody-cooks-about mt-3">About</p>
                    <p className="homebody-cooks-description mt-5">It is a web application created by me and my teammate, Victor to provide more convenient to the public due to the pandemic of covid-19. This application we created unlike other food delivery apps, we deliver ingredients to people's doorstep according to the meal they choose on our web application. </p>
                    <p className="homebody-cooks-description mt-5">According to the google trend, more and more people are searching for the cooking videos on youtube which hit a 100 points of interest over time which is the highest in these years. Hence, it gives us the idea of creating the app to help reduce the risk of exposing to covid-19. </p>
                </Col>
            </Row>
        </Container>
        <Container fluid className="challenge">
            <h1>Challenges</h1>
            <Row>
                <Col md={6} xs={12}>
                    <img className="w-100 braintree mt-5" src={braintreeChallenges}></img>
                </Col>
                <Col md={6} xs={12}>
                    <p className="challenge-description">We were engaged in doing both frontend and backend and we have encountered a lot of challenges that we have not faced before during Coding Class from Next Academy.</p>
                    <p className="challenge-description">One of the challenges we faced is Braintree. This is the first time we using Braintree in React.js. It is a lot different to get client token than using HTML. Also, it is the first time we are using Braintree for a recurring billing method. But after asking help from mentors, we are able to solve that and proceed with other function.</p>
                </Col>
            </Row>

            <Row className="flex-row-reverse mt-5">
                <Col md={6} xs={12}>
                    <img className="w-100 peewee mt-5" src={peewee}></img>
                </Col>
                <Col md={6} xs={12}>
                    <p className="challenge-description">Another challenges we faced would be selecting queries and getting a list of ingredients from one form and recording it into database. In this web application we are trying to select datas from days ago starting from the start of the week which is Monday. But at last we figured it out by using timedelta, between and date trunc. Nevertheless, it gave us a headache when we are trying to record a list of ingredients ordered to a table. It is our first time encountered this issue and we got it done by looping through the list and record it individually.</p>
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
                    Click on the button below to view Homebody Cooks website.
                </p>
                <p>
                    <a href="https://sleepy-hamilton-280ab8.netlify.app/" ><Button variant="dark" className="outcome-button">View Project</Button></a>
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

export default MyHomebodyCooks