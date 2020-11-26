import React from 'react'
import Resume from '../../images/Resume.pdf'
import Container from 'react-bootstrap/Container'
import './Resume.css'

const MyResume = () => {
    return (
        <Container fluid className="resume">
            <embed src={Resume} type="application/pdf" width="100%" height="100%"/>
        </Container>
        
    )
}

export default MyResume