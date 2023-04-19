import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TCard from './Components/TCard'
import Footer from './Components/Footer'
import './App.css';
import { useState, useEffect } from 'react' 

function App() {
  const [ numberOfCells, setNumberOfCells ] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9])
  const [ amX, setX] = useState([])
  const [ amO, setO] = useState([])
  const [ possibleWinner, setPossibleWinner] = useState()
  const [ winner, setWinner] = useState()
  const winningNumber123 = [1, 2, 3]
  const winningNumber456 = [4, 5, 6]
  const winningNumber789 = [7, 8, 9]
  const winningNumber159 = [1, 5, 9]
  const winningNumber357 = [3, 5, 7]
  const winningNumber147 = [1, 4, 7]
  const winningNumber258 = [2, 5, 8]
  const winningNumber369 = [3, 6, 9]

  useEffect(()=>{
    // console.log(amX, "X's")
    checkWinner(amX)
  },[amX])
  useEffect(()=>{
    checkWinner(amO)
    // console.log(amO, "O's")
  },[amO])

  function whatAmI(square, numberOfLetter) {
    if (numberOfLetter === 1){
      // console.log(square, "is an X.")
      setO(oldValues => {
        return oldValues.filter(o => o !== square)
      })
      setX(amX.concat([square]))
      setPossibleWinner("X")
      // checkWinner(amX)
    }
    else if(numberOfLetter === 2){
      // console.log(square, "is an O.")
      setX(oldValues => {
        return oldValues.filter(x => x !== square)
      })
      setO(amO.concat([square]))
      setPossibleWinner("O")
      // checkWinner(amO)
    }
    else{
      console.log(square, numberOfLetter, "I'm actually a capybara not a letter!")
      setO(oldValues => {
        return oldValues.filter(o => o !== square)
      })
      setPossibleWinner("CAPYBARA")
    }
  }

  function checkWinner(array){
    if(winningNumber123.every(i => array.includes(i))){
      console.log("winner", possibleWinner)
      setWinner(possibleWinner)
    }
    else if(winningNumber456.every(i => array.includes(i))){
      console.log("winner", possibleWinner)
      setWinner(possibleWinner)
    }
    else if(winningNumber789.every(i => array.includes(i))){
      console.log("winner", possibleWinner)
      setWinner(possibleWinner)
    }
    else if(winningNumber159.every(i => array.includes(i))){
      console.log("winner", possibleWinner)
      setWinner(possibleWinner)
    }
    else if(winningNumber357.every(i => array.includes(i))){
      console.log("winner", possibleWinner)
      setWinner(possibleWinner)
    }
    else if(winningNumber147.every(i => array.includes(i))){
      console.log("winner", possibleWinner)
      setWinner(possibleWinner)
    }
    else if(winningNumber258.every(i => array.includes(i))){
      console.log("winner", possibleWinner)
      setWinner(possibleWinner)
    }
    else if(winningNumber369.every(i => array.includes(i))){
      console.log("winner", possibleWinner)
      setWinner(possibleWinner)
    }
    else{
      setWinner("No current winner")
    }
    console.log("check winner firing from ", array)
  }

  return (
    <div className="App">
      <Container>
        <Row justify-content = "center">
        {numberOfCells.map(numberOfCells => {
          if(numberOfCells <= 3){
            return(
              <Col>
                <TCard whatAmI={whatAmI} numberOfCell={numberOfCells}/>
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
                <TCard whatAmI={whatAmI} numberOfCell={numberOfCells}/>
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
                <TCard whatAmI={whatAmI} numberOfCell={numberOfCells}/>
              </Col>
            )
          }
        })}
        </Row>
      </Container>
      <Footer winner={winner}/>
    </div>
  );
}

export default App;
