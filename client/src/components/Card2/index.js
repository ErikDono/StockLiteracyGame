import React from 'react';
import {
    Card, Button, CardHeader, CardFooter, CardBody,
    CardTitle, CardText
} from 'reactstrap';
import TrashBtn from "../TrashBtn";
import "./style.css";


const Card2 = (props) => {
    return (
        <div>
            <Card className="card2">
                <CardHeader>Header</CardHeader>
                <CardBody>
                    <CardTitle>Special Title Treatment</CardTitle>
                    <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                </CardBody>
            </Card>
        </div>
    );
};

export default Card2;