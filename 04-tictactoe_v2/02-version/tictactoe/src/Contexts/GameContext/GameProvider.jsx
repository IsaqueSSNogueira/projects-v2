
import { useContext, useEffect } from "react";
import { GameContext } from "./GameContext"
import { MatchContext } from "../MatchContext/MatchContext";


const GameProvider = ({ children }) => {


    const {clickedCells, playerXMoves, playerOMoves, setWinsX, setWinsO, completeMatch} = useContext(MatchContext)

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

        determineWinner(isXWinner, isOWinner)
    }

    /*check winner, after addPlayerMove change clickedCells*/
    useEffect(() => {
        checkWinner()
    }, [clickedCells])


    return(
        <GameContext.Provider value={{checkWinner}}>
            {children}
        </GameContext.Provider>
    )
}


export default GameProvider;