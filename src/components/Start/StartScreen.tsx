import "./StartScreen.css";
import TableList from "./TableList";
import { useState } from "react";
import CreateNewGameForm from "../CreateNewGame/CreateGame";
import { logoutUser } from "../../features/authSlice";
import { useAppDispatch } from "../../redux/hooks";
import { useNavigate } from "react-router-dom";



function StartScreen() {
    // Toggles whether display is showing existing tables or form for creating a new one
    const [openNewTable, setOpenNewTable] = useState(false);

    const handleButton = () => {
        setOpenNewTable(!openNewTable);
    }

    const dispatch = useAppDispatch();
    const navigate = useNavigate(); 

    const logout = () => {
        dispatch(logoutUser()); 
        navigate("/login"); 
    }


    return (
        <div className="bg">
            <nav className="logout"><button id="logout-btn" onClick={logout}>Logout</button></nav>
            <div className="grid-container beans">
                <div className="start-title grid-item">
                    <h1 className="start-h1">Live Tables</h1>
                </div>
                <div className="new-game-btn grid-item"><button onClick={handleButton} className="new-game-btn">
                    {openNewTable ? "CHOOSE EXISTING TABLE" : "CREATE NEW TABLE"}
                    </button>
                </div>
                <div className="menu-container grid-item">
                    {openNewTable ? <CreateNewGameForm/> : <TableList />}
                </div>

            </div>
        </div>
    )
}

export default StartScreen;