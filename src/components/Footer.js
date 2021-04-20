  
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer() {

    return(
        <footer className="mt-5">
            <Container fluid={true}>
                <Row className = "border-top justify-content-between p-3">
                    <Col className="p-0" md={2} sm={12}>
                        <div>Web Presence:</div>
                    </Col>

                    <Col className="p-0" md={2} sm={12}>
                        <div><a href="https://www.facebook.com/michael.bat.7" className="footer-text">Facebook</a></div>
                        <div><a href="https://www.linkedin.com/in/michael-b-280880101" className="footer-text" >LinkedIn</a></div>
                    </Col>

                    <Col className="p-0" md={2} sm={12}>
                        <div><a href="https://www.instagram.com/parameetarts" className="footer-text" >Instagram</a></div>
                        <div><a href="https://github.com/MichaelBat" className="footer-text" >Github</a></div>
                    </Col>

                    <Col className="p-0" md={2} sm={12}>
                        <div><a href="https://issuu.com/michaelbatelka/docs/portfolio" className="footer-text" >ISSUU</a></div>
                        <div><a href="https://www.youtube.com/channel/UCr4dzPn68DCvHU54QCT3Zsg" className="footer-text" >Youtube</a></div>
                    </Col>


                    <Col className = "p-0 d-flex justify-content-end" md={3}>
                        This site was made by Michael Batelka
                    </Col>

                </Row>
            </Container>
        </footer>
    );

}

export default Footer;