import React, { Component } from "react";
import TopBar from "./TopBar";
import ProductCard from "./ProductCard";
import { Container, Row } from "react-bootstrap";
import { casas } from '../datos/products.json';

class Products extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            casas
         }
    }
    render() { 
        const casas = this.state.casas.map((casa,i) =>
        {
            return (
                <ProductCard key={casa.id}
                    id= { casa.id }
                    ubicacion={ casa.ubicacion }
                    descripcion={ casa.descripcion }
                    imagen={casa.imagen}
                >
                </ProductCard>
            );
        });
        return ( 
            <div>
                <TopBar></TopBar>
                <Container fluid="md">
                    <Row>
                      { casas }
                    </Row>
                </Container>
                
            </div>
           
         );
    }
}
 
export default Products;