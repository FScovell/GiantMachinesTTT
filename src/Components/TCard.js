import { useState } from 'react' 
function TCard({numberOfCell, whatAmI}) {
  const [ image, setImage ] = useState("https://www.tastingtable.com/img/gallery/why-capybara-was-once-considered-a-fish/intro-1662056291.jpg")
  const [ temporaryNumber, setTemporaryNumber ] = useState(2)
  return (
    <div >
      <img src={image} width="30%" height="30%" alt="Lettero" onClick={clicker}></img>
    </div>
  )

  function clicker(){

    if (temporaryNumber === 2){
      setImage("https://pngimg.com/d/letter_o_PNG52.png")
      whatAmI(numberOfCell, temporaryNumber)
      setTemporaryNumber(temporaryNumber - 1)
    }
    else if (temporaryNumber === 1){
      setImage("https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/LetterX.svg/1200px-LetterX.svg.png")
      whatAmI(numberOfCell, temporaryNumber)
      setTemporaryNumber(temporaryNumber - 1)
    }
    else{
      setImage("https://www.tastingtable.com/img/gallery/why-capybara-was-once-considered-a-fish/intro-1662056291.jpg")
      whatAmI(numberOfCell, temporaryNumber)
      setTemporaryNumber(2)
    }
  }
}

export default TCard