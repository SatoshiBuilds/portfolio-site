import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
//import 'react-awesome-slider/dist/styles.css';

import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import 'react-awesome-slider/dist/styles.css';





function PortfolioPage01(props){
    
        return(
           

            <Container fluid = {true}>
                <Row className = "justify-content-around" >
                        <AwesomeSlider>
                            
                            <div><img src="" /></div>

                        </AwesomeSlider>
                        
                </Row>
            </Container>

            )
        }

export default PortfolioPage01;