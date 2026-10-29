
import { MatchContext } from "./MatchContext"
import { AudioContext } from "./../AudioContext/AudioContext";
import { useContext, useState, useEffect } from "react";


const MatchProvider = ({ children }) => {

    const {playSoundFunction} = useContext(AudioContext);


    /*current player*/
    const [currentPlayer, setCurrentPlayer] = useState("X");
    const togglePlayer = () => { setCurrentPlayer(currentPlayer === "O" ? "X" : "O") }

    /*function add player move*/
    const addPlayerMove = (key) => {
        if(currentPlayer === "X"){
            setPlayerXMoves(prev => [...prev, key])
        }
        else if(currentPlayer === "O"){
            setPlayerOMoves(prev => [...prev, key])
        }
        setClickedCells(prev => [...prev, key])
        togglePlayer()

    }



    /*showWinner*/
    const [showGameResultModal, setShowGameResultModal] = useState(false)
    const showWinner = (boolean) => {
        setShowGameResultModal(boolean)
    }


    /*wins for players*/
    const [winsX, setWinsX] = useState(0)
    const [winsO, setWinsO] = useState(0)
    const [winner, setWinner] = useState("") 



    /*players moves*/
    const [playerXMoves, setPlayerXMoves] = useState([])
    const [playerOMoves, setPlayerOMoves] = useState([])
    const [clickedCells, setClickedCells] = useState([])

    /*matchs*/
    const [totalMatches, setTotalMatches] = useState(1)
    const [currentMatch, setCurrentMatch] = useState(0);

    const selectMatchCount = (amount) => {
        setTotalMatches(amount)
    }

    const completeMatch = () => {
        setCurrentMatch(prev => prev + 1)
        resetGame()
    }

    useEffect(() => {
        if(currentMatch === totalMatches){
            if(winsO > winsX) setWinner("O")
            else if(winsX > winsO) setWinner("X")
            else if(winsX === winsO) setWinner("Empate")
            showWinner(true)
            setCurrentMatch(0)
            setWinsO(0)
            setWinsX(0)
        }

    }, [currentMatch])

    /*reset game*/
    const [resetKey, setResetKey] = useState(0)
    const resetGame = () => { 
        setPlayerOMoves([])
        setPlayerXMoves([])
        setClickedCells([])
        setResetKey(prev => prev + 1)
        playSoundFunction("reset")
    }
    


    return(
        <MatchContext.Provider value={{clickedCells, currentPlayer, resetKey, togglePlayer, addPlayerMove, resetGame, playerXMoves, playerOMoves, winsX, winsO, setWinsX, setWinsO, completeMatch, showGameResultModal, showWinner,  winner, selectMatchCount, currentMatch, totalMatches }}>
            {children}
        </MatchContext.Provider>
    )
}


export default MatchProvider;