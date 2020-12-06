import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import myself1 from '../../images/myself1.png';
import HomebodyCooks from '../../images/HomebodyCooks.png';
import Nextagram1 from '../../images/Nextagram1.png';
import LiveChatRoom1 from '../../images/LiveChatRoom1.png';
import InventoryManagement from '../../images/InventoryManagement.png'
import Button from 'react-bootstrap/Button';
import ImageFadeIn from 'react-image-fade-in';
import Card from 'react-bootstrap/Card';
import peppermill from '../../images/peppermill.jpg';
import yyc1 from '../../images/yyc1.png';
import kw from '../../images/kw.png';
import GitHub from '../../images/GitHub.png';
import bootstrap from '../../images/bootstrap.jpg';
import HTML from '../../images/HTML.png';
import vscode from '../../images/vscode.png';
import react from '../../images/react1.png';
import css from '../../images/css.png';
import js from '../../images/js.png';
import python1 from '../../images/python1.png';
import flask from '../../images/flask.png';
import sql from '../../images/sql.png';
import aws from '../../images/aws.png';
import braintree from '../../images/braintree.png';
import mailgun from '../../images/mailgun.png';
import heroku from '../../images/heroku.jpg';
import netlify from '../../images/netlify.png';
import {SocialIcon} from 'react-social-icons';
import {ChevronDown, Mouse} from 'react-bootstrap-icons'
import hardworking from '../../images/hard-working.png'
import teamwork from '../../images/teamwork.jpg'
import fullstack from '../../images/fullstack.png'
import knowledge from '../../images/knowledge.png'
import {Link} from 'react-scroll'
import {animateScroll as scroll} from 'react-scroll'
import './Homepage.css'

const Homepage = () => {
    return (
        <>
        <Container fluid className="section pb-4" id="header" style= {{
            backgroundImage : `url(https://preview.colorlib.com/theme/ronin/img/banner/home-banner.jpg)`,
        }}>
            <Row className="justify-content-center">
                <Col lg={5} md={5} s={12} xs={12} className="pl-5 text-center">
                    <ImageFadeIn opacityTransition='3' className="profile-image" src={myself1} alt=""></ImageFadeIn>
                </Col>
                <Col lg ={5} md={5} s={12} xs={12}>
                    <div className="profile">
                        <p className="hello">Hello there, My name is</p>
                        <h1 className="name">Ong Min Siang</h1>
                        <p className="description text-justify">A fresh graduate of Bachelor's Degree of Accounting and Finance from Sunway University and Full Stack Coding Class from Next Academy </p>
                        <p className="description text-justify">I have learnt 8 web development languages and framework in 10 weeks of the Full Stack Coding Class. </p>
                        <p className="description text-justify">Currently I am looking for a position of Full Stack Developer</p>
                    </div>
                    
                </Col>
                
            </Row>
            <Link to="about-me" smooth={true} duration={100} delay={0}><Row className="arrow-row">
                <p className="arrow-p">Learn more about me</p>
               <ChevronDown className="arrow-down" fill="black" height="20" width="20"/>
            </Row></Link>
        </Container>
        <Container fluid className="about-me-title" id="about-me">
            <h2 className="about-me">About Me</h2>
            <Row className="about-me-row"> 
                <Col lg={3} md={3} xs={12}>
                    <img className="w-100" src={hardworking} alt=""></img>
                    <p className="about-me-description">I am a hardworking and highly motivated learner with a passion of learning different web development language and framework. I am also strongly interested in people, culture and diversity.</p>
                </Col>
                <Col lg={3} md={3} xs={12}>
                    <img className="w-100" src={teamwork} alt=""></img>
                    <p className="about-me-description">I enjoy working with people and solving problems together and with a great interpersonal skills makes me a great team player. Also, as a proactive learner, I always keep myself up to date with the latest knowledge and updates in tools, software, languages and framework.</p>
                </Col>
                <Col lg={3} md={3} xs={12}>
                    <img className="w-100" src={fullstack} alt=""></img>
                    <p className="about-me-description">I have records and experiences in delivering both frontend and backend projects using all languages and framework learned. I have completed 5 web applications includes Homebody Cooks, 2 Nextagrams, Live Chatroom and Inventory Management System.</p>
                </Col>
                <Col lg={3} md={3} xs={12}>
                    <img className="w-100" src={knowledge} alt=""></img>
                    <p className="about-me-description">Aside from the completed projects, I believe that with my accounting knowledge and my skills with the language and framework, it would be very useful for certain companies.</p>
                </Col>
            </Row>
        </Container>
        <Container fluid className="my-project">
            <h1>My Project</h1>
            <p className="mt-5 my-project-header">A detailed view of the output of my project throughout the Coding Class</p>
            <Row className="justify-content-center">
                <Col lg={6} md={6} sm={12} xs={12} className="mt-5">
                    <Card className="card">
                        <Card.Img className="card-image" variant="top" src={HomebodyCooks} alt="" />
                        <Card.Body>
                            <Card.Title className="card-title">Homebody Cooks</Card.Title>
                            <Card.Text className="card-text">
                            Created on light of covid-19 pandemic. Deliver ingredients to people's doorstep for them to cook at home.
                            </Card.Text>
                            <a href="/projects/HomebodyCooks"><Button variant="dark" className="card-button">View Project</Button></a>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={6} md={6} sm={12} xs={12} className="mt-5">
                    <Card className="card">
                        <Card.Img className="card-image" variant="top" src={Nextagram1} alt=""/>
                        <Card.Body>
                            <Card.Title className="card-title">Nextagram</Card.Title>
                            <Card.Text className="card-text">
                            Recreate the web application of Instagram twice with one using React.js and other using Python, Flask, SQL, HTML and CSS.
                            </Card.Text>
                            <a href="/projects/Nextagram"><Button variant="dark" className="card-button">View Project</Button></a>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={6} md={6} sm={12} xs={12} className="mt-5 mb-5">
                    <Card className="card">
                        <Card.Img className="card-image" variant="top" src={LiveChatRoom1} alt=""/>
                        <Card.Body>
                            <Card.Title className="card-title">Live Chatroom</Card.Title>
                            <Card.Text className="card-text">
                            Created this web application using React.js to allow online users to chat together.
                            </Card.Text>
                            <a href="/projects/LiveChatRoom"><Button variant="dark" className="card-button">View Project</Button></a>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={6} md={6} sm={12} xs={12} className="mt-5 mb-5">
                    <Card className="card">
                        <Card.Img className="card-image" variant="top" src={InventoryManagement} alt=""/>
                        <Card.Body className="card-body">
                            <Card.Title className="card-title">Inventory Management System</Card.Title>
                            <Card.Text className="card-text">
                            My first exercise when learning Python, Flask and SQL. It is a system to help company to manage their inventory.
                            </Card.Text>
                            <a href="/projects/Inventory"><Button variant="dark" className="card-button">View Project</Button></a>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
        <Container fluid className="working-experience">
            <h1>Previous Workplace</h1>
            <Row className="justify-content-around">
                <Col lg={4} md={4} sm={12} xs={12} className="mt-5 mb-5">
                    <div className="working">
                        <img src={peppermill} className="w-100 working-image" alt=""></img>
                        <div className="working-div">
                            <p className="working-name">Peppermill Casino</p>
                        </div>
                    </div>
                    <div className="mt-4">
                        <p className="working-description">I work for 2 jobs at the same time which is pastry cook for day shift and houseman for swing shift. Both of the jobs requires a lot of teamwork. During the day, I need to collaborate with other pastry cooks and work as a team to prepare and complete the daily order from other restaurants in Peppermill, while during night, I need to work with my manager by communicating using a walkie-talkie and ipod to finish every requests from the customers. </p>
                    </div>
                    
                </Col>
                <Col lg={4} md={4} sm={12} xs={12} className="mt-5 mb-5">
                    <div className="working">
                        <img src={yyc1} className="w-100 working-image" alt=""></img>
                        <div className="working-div">
                            <p className="working-name">YYC & Co</p>
                        </div>
                    </div>
                    <div className="mt-4">
                        <p className="working-description">Work as an accounting intern. My main responsibility is to assist the seniors to in completing full set accounts and consulting clients regarding their income tax information and help completing their income tax computation.</p>
                    </div>
                </Col>
                <Col lg={4} md={4} sm={12} xs={12} className="mt-5 mb-5">
                    <div className="working">
                        <img src={kw} className="w-100 working-image" alt=""></img>
                        <div className="working-div">
                            <p className="working-name">Kah Wah</p>
                        </div>
                    </div>
                    <div className="mt-4">
                        <p className="working-description">My position is a Warehouse Worker and Delivery Man. My main duty is to rearrange the stock and helping to deliver stocks to another warehouse. Sometimes, I will help them to deliver products to customers and consult with customers regarding their next purchase.</p>
                    </div>
                    
                </Col>
            </Row>
        </Container>
        <Container fluid className="professional-skills">
            <h1 className="professional-title">Professional Skills</h1>
            <Row className="mt-5 justify-content-center">
                
                <Col lg={2} md={2} xs={12} className="m-auto text-center professional">
                    <img className="mb-5" src={HTML} alt=""></img>
                    <div className="professional-div">
                        <p className="professional-name">HTML</p>
                    </div>
                </Col>
                <Col lg={2} md={2} xs ={12} className="m-auto text-center professional">
                    <img className="mb-5" src={css} alt=""></img>
                    <div className="professional-div">
                        <p className="professional-name">CSS</p>
                    </div>
                </Col>
                <Col lg={2} md={2} xs ={12} className="m-auto text-center professional">
                    <img className="mb-5" src={js} alt=""></img>
                    <div className="professional-div">
                        <p className="professional-name">Javascript</p>
                    </div>
                </Col>
                <Col lg={2} md={2} xs ={12} className="m-auto text-center professional">
                    <img className="mb-5" src={bootstrap} alt=""></img> 
                    <div className="professional-div">
                        <p className="professional-name">Bootstrap</p>
                    </div>
                </Col>
                <Col lg={2} md={2} xs ={12} className="m-auto text-center professional">
                    <img className="mb-5" src={react} alt=""></img>
                    <div className="professional-div">
                        <p className="professional-name">React</p>
                    </div>   
                </Col>
            </Row>
            <Row className="mt-5 justify-content-center">
                <Col lg={2} md={2} xs ={12} className="m-auto text-center professional">
                    <img className="mb-5" src={python1} alt=""></img>
                    <div className="professional-div">
                        <p className="professional-name">Python</p>
                    </div>
                </Col>
                <Col lg={2} md={2} xs ={12} className="m-auto text-center professional">
                    <img className="mb-5" src={flask} alt=""></img>
                    <div className="professional-div">
                        <p className="professional-name">Flask</p>
                    </div>
                </Col>
                <Col lg={2} md={2} xs ={12} className="m-auto text-center professional">
                    <img className="mb-5" src={sql} alt=""></img>
                    <div className="professional-div">
                        <p className="professional-name">SQL</p>
                    </div>
                </Col>
                <Col lg={2} md={2} xs ={12}className="m-auto text-center professional">
                    <img className="mb-5" src={vscode} alt=""></img>
                    <div className="professional-div">
                        <p className="professional-name">Visual Studio Code</p>
                    </div>
                </Col>
                <Col lg={2} md={2} xs ={12} className="m-auto text-center professional">
                    <img className="mb-5" src={GitHub} alt=""></img>
                    <div className="professional-div">
                        <p className="professional-name">Github</p>
                    </div>   
                </Col>
            </Row>
            <Row className="mt-5 justify-content-center">
                <Col lg={2} md={2} xs ={12} className="m-auto text-center professional">
                    <img className="mb-5" src={aws} alt=""></img>
                    <div className="professional-div">
                        <p className="professional-name">Amazon Web Service</p>
                    </div>
                </Col>
                <Col lg={2} md={2} xs ={12} className="m-auto text-center professional">
                    <img className="mb-5" src={braintree} alt=""></img>
                    <div className="professional-div">
                        <p className="professional-name">Braintree</p>
                    </div>
                </Col>
                <Col lg={2} md={2} xs ={12} className="m-auto text-center professional">
                    <img className="mb-5" src={mailgun} alt=""></img>
                    <div className="professional-div">
                        <p className="professional-name">Mailgun</p>
                    </div>
                </Col>
                <Col lg={2} md={2} xs ={12} className="m-auto text-center professional">
                    <img className="mb-5" src={heroku} alt=""></img>
                    <div className="professional-div">
                        <p className="professional-name">Heroku</p>
                    </div>
                </Col>
                <Col lg={2} md={2} xs ={12} className="m-auto text-center professional">
                    <img className="mb-5" src={netlify} alt=""></img>
                    <div className="professional-div">
                        <p className="professional-name">Netlify</p>
                    </div>
                </Col>
            </Row>
        </Container>
        <Container fluid className="footer" id="footer">
            <Row className="footer-row">
                <Col md={7} xs={12} className="footer-text">
                    <p>If you think I am a good fit for your team, lets <b>connect</b> and chat more!</p>
                </Col>
            </Row>
            <Row className="footer-row">
                <SocialIcon className="ml-3 " url="https://www.linkedin.com/in/min-siang-ong-2ba166170/" bgColor="white"></SocialIcon>
                <SocialIcon className="ml-3 " network="mailto" url="mailto:ongminsiang@gmail.com" bgColor="white"></SocialIcon>
                <SocialIcon className="ml-3 " url="https://github.com/minsiang97" bgColor="white"></SocialIcon>
            </Row>
            <Row className="mt-5 scroll-row">
                <Link to = "header" smooth={true} duration={100} delay={0}><div className="scroll-to-top">
                    <p>Back to Top</p>
                    <Mouse className="arrow" fill="white" height="20" width="20"/>
                </div></Link>
            </Row>
        </Container>
        
        </>
    )
}

export default Homepage