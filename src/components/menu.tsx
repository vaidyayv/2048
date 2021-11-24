import MenuIcon from '@mui/icons-material/Menu';

const Menu = () => {
    return (
        // temporarily changing color from #5e5e5e to transparent
        <div style={{display: 'flex', justifyContent: 'end', color: 'transparent'}}>
            <MenuIcon sx={{ fontSize: '48px'}} />
        </div>
    );
}

export default Menu;