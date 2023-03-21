import { BASE_URL, GAME_PORT } from "../../static/defaults";
import axios, {AxiosRequestConfig} from "axios";

function LoadScreen() {
    const startGame = (gameid: string) => {
        //axios request with gameID here

        const requestConfig: AxiosRequestConfig = {
            baseURL: `http://${BASE_URL}:${GAME_PORT}`,
            headers: {
                "gameId": gameid // <-- refactor later to extract this property from WHEREVER
            }
        }

        const PATH = `/startBlackjackGame`; 

        axios.put<string>(PATH, {}, requestConfig).then((res) => {
            
        })
    }
    
    return <div>
        <h1>LOADING GAME...</h1>
        {/* Conditionally render this so only host player sees this */}
        <button onClick{startGame}>Begin dealing</button>
    </div>
}

export default LoadScreen;