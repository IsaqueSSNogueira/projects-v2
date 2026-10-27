
import { useEffect, useState } from "react";
import { PlayerContext } from "./PlayerContext"


export const PlayerProvider = ({ children }) => {

    /*wins for players*/
    const [winsX, setWinsX] = useState(0)
    const [winsO, setWinsO] = useState(0)

    /*current player*/
    const [currentPlayer, setCurrentPlayer] = useState("X");
    const togglePlayer = () => { setCurrentPlayer(currentPlayer === "O" ? "X" : "O") }

    const winningCombinations = [
        /*horizontal*/
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        /*vertical*/
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        /*diagonal*/
        [0, 4, 8],
        [2, 4, 6],
    ]

    /*players moves*/
    const [playerXMoves, setPlayerXMoves] = useState([])
    const [playerOMoves, setPlayerOMoves] = useState([])
    const [clickedCells, setClickedCells] = useState([])

    /*reset game*/
     const [resetKey, setResetKey] = useState(0)
     const resetGame = () => { 
        setPlayerOMoves([])
        setPlayerXMoves([])
        setClickedCells([])
        setResetKey(prev => prev + 1)
    }
    
 
    /*function determine winner*/
    const determineWinner = (isXWinner, isOWinner) => {

        if(clickedCells.length > 8){
            alert("Empate")
        }
        else if(isXWinner){
            setWinsX(prev => prev + 1)
            alert("Jogador X venceu")
        }
        else if(isOWinner){
            setWinsO(prev => prev + 1)
            alert("Jogador O venceu")
        }
        else{
            return;
        }
        resetGame()
    }


    /*function check winner*/
    const checkWinner = () => {

        const isXWinner = winningCombinations.some((combination) => {
            return combination.every(item => {
                return playerXMoves.includes(item)
            })
        })

        const isOWinner = winningCombinations.some((combination) => {
            return combination.every(item => {
                return playerOMoves.includes(item)
            })
        })

        togglePlayer()
        determineWinner(isXWinner, isOWinner)
    }


    /*function add player move*/
    const addPlayerMove = (key) => {
        if(currentPlayer === "X"){
            setPlayerXMoves(prev => [...prev, key])
        }
        else if(currentPlayer === "O"){
            setPlayerOMoves(prev => [...prev, key])
        }
        setClickedCells(prev => [...prev, key])
    }

    /*check winner, after addPlayerMove change clickedCells*/
    useEffect(() => {
        checkWinner()
    }, [clickedCells])

    
    return (
        <PlayerContext.Provider value={{ currentPlayer, togglePlayer, addPlayerMove, resetKey, resetGame, winsX, winsO }}>
            {children}
        </PlayerContext.Provider>
    )
}