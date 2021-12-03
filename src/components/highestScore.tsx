interface HighestScoreProps {
    currentScore: number;
    highestScore: number;
}

const HighestScore: React.FC<HighestScoreProps> = ({ currentScore, highestScore }) => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginTop: '10px',
        }}>
            <div style={{
                padding: '8px 24px 8px 24px',
                border: '4px solid goldenrod',
                borderRadius: '100px',
                fontSize: '36px',
                fontWeight: 'bold',
                color: 'goldenrod',
            }}>{highestScore}</div>
            <div style={{ color: 'goldenrod' }}>HIGHEST SCORE</div>
        </div >
    );
}

export default HighestScore;