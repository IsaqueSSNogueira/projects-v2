
import { useContext, useEffect, useRef, useState } from "react";
import { PlayerContext } from "./PlayerContext"




export const PlayerProvider = ({ children }) => {


    
    return (
        <PlayerContext.Provider value={{  }}>
            {children}
        </PlayerContext.Provider>
    )
}