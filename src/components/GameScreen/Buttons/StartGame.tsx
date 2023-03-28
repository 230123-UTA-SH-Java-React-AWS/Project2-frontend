import { useEffect, useState } from "react";

interface ButtonProps {
    isHost: boolean | undefined,
    handleGameStart: () => void
}

function StartGame({isHost, handleGameStart}:ButtonProps) {

    return (
        <div className="start-game">
            { !isHost
                ? <div className="start-message"><h1>Waiting for Host to Start...</h1></div>
                : <button className="start-btn game-button" onClick={handleGameStart}>Start Game</button>
            }
        </div>
    )
}

export default StartGame;