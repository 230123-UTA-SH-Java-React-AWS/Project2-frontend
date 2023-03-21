import { BASE_URL, GAME_PORT } from "../../static/defaults";
import axios, {AxiosRequestConfig} from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoadScreen(props: any) {
    // const [openGame, setOpenGame] = useState(false); 
    
   const startGame = () => {
        //axios request with gameID here
        // Extract game ID from URL somehow
        /*const requestConfig: AxiosRequestConfig = {
            baseURL: `http://${BASE_URL}:${GAME_PORT}`,
            headers: {
                "gameId": gameId, // <-- refactor later to extract this property from WHEREVER
                "Content-Type": "application/json"
            }
        }

        const PATH = `/startBlackjackGame`; 

        axios.put<string>(PATH, {}, requestConfig).then((res) => {
            setOpenGame(true);
            
        }).catch((err) => console.log(err)); */
        props.setOpenGameToTrue();
    } 
    
    return (
    <div>
        <h1>LOADING GAME...</h1>
        {/* Conditionally render this so only host player sees this */}
        <button type="button" onClick={startGame}>Begin dealing</button>
    </div>)
}

export default LoadScreen;