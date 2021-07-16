import React, { Component } from "react";
import { casas } from '../datos/products.json';
import TopBar from './TopBar';

import { Carousel, Container } from 'react-bootstrap';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            casas
         }
    }
    render() { 

        let traerCasas = this.state.casas;
        // console.log(traerCasas[0]);

        return ( 
            <div>
                <Container fluid="md">
                    <TopBar/>

                    <Carousel>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={require(`../assets/images/${traerCasas[0].imagen}`).default}
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        <h3>Propiedad en {traerCasas[0].ubicacion}</h3>
                        <p>Oferta por tiempo limitado</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={ require(`../assets/images/${traerCasas[1].imagen}`).default}
                        alt="Second slide"
                        />

                        <Carousel.Caption>
                        <h3>Propiedad en {traerCasas[1].ubicacion}</h3>
                        <p>Ieal para una escapada de la gran ciudad</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={ require(`../assets/images/${traerCasas[2].imagen}`).default}
                        alt="Third slide"
                        />

                        <Carousel.Caption>
                        <h3>Propiedad en {traerCasas[3].ubicacion}</h3>
                        <p>Para aprovechar este verano, muy cerca de la playa</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    </Carousel>                
                </Container>
            </div>
         );
    }
}
 
export default Home;