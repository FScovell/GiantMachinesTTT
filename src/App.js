import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TCard from './Components/TCard'
import './App.css';
import { useState } from 'react' 

function App() {
  const [ numberOfCells, setNumberOfCells ] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9])
  return (
    <div className="App">
      <Container>
        <Row justify-content = "center">
        {numberOfCells.map(numberOfCells => {
          if(numberOfCells <= 3){
            return(
              <Col>
                <TCard numberOfCell={numberOfCells}/>
              </Col>
            )
          }
        })}
        </Row>
        <Row justify-content = "center">
        {numberOfCells.map(numberOfCells => {
          if(numberOfCells > 3 && numberOfCells < 7){
            return(
              <Col>
                <TCard numberOfCell={numberOfCells}/>
              </Col>
            )
          }
        })}
        </Row>
                <Row justify-content = "center">
        {numberOfCells.map(numberOfCells => {
          if(numberOfCells >= 7){
            return(
              <Col>
                <TCard numberOfCell={numberOfCells}/>
              </Col>
            )
          }
        })}
        </Row>
      </Container>
      <p>Freddy's Tic Tac Toe Game</p>
    </div>
  );
}

export default App;
