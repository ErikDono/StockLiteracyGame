import React from "react";
import Nav from "../components/Nav";
import { Col, Row, Container } from "../components/Grid";


// import my new components:
import StockList from "../components/StockList";
import Card1 from "../components/Card1";
import Card2 from "../components/Card2";




function Main() {

    return (
        <div >
            <Nav />
            <br></br>
            <Container>
                <Row>
                    <Col size="lg-3 md-12 sm-12 xs-12">
                        <StockList />
                    </Col>
                    <Col size="lg-9 md-12 sm-12 xs-12">
                        <Card1 />
                        <Card2 />
                    </Col>
                </Row>
            </Container >


        </div>

    );
}


export default Main;
