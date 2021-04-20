import  React from 'react';

import Card from '../components/CardPages';
import Row from 'react-bootstrap/Row';
import Hero from '../components/Hero';


import Portfolio_10 from '../assets/images/Energy-03.jpg';
import Portfolio_11 from '../assets/images/Energy-05.jpg';
import Portfolio_12 from '../assets/images/Energy-06.jpg';
import Portfolio_13 from '../assets/images/Energy-09.jpg';
import Portfolio_14 from '../assets/images/Energy-11.jpg';
import Portfolio_15 from '../assets/images/Energy-12.jpg';
import Portfolio_16 from '../assets/images/Energy-13.jpg';
import Portfolio_17 from '../assets/images/Energy-14.jpg';

import Container from 'react-bootstrap/Container';






class PortfolioPage01 extends React.Component{
    
    constructor(props) {
        super(props);
        this.state = {
            items: [



                {
                    id: 3,
                    title: '',
                    subTitle: '',
                    imgSrc: Portfolio_11,
                },
                {
                    id: 4,
                    title: '',
                    subTitle: '',
                    imgSrc: Portfolio_12,
                },
                {
                    id: 5,
                    title: '',
                    subTitle: '',
                    imgSrc: Portfolio_13,
                },
                {
                    id: 9,
                    title: '',
                    subTitle: '',
                    imgSrc: Portfolio_17,
                },
                {
                    id: 6,
                    title: '',
                    subTitle: '',
                    imgSrc: Portfolio_14,
                },
                {
                    id: 7,
                    title: '',
                    subTitle: '',
                    imgSrc: Portfolio_15,
                },
                {
                    id: 11,
                    title: '',
                    subTitle: '',
                },
                {
                    id: 10,
                    title: '',
                    subTitle: '',
    
                },
                {
                    id: 8,
                    title: '',
                    subTitle: '',
                    imgSrc: Portfolio_16,
                },
                {
                    id: 8,
                    title: '',
                    subTitle: '',
                    imgSrc: Portfolio_10,
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

export default PortfolioPage01;