import React from 'react';
import Hero from '../components/Hero'
import Container from 'react-bootstrap/Container';

function AboutPage(props){
    
    return(
    <div>
        <Hero title ={props.title}  />
            <Container>
            <head>
            <script data-ad-client="ca-pub-2450703975973952" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script></head>
                    <p>My name is Michael Matej Batelka test.</p>
                    <p>I am a German architecture student and highly interested in internationalism and self development.</p>
                    <p>I have an interest in a variety of topics in architecture, mainly in concept and visualization. I am also generally curious in continuing to learn about the world and other cultures, as well as to strive to be the best version of myself. I always try to put myself into difficult situations, in order to maximize my own discomfort. As a result, it is much easier stand up again, after something failed or didn’t reach my expectations.</p> 
                    <p>On top of that, the live changing opportunities that are given by that are truly grateful.</p>
                    <p>Given that, I look forward to continue to develop myself and increase my ability to learn new things, as well as being open minded about every topic that is offered to me.</p>
                    <p>In my free time, I liked to make <a href="https://www.youtube.com/channel/UCr4dzPn68DCvHU54QCT3Zsg" target="_blank" rel="noopener noreferrer" >youtube videos</a> about Grasshopper and how it works</p>
                    <p>There is also a PDF Version of my Portfolio <a href="https://issuu.com/michaelbatelka/docs/portfolio" target="_blank" rel="noopener noreferrer" >here</a></p>
                


            </Container>

        

    </div>

    )
}

export default AboutPage;