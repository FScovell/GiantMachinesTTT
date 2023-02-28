import 'bootstrap/dist/css/bootstrap.min.css';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TCard from './TCard'
import { useState } from 'react' 
function CardMapper({numberOfCells}){
    return(
        numberOfCells.map((numberOfCells) =>
         <Col>
            <TCard numberOfCell={numberOfCells}/>
         </Col>
        )
    )
}

export default CardMapper;