import ReplayRoundedIcon from '@mui/icons-material/ReplayRounded';

interface RestartProps {
    restart: () => void;
}

const Restart: React.FC<RestartProps> = ({restart}) => {

    const handleRestartClick = () => {

        if (window.confirm("Do you really want to restart the game?")) {
            restart();
        }
    }
    return (
        <div style={{ display: 'flex', justifyContent: 'end', color: '#5e5e5e' }}>
            <div
                onClick={handleRestartClick}
                style={{ padding: '4px', background: '#f50057', borderRadius: '50%', opacity: '0.75' }}>
                <ReplayRoundedIcon sx={{ fontSize: '48px', color: 'white' }} />
            </div>
        </div>
    );
}

export default Restart;