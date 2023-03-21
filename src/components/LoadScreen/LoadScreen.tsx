import { BASE_URL, GAME_PORT } from "../../static/defaults";
import axios, { AxiosRequestConfig } from "axios";
import "./LoadScreen.css";

function LoadScreen(props: any) {
    const startGame = () => {
        // Extract game ID from URL and use that to send in request
        const gameId = window.location.pathname.split("/")[2];
        console.log(gameId);
        const requestConfig: AxiosRequestConfig = {
            baseURL: `http://${BASE_URL}:${GAME_PORT}`,
            headers: {
                "gameId": gameId, 
                "playerId": "", // I don't know how to retrieve this piece of data
                "Content-Type": "application/json"
            }
        }

        const PATH = `/startBlackjackGame`; 

        axios.put<string>(PATH, {}, requestConfig).then((res) => {
            props.setOpenGameToTrue();
            
        }).catch((err) => console.log(err));
        
        // This is a test method when backend is not connected - can be deleted later 
        props.setOpenGameToTrue();
    }

    return (
        <div className="loadscreen">
            <h1 className="load-header">LOADING GAME...</h1>
            {/* Conditionally render this so only host player sees this */}
            
                <button className="load-start-btn" type="button" onClick={startGame}>Begin dealing</button>
            
        </div>)
}

export default LoadScreen;