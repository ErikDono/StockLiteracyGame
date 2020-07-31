import React, {useState} from 'react';
import { Container, Row, Col, ListGroup, ListGroupItem, Badge, Button } from 'reactstrap';
import "./style.css";
// import TrashBtn from "../TrashBtn";

function StockList(props) {
     const [selectStock, setSelectStock] = useState([]);

     const onCheckboxBtnClick = (selected) => {
       const index = selectStock.indexOf(selected);
       if (index < 0) {
         selectStock.push(selected);
       } else {
         selectStock.splice(index, 1);
       }
       setSelectStock([...selectStock]);
       
     };
    console.log(selectStock);
    console.log(props);
    return (
      <Col className="scrollable">
        <ListGroup className="flex-column nav">
          {props.stocks.map((stock) => (
            <ListGroupItem key={stock} className="justify-content-between">
                  {stock.symbol}  
              <p></p>
              <Button
                outline
                color="success"
                onClick={() => onCheckboxBtnClick(stock)}
                active={selectStock.includes(stock)}
              >
                Buy
              </Button>
            </ListGroupItem>
          ))}
        </ListGroup>
      </Col>
    );

}


export default StockList;
