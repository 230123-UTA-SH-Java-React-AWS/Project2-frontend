import './Button.css';

interface ButtonProps {
    handleHit: () => void,
    handleStand: () => void
}

function HitOrStand({ handleHit, handleStand }:ButtonProps) {
    return (
        <>
            <button className="game-button hit-btn" onClick={handleHit}>Hit</button>
            <button className="game-button stand-btn" onClick={handleStand}>Stand</button>
        </>
    )
}

export default HitOrStand;