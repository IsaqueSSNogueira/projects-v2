
import { AudioContext } from "./AudioContext"
import { useRef } from "react";
/*sounds*/
import soundRefFile from "./../../assets/audio/resetGame/freesound_community-menu-button-89141.mp3"
import soundStartFile from "./../../assets/audio/startGame/floraphonic-cute-level-up-2-189851.mp3";
import winSound from "./../../assets/audio/endGame/win/floraphonic-arcade-ui-18-229517.mp3";
import drawSound from "./../../assets/audio/endGame/draw/freesound_community-negative_beeps-6008.mp3";

const AudioProvider = ({ children }) => {

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


    return(
        <AudioContext.Provider value={{playSoundFunction}}>
            {children}
        </AudioContext.Provider>
    )

}

export default AudioProvider;