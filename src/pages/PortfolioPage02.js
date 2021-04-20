import  React from 'react';

import Card from '../components/CardPages';
import Row from 'react-bootstrap/Row';
import Hero from '../components/Hero';

import Portfolio_8 from '../assets/images/Portfolio_36.jpg';
import Portfolio_9 from '../assets/images/Portfolio_37.jpg';
import Portfolio_10 from '../assets/images/Portfolio_38.jpg';
import Portfolio_11 from '../assets/images/Portfolio_39.jpg';


import Container from 'react-bootstrap/Container';






class PortfolioPage02 extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'TESTTEST',
                    subTitle: 'The cookbook for developers',
                    imgSrc: Portfolio_8,
                    selected: false
                },
                {
                    id: 1,
                    title: '',
                    subTitle: '',
                    imgSrc: Portfolio_9,
                    link: "/Project02",
                    selected: false
                },
                {
                    id: 2,
                    title: '',
                    subTitle: '',
                    imgSrc: Portfolio_10,
                    link: '/Project03',
                    selected: false
                },
                {
                    id: 3,
                    title: '',
                    subTitle: '',
                    imgSrc: Portfolio_11,
                    link: '/Project04',
                    selected: false
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




    render() {
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

export default PortfolioPage02;