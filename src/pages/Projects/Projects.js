import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import HomebodyCooks from '../../images/HomebodyCooks.png';
import Nextagram1 from '../../images/Nextagram1.png';
import LiveChatRoom1 from '../../images/LiveChatRoom1.png';
import InventoryManagement from '../../images/InventoryManagement.png';
import {Link} from 'react-router-dom'
import './Project.css'


const Projects = () => {
    return (
        <Container fluid className="projects">
            <Row className="justify-content-around">
                <Col md={6} xs={12}>
                    <div className="projects-title">
                    <img className="w-100 mb-5" src={HomebodyCooks}></img>
                    <a href="/projects/HomebodyCooks"><div className="projects-div">
                        <p className="projects-name">Homebody Cooks</p>
                        </div></a>
                    </div>
                    
                </Col>
                <Col md={6} xs={12}>
                    <div className="projects-title">
                        <img className="w-100 mb-5" src={Nextagram1}></img>
                        <a href="/projects/Nextagram"><div className="projects-div">
                            <p className="projects-name">Nextagram</p>
                        </div></a>
                    </div>
                    
                </Col>
                <Col md={6} xs={12}>
                    <div className="projects-title">
                        <img className="w-100 mb-5" src={LiveChatRoom1}></img>
                        <a href="/projects/LiveChatRoom"><div className="projects-div">
                            <p className="projects-name">Live Chatroom</p>
                        </div></a>
                    </div>
                    
                </Col>
                <Col md={6} xs={12}>
                    <div className="projects-title">
                        <img className="w-100 mb-5" src={InventoryManagement}></img>
                        <a href= "/projects/Inventory"><div className="projects-div">
                            <p className="projects-name">Inventory Management System</p>
                        </div></a>
                    </div>
                    
                </Col>
            </Row>
        </Container>
    )
}

export default Projects