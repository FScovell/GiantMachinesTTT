// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
import { useState } from 'react' 
function TCard({numberOfCell}) {
  const [ image, setImage ] = useState("https://www.tastingtable.com/img/gallery/why-capybara-was-once-considered-a-fish/intro-1662056291.jpg")
  const [ temporaryNumber, setTemporaryNumber ] = useState(0)
  return (
    <div >
      <img src={image} width="30%" height="30%" alt="Lettero" onClick={clicker}></img>
    </div>
  );

  function clicker(){
    console.log(numberOfCell)
    if (temporaryNumber === 0){
      setImage("https://pngimg.com/d/letter_o_PNG52.png")
      setTemporaryNumber(temporaryNumber + 1)
      console.log("I'm an O")
    }
    else if (temporaryNumber === 1){
      setImage("https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/LetterX.svg/1200px-LetterX.svg.png")
      setTemporaryNumber(temporaryNumber + 1)
      console.log("I'm an X")
    }
    else{
      setImage("https://www.tastingtable.com/img/gallery/why-capybara-was-once-considered-a-fish/intro-1662056291.jpg")
      console.log("I'm Nothing")
      setTemporaryNumber(0)
    }
  }
}

export default TCard;