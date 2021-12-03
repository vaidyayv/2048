interface CurrentScoreProps {
    currentScore: number;
}

const CurrentScore: React.FC<CurrentScoreProps> = ({ currentScore }) => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginTop: '10px',
        }}>
            <div style={{
                padding: '24px 24px 0px 24px',
                fontSize: '24px',
                fontWeight: 'bold',
                color: 'lightslategray',
            }}>{currentScore}</div>
            <div style={{ color: 'lightslategray' }}>CURRENT SCORE</div>
        </div >
    );
}

export default CurrentScore;