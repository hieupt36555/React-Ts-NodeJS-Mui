import {
    Box,
    Typography,
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
} from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import HomeIcon from '@mui/icons-material/Home';
import {useNavigate } from 'react-router-dom';
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';

const SideBar: React.FC = () => {
    const navigate = useNavigate();


    return (
        <Drawer
            variant="permanent"
            sx={{
                width: 240,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: 240,
                    boxSizing: 'border-box',
                    backgroundColor: 'gray',
                    color: 'white',
                },
            }}
        >
            <Box sx={{ padding: 1, textAlign: 'center' }}>
                <Typography variant="h4" component="div">
                Furniro
                </Typography>
            </Box>
            <List>
                <ListItem button onClick={() => navigate('/admin')}>
                    <ListItemIcon sx={{ color: 'white' }}><DashboardIcon /></ListItemIcon>
                    <ListItemText primary="Dashboard" sx={{ color: 'white' }} />
                </ListItem>
                <ListItem button onClick={() => navigate('/admin/product/add')}>
                    <ListItemIcon sx={{ color: 'white' }}><CreateNewFolderIcon /></ListItemIcon>
                    <ListItemText primary="Create New" sx={{ color: 'white' }} />
                </ListItem>
                <ListItem button onClick={() => navigate('/admin/users')}>
                    <ListItemIcon sx={{ color: 'white' }}><PeopleIcon /></ListItemIcon>
                    <ListItemText primary="Users" sx={{ color: 'white' }} />
                </ListItem>
                <ListItem button onClick={() => navigate('/admin/settings')}>
                    <ListItemIcon sx={{ color: 'white' }}><SettingsIcon /></ListItemIcon>
                    <ListItemText primary="Settings" sx={{ color: 'white' }} />
                </ListItem>
                <ListItem button onClick={() => navigate('/')}>
                    <ListItemIcon sx={{ color: 'white' }}><HomeIcon /></ListItemIcon>
                    <ListItemText primary="Home" sx={{ color: 'white' }} />
                </ListItem>
                <ListItem button onClick={() => { /* Logout logic */ }}>
                    <ListItemIcon sx={{ color: 'white' }}><LogoutIcon /></ListItemIcon>
                    <ListItemText primary="Logout" sx={{ color: 'white' }} />
                </ListItem>
            </List>
        </Drawer>
    );
};

export default SideBar;
