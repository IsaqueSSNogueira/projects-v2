
import { useEffect, useRef, useState } from "react";
import soundResetFile from "./../assets/audio/resetGame/freesound_community-menu-button-89141.mp3"
import { PlayerContext } from "./PlayerContext"


export const PlayerProvider = ({ children }) => {

    /*wins for players*/
    const [winsX, setWinsX] = useState(0)
    const [winsO, setWinsO] = useState(0)
    const [winner, setWinner] = useState("") 

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

    const soundReset = useRef(null)

    const soundResetFunction = () => {
        if(!soundReset.current){
            soundReset.current = new Audio()
        }
        soundReset.current.src = soundResetFile;
        soundReset.current.volume = 0.5;
        soundReset.current.pause()
        soundReset.current.currentTime = 0;
        soundReset.current.play()
    }

    /*reset game*/
     const [resetKey, setResetKey] = useState(0)
     const resetGame = () => { 
        setPlayerOMoves([])
        setPlayerXMoves([])
        setClickedCells([])
        setResetKey(prev => prev + 1)
        soundResetFunction()
    }

    

    const [showGameResultModal, setShowGameResultModal] = useState(false)
    const showWinner = (boolean) => {

        setShowGameResultModal(boolean)
    }
    
 
    /*function determine winner*/
    const determineWinner = (isXWinner, isOWinner) => {

        if(isXWinner){
            setWinsX(prev => prev + 1)
            setWinner("X")
            showWinner(true)
        }
        else if(isOWinner){
            setWinsO(prev => prev + 1)
            setWinner("O")
            showWinner(true)
        }
        else if(clickedCells.length >= 9){
            setWinner("Empate")
            showWinner(true)
        }
        else{
            return;
        }
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
        <PlayerContext.Provider value={{ currentPlayer, togglePlayer, addPlayerMove, resetKey, resetGame, winsX, winsO, showGameResultModal, showWinner, winner }}>
            {children}
        </PlayerContext.Provider>
    )
}