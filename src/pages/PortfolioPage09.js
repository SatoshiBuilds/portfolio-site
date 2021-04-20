import  React from 'react';

import Card from '../components/CardPages';
import Row from 'react-bootstrap/Row';
import Hero from '../components/Hero';

import Portfolio_8 from '../assets/images/Portfolio_16.jpg';
import Portfolio_9 from '../assets/images/Portfolio_17.jpg';
import Portfolio_10 from '../assets/images/Portfolio_18.jpg';
import Portfolio_11 from '../assets/images/Portfolio_19.jpg';


import Container from 'react-bootstrap/Container';






class PortfolioPage09 extends React.Component{
    
    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'TESTTEST',
                    subTitle: 'The cookbook for developers',
                    imgSrc: Portfolio_8
 
                },
                {
                    id: 1,
                    title: 'Portfolio Thesis',
                    subTitle: '9018',
                    imgSrc: Portfolio_9,

                },
                {
                    id: 2,
                    title: 'Evverest',
                    subTitle: 'A social network for developers',
                    imgSrc: Portfolio_10,

                },
                {
                    id: 3,
                    title: 'I\'mobility',
                    subTitle: 'Urbanistic Project that was made in groups of two.',
                    imgSrc: Portfolio_11,
                },


            ]
        }
    }

    handleCardClick = (id,card) => {
        console.log(id)
        let items=[...this.state.items];

        /*items[id].selected = items[id].selected ? false : true;    */  //commenting out for NOT clicking it

        items.forEach(item => {
            if (item.id !== id) {
                item.selected = false;

            }

        });
        this.setState({
            items
        });

    }

    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click = {(e => this.handleCardClick(item.id,e))} key ={item.id} />
        })
    }




    render(props) {
        return(
           
            
            <Container fluid = {true}>
                <Hero title={this.props.title} subTitle={this.props.subTitle} text={this.props.text}></Hero>
                
                <Row className = "justify-content-around" >
                    {this.makeItems(this.state.items)}


                </Row>
            </Container>


        );
    }


}

export default PortfolioPage09;