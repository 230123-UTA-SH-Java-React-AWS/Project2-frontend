import "./UndefLoadScreen.css";
import "./Button.css"
import { useNavigate } from 'react-router-dom';

function LoadScreen(props: any) {
  const navigate = useNavigate();

  // Allows users to leave the queue even while waiting
  const disconnect = () => {
    navigate("/");
  }

  return (
    <div className="loadscreen">
      <div className="loadscreen-div">
        <h1 className="load-header">Loading...</h1>        
      </div>
      <button className="disconnect-btn" onClick={disconnect}>Return to Home</button>
    </div>)
}

export default LoadScreen;