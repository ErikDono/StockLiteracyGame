import React, { useState } from 'react';
import { Col, ListGroup, ListGroupItem, Button } from 'reactstrap';
import "./style.css";
import API from '../../utils/API';


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



  // CSS for shadow effect on card
  const well = {
    boxShadow: "3px 3px 3px #9E9E9E"
  };

  // CSS for list header
  const listHeader = {
    fontWeight: "550",
    textAlign: "center",
    fontSize: "15px",
    backgroundColor: "opaque"
  };

  const listHeaderP = {
    fontWeight: "550",
    textAlign: "center",
    fontSize: "12px",
    textStyle: "italic",
    backgroundColor: "opaque"
  };

  const submitStocks = (event) => {
    event.preventDefault();
    const stockIds = selectStock.map((stock) => ({ stock }))
    API.submitStocks(stockIds)
      .then((res) => console.log(res.data));
  }



  const clearStocks = (event) => {
    event.preventDefault();
    setSelectStock([]);

    API.resetStocks()
      .then((res) => console.log(res.data));
  }




  return (
    <>
      <h2 style={listHeader}>STOCK LIST</h2>
      <p style={listHeaderP}>Do your research, pick 5, and submit!</p>
      <Col className="scrollable">
        <ListGroup className="flex-column nav" style={well}>
          {props.stocks.map((stock) => (
            <>
              <ListGroupItem key={stock} className="justify-content-between">
                {stock.symbol}
                <Button
                  id="buyBtn"
                  className="float-right"
                  outline color="success"
                  onClick={() => onCheckboxBtnClick(stock)}
                  active={selectStock.includes(stock)}
                >
                  Buy
                </Button>
              </ListGroupItem>
            </>
          ))}
        </ListGroup>
      </Col>
      <Button id="submitBtn" onClick={submitStocks} className="float" outline color="success">Submit</Button>
      <Button id="resetBtn" onClick={clearStocks} className="float"
        outline color="secondary">Reset</Button>
    </>
  );

}


export default StockList;
