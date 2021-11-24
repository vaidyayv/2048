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
                border: '4px solid #e2e2e2',
                borderRadius: '100px',
                fontSize: '36px',
                fontWeight: 'bold',
                color: 'lightslategray',
            }}>{highestScore}</div>
            <div style={{ color: 'lightslategray' }}>HIGHEST SCORE</div>
        </div >
    );
}

export default HighestScore;