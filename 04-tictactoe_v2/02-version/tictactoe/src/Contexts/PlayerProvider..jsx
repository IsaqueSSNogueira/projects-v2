
import { useEffect, useRef, useState } from "react";
import { PlayerContext } from "./PlayerContext"

/*sounds*/
import soundRefFile from "./../assets/audio/resetGame/freesound_community-menu-button-89141.mp3"
import soundStartFile from "./../assets/audio/startGame/floraphonic-cute-level-up-2-189851.mp3";
import winSound from "./../assets/audio/endGame/win/floraphonic-arcade-ui-18-229517.mp3"
import drawSound from "./../assets/audio/endGame/draw/freesound_community-negative_beeps-6008.mp3"


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
        

    /*sounds*/
    const soundRef = useRef(null)
    const playSoundFunction = (type) => {
      
        if(!soundRef.current){
            soundRef.current = new Audio()
        }

        soundRef.current.volume = 0.5;
        soundRef.current.pause()
        soundRef.current.currentTime = 0;
        soundRef.current.load();

        if (type === "start") {
            soundRef.current.src = soundStartFile;
        }
        else if(type === "reset") {
            soundRef.current.src = soundRefFile;
        }
        else if(type === "win"){
            soundRef.current.src = winSound;
            soundRef.current.volume = 1;
        }
        else if(type === "draw"){
            soundRef.current.src = drawSound;
            soundRef.current.volume = 0.4;
        }

        soundRef.current.play()
    }

    /*reset game*/
     const [resetKey, setResetKey] = useState(0)
     const resetGame = () => { 
        setPlayerOMoves([])
        setPlayerXMoves([])
        setClickedCells([])
        setResetKey(prev => prev + 1)
        playSoundFunction("reset")
    }

    

    const [showGameResultModal, setShowGameResultModal] = useState(false)
    const showWinner = (boolean) => {

        setShowGameResultModal(boolean)
    }
    
 
    /*function determine winner*/
    const determineWinner = (isXWinner, isOWinner) => {

        if(isXWinner){
            setWinsX(prev => prev + 1)
            completeMatch()
        }
        else if(isOWinner){
            setWinsO(prev => prev + 1)
            completeMatch()
        }
        else if(clickedCells.length >= 9){
            completeMatch()
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
        <PlayerContext.Provider value={{ currentPlayer, togglePlayer, addPlayerMove, resetKey, resetGame, winsX, winsO, showGameResultModal, showWinner, winner, playSoundFunction, selectMatchCount, currentMatch, totalMatches }}>
            {children}
        </PlayerContext.Provider>
    )
}