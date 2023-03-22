import { BASE_URL, GAME_PORT } from "../../static/defaults";
import axios, { AxiosRequestConfig } from "axios";
import "./LoadScreen.css";
import { useNavigate } from "react-router-dom";

function LoadScreen() {
    const navigate = useNavigate();

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

    function checkIfPlayerIsHost() {
        const HOSTPATH = `/amIHost`;
        axios.get<string>(HOSTPATH, requestConfig).then((res) => {
            return res.data;
        })
    }
    
    function startGame() {
        // Extract game ID from URL and use that to send in request
        const PATH = `/startBlackjackGame`;
        axios.put<string>(PATH, {}, requestConfig).then((res) => {
            // props.setOpenGameToTrue();
            navigate("/" + "blackjack" + "/" + gameId);

        }).catch((err) => console.log(err));


    }

    return (
        <div className="loadscreen">
            <h1 className="load-header">LOADING GAME...</h1>
            <button>JOIN</button>
            {/* Conditionally render this so only host player sees this... somehow */}
            <button className="load-start-btn" type="button" onClick={startGame}>Begin dealing</button>



        </div>)
}

export default LoadScreen;