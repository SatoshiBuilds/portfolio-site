import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';
import Carousel from './components/Carousel';


import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';


//my abomination import here
import PortfolioPage01 from './pages/PortfolioPage01';
import PortfolioPage02 from './pages/PortfolioPage02';
import PortfolioPage03 from './pages/PortfolioPage03';
import PortfolioPage04 from './pages/PortfolioPage04';
import PortfolioPage05 from './pages/PortfolioPage05';
import PortfolioPage06 from './pages/PortfolioPage06';
import PortfolioPage07 from './pages/PortfolioPage07';
import PortfolioPage08 from './pages/PortfolioPage08';
import PortfolioPage09 from './pages/PortfolioPage09';
import PortfolioPage10 from './pages/PortfolioPage10';
import PortfolioPage11 from './pages/PortfolioPage11';





import 'react-awesome-slider/dist/custom-animations/cube-animation.css';

import 'react-awesome-slider/dist/styles.css';

<div>hello</div>
var myName = 'Michael Batelka'

class App extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      title: {myName},
      headerLinks: [
        { title: 'Home',path: '/' },
        { title: 'About',path: '/about' },
        { title: 'Contact',path: '/contact' }
      ],
      home: {
        title:'Computational Architect',
        subTitle: 'Projects',
        text: 'Take a look'
      },
      about:{
        title:'About Me'
      },
      contact:{
        title:'Let\'s Talk'
      },
      projects01:{
        title: 'Energy Question',
        subTitle: '2020, Ghent, Belgium',
        text: "When doing my Exchange Semester in Ghent, Belgium, I had the pleasure to work on a topic about Energy Renewables. With a continuous process of how we can survive on this planet with reducing our Output on CO2 and Coal Dependency, this project offers an idea to maximize the value of wind and solar to create a machine that has a self-sustaining multi-functionality. Aiming to be a future proof system, the project is a module system that provides energy to the surrounding areas, as well as giving back spaces and opportunities for citiziens and workers around it. The structures was purely design using mathematically defined borders that are transititoned into a reallife proposal that, though extreme, covers 110% of it's surroundings cities energy usage."
      },
      projects02:{
        title: 'Responsible Object',
        subTitle: '2019, Berlin, Germany',
        text: 'The St. Thomas Church in Berlin, Kreuzberg wanted an exhibition about the wall, as well about the squatting history of its area. We were a large group of ten people that needed to work together on the project in order to maximize our knowledge in the history, bring the best design concepts possible and relate the given material and put them into a presentable form to the church and their visitors. With that in mind, we were focusing on taking as much inspiration from the church itself to translate its language into 3 relatable exhibition modules that interpret the situations in a subjective way, as well as a history time-line, that presents the hard facts about the area and gives the visitors are reason to delve deeper into the existing exhibition. The opening ceremony took place on the comemrate day of the fall of the Berlin wall.'
      },      
      projects03:{
        title: 'Conceptual Living',
        subTitle: '2019, Cologne, Germany',
        text: 'The limestone industry of Germany asked for young students to participate in their competition with using their product of lime stones. With that in mind, the task was to create future living scenarios in regards to the challenges that we are facing in around 20 years from now. In my concept, I tried to fuse the options of blockchain and decentralization with architecture, ownership and renting. The result is an AirBNB like living community, that can rent out or add facilities depending on the needs to each user of the project. While further advancing in the topic, I discovered potential with this idea, that could be used on top of todays contracts. It also helped me to understand the Bitcoin ecosystem better and what it does.'
      },

      projects04:{
        title: "AEDES Summer School",
        subTitle: "2018, Berlin, Germany",
        text : 'From a one week workshop with the UPenn University in Philadelphia, Pennsylvania, the general knowledge about water and its circulation in city has been brought to us. In the following weeks, concepts were designed to facilitate the needs of different problem scenarios with drainage, sewage water, rainwater and human pollution. This project focused on a filtering effect with algae, microbes and air to achieve a natural filtration system that helps with the current pollution of the Spree in Berlin. With small fins in the facade, a natural circulation is given. To be future proof, the cleaning facility is also a museum that helps future generations to be environmentally awake.'
      },
      projects05:{
        title: "Bachelor Thesis",
        subTitle: "2017, Braunschweig, Germany",
        text : 'In the study town of Brunswick, a school that offers teaching for 430 people needed to be constructed. The building site is in the inner circle of the city, near to the “Gaußpark” and directly next to the “Bosselgraben” a smaller side river of the Oker. The basic premise of my project was to achieve a unity through individualism. In that regard, it is important, that certain aspects are available , like room climate, space and light. Those properties were the most focused on in this example. The fusion of classrooms with the floor ways creates a perfect learning area for the children. In that matter, the floor areas bring a multipurpose function with it, and are used not only for a means of transportation, but as well as a learning space.'
      },
      projects06:{
        title: "Air Traffic Control Tower",
        subTitle: "2017, Prague, Czech Republic",
        text: 'During my Erasmus in Prague, we as students were offered an opportunity to work in virtual reality and urbanistic analysis for this project.As a result, with heavy VR usage, we were able to create a digital work and play-through to further help with the design process.Furthermore, an extensive urban analysis helped me to determine the right shape and size of the tower. Any variety forms or data are impossible to pick do correct by hand, so having a script that translates the data for you and creates correct values in visibility, wind, sun, weather and surrounding buildings offers a whole new functionalism.'
      },
      projects07:{
        title: 'Brewery Tower',
        subTitle: '2017, Humpolec, Czech Republic',
        text : 'The beer brewery invited the firm AI-DESIGN to a competition to design a lookout tower for its brewery in Humpolec, Czech Republic. The tower has been created purely with parametric applications, that made it into its final design, it helped making the design process more streamlined, and even though not too much work has been put into the actual 3D modelling, the time efficient parametric approach with Grasshopper helped. It was important to comply with local historic regulations, thus the old and still in use chimney had to be visible and should stand on its own.'
      },
        projects08:{
        title: 'I\'m Mobility',
        subTitle: '2019-ongoing',
        text: 'While working with a lot of different people in the architectural community, students and workers alike, there was a growing demand in conceptual design as well as visualisation and grasshopper recommendation and training. Thus, the amount of things produced for others grew and a smaller section of this portfolio is dedicated to that purpose. All seen contributions were a mixture of the clients work that has been done already and my input to the final product. While some of these renderings had to be made in a couple of hours, certain stylistic is always showing up again, like the people with the silhouettes and renderings that focus only on a specific moment in that situation.While the work was not necessarily my own architectural vision, the end result did teach me useful lessons about materials, textures, viewing angles and general proposition in visualization. On top of that, I also created art piece, that are scattered throughout this portfolio, that show the combination of parametric art and visualization techniques.'
      },
      projects09:{
        title: 'Maha\'s House',
        subTitle: 'A social network for developers',
        text: 'The virtual project had a real client. Her name was Maha Alusi, an artist, that uses wax and candles as her main artistic expression, which are represented as geometrical shapes and natural flows. The building is an exhibition which offers the guest two ways of experiencing the building; one is to use the regular way, the other one would be through the building itself, which brings the option to see the work methods of Maha. The area in front offers enough space for experiments and artistic freedom, where as the masterroom, which is situated above, leaves plenty of space for relaxing. The background area is a multi-floor room, which can be used as exhibition, as well as communal space.'
      },
      projects10:{
        title: "Parametric Art",
        subTitle: "2017 - ongoing, worldwide",
      },
      projects11:{
        title: "AEDES Summer School",
        subTitle: "2018, Berlin, Germany",
      }

    }
  }

// maybe <Navbar.Brand classeName = ""  >Michael Batelka </Navbar.Brand> for the link of brand

  render(){
    return (
      <Router>
        <Container className = "p-2  bg-light" fluid = {true}  >
         

          <Navbar className = "border-bottom " bg = "transparent" expand = "lg">
            
          <Link className="brand-text" to="/">{myName}</Link>


            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/about">About</Link>
                <Link className="nav-link" to="/contact">Contact</Link>
                <Link className="nav-link" to="/contact">Contact</Link>


                
              </Nav>

            </Navbar.Collapse>
          </Navbar>

          <Route path= "/" exact render={() => <HomePage  title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} />  }  />
          <Route path= "/about" render={() => <AboutPage title={this.state.about.title} />}/>
          <Route path= "/contact" render={() => <ContactPage title={this.state.contact.title} />}/>
          <Route path= "/Project01" render={() =>  <PortfolioPage01 title={this.state.projects01.title} subTitle={this.state.projects01.subTitle} text={this.state.projects01.text}/>}/>
          <Route path= "/Project02" render={() =>  <PortfolioPage02 title={this.state.projects02.title} subTitle={this.state.projects02.subTitle} text={this.state.projects02.text} />}/>
          <Route path= "/Project03" render={() =>  <PortfolioPage03 title={this.state.projects03.title} subTitle={this.state.projects03.subTitle} text={this.state.projects03.text} />}/>
          <Route path= "/Project04" render={() =>  <PortfolioPage04 title={this.state.projects04.title} subTitle={this.state.projects04.subTitle} text={this.state.projects04.text} />}/>
          <Route path= "/Project05" render={() =>  <PortfolioPage05 title={this.state.projects05.title} subTitle={this.state.projects05.subTitle} text={this.state.projects05.text} />}/>
          <Route path= "/Project06" render={() =>  <PortfolioPage06 title={this.state.projects06.title} subTitle={this.state.projects06.subTitle} text={this.state.projects06.text} />}/>
          <Route path= "/Project07" render={() =>  <PortfolioPage07 title={this.state.projects07.title} subTitle={this.state.projects07.subTitle} text={this.state.projects07.text} />}/>
          <Route path= "/Project08" render={() =>  <PortfolioPage08 title={this.state.projects08.title} subTitle={this.state.projects08.subTitle} text={this.state.projects08.text} />}/>
          <Route path= "/Project09" render={() =>  <PortfolioPage09 title={this.state.projects09.title} subTitle={this.state.projects09.subTitle} text={this.state.projects09.text} />}/>
          <Route path= "/Project10" render={() =>  <PortfolioPage10 title={this.state.projects10.title} subTitle={this.state.projects10.subTitle} text={this.state.projects10.text} />}/>
          
          
          
          


          <Footer />

        </Container>


      </Router>

    );
  }  
}

export default App;
