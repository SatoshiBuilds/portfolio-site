import  React from 'react';

import Card from '../components/Card';
import Row from 'react-bootstrap/Row';

import Container from 'react-bootstrap/Container';

import picture_1 from '../assets/images/Gent-00.jpg';
import picture_2 from '../assets/images/RersponsibleObject.jpg'
import picture_3 from '../assets/images/ConceptualLiving.jpg';
import picture_4 from '../assets/images/Aedes.jpg';
import picture_5 from '../assets/images/Bachelor.jpg';
import picture_6 from '../assets/images/AirTrafficControl.jpg';
import picture_7 from '../assets/images/Brewery.jpg';
import picture_8 from '../assets/images/SP.jpg';
import picture_9 from '../assets/images/MAHAS.jpg';
import picture_10 from '../assets/images/Lego.jpg';



class Carousel extends React.Component{
    
    constructor(props) {
        super(props);
        this.state = {
            items: [
                
                {
                    id: 0,
                    title: "Energy Question",
                    subTitle: "2020, Ghent, Belgium",
                    imgSrc: picture_1,
                    link: './Project01',
                    selected: false,
                },                {
                    id: 1,
                    title: 'Responsible Object',
                    subTitle: '2019, Berlin, Germany',
                    imgSrc: picture_2,
                    link:  './Project02',  
                    selected: false
                },
                {
                    id: 2,
                    title: 'Conceptual Living',
                    subTitle: '2019, Braunschweig, Germany',
                    imgSrc: picture_3,
                    link:  './Project03',  
                    selected: false
                },
                {
                    id: 3,
                    title: "AEDES Summer School",
                    subTitle: "2018, Berlin, Germany",
                    imgSrc: picture_4,
                    link: './Project04',
                    selected: false,
                    
                },
                {
                    id: 4,
                    title: "Bachelor Thesis",
                    subTitle: "2018, Braunschweig, Germany",
                    imgSrc: picture_5,
                    link: './Project05',
                    selected: false,
                    
                },
                {
                    id: 5,
                    title: "Air Traffic Control Tower",
                    subTitle: "2017, Prague, Czech Republic",
                    imgSrc: picture_6,
                    link: './Project06',
                    selected: false
                },
                {
                    id: 6,
                    title: 'Brewery Tower',
                    subTitle: '2017, Humpolec, Czech Republic',
                    imgSrc: picture_7,
                    link:  './Project07',  
                    selected: false
                },
                {
                    id: 7,
                    title: 'I\'m Mobility',
                    subTitle: '2016, Braunschweig, Germany',
                    imgSrc: picture_8,
                    link: './Project08',
                    selected: false
                },
                {
                    id: 8,
                    title: 'Maha\'s House',
                    subTitle: '2014, Braunschweig, Germany',
                    imgSrc: picture_9,
                    link: "Project09",
                    selected: false
                },
                {
                    id: 9,
                    title: 'Parametric Art',
                    subTitle: '2017 - ongoing',
                    imgSrc: picture_10,
                    link: '/Project10',
                    selected: false
                },

            ]
        }
    }
    

    handleCardClick = (id,card) => {
      
        let items=[...this.state.items];

        items[id].selected = items[id].selected ? false : true;

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
                <Row className = "justify-content-around" >
                    {this.makeItems(this.state.items)}
                    

                </Row>
            </Container>


        );
    }


}

export default Carousel;