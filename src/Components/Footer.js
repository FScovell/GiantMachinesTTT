import { useState, useEffect } from 'react' 
function Footer({winner}) {
    const [ currentWinner, setCurrentWinner ] = useState("No current winner")
    useEffect(()=>{
        if(winner){
            console.log(winner)
            setCurrentWinner(winner)
        }
        else{
            console.log("waiting for a first move")
        }
    },[winner])
    return(
        <div>
            <h1>Freddy's Playground Tic-Tac-Toe Game </h1>
            <h1>The winner is... {currentWinner}!</h1>
        </div>
    )
}
export default Footer