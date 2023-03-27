import { FaSignOutAlt } from "@react-icons/all-files/fa/FaSignOutAlt";
import "./Button.css"

interface ButtonProps {
    handleDisconnect: () => void
}

function DisconnectButton({handleDisconnect}:ButtonProps) {
    return (
        <>
            <button className="disconnect-btn" onClick={handleDisconnect}>Disconnect <FaSignOutAlt/></button>
        </>
    )
}

export default DisconnectButton;