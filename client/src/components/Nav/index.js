import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import "./style.css";

function Nav() {

  const [modal, setModal] = useState(false);

  const toggle = () => {
    setModal(!modal);
  };


  return (

    <nav className="navbar navbar-expand-lg navbar-dark bg-primary navstyle">
      <a className="navbar-brand" href="/">
        Stock Literacy Game
      </a>
      <a>

        <Button id="gameInstructionsBtn" className="float-right" color="secondary" onClick={toggle}>Game Instructions</Button>
        <Modal isOpen={modal} toggle={toggle} >
          <ModalHeader id="modalHeader" toggle={toggle}><h4>Stock Literacy Game Instructions</h4></ModalHeader>
          <ModalBody>
            <h5>Game Audience:</h5>
            <p>All Ages / All Income levels</p>
            <p>Don't worry this game is free to play; and no real money is involved. Stock purchases are for simulation purposes only.</p>
            <h5>Game Objective:</h5>
            <p>As its name suggests, Stock Literacy Game is intended for education purposes only. The road to wealth requires an individual at any age or income level to take the first step in understanding the stock market.</p>
            <p>The player is given a list of various stocks from all major business sectors of the stock market. The list contains real stocks with their real historical data, from an undisclosed 12-month span in the past. Do your research. Chose the stocks that you believe will yield the highest returns. We have provided plenty of education resources to help make sure choices. Allow the real data to illustrate for you how you would have done in reality.</p>
            <h5>How to win:</h5>
            <p>When it comes to educating yourself you always win! However, if you insist on a metric  - the objective is to beat your/others high score. Who can make the most money?</p>
          </ModalBody>
        </Modal>

      </a>
    </nav>

  );
}

export default Nav;
