import React from 'react';
import { Container, Row, Col, ListGroup, ListGroupItem, Badge } from 'reactstrap';
import "./style.css";
// import TrashBtn from "../TrashBtn";

function StockList(props) {
    console.log(props);
    return (

        <Col className="scrollable">
            <ListGroup className="flex-column nav">
                {props.stocks.map(stock => (
                    <ListGroupItem key={stock.symbol} className="justify-content-between">{stock.symbol}  <Badge pill>Btn</Badge></ListGroupItem>
                ))}

            </ListGroup>
        </Col >

    );
}

export default StockList;
