import React from 'react';
import { AppBar, Toolbar, Typography, Avatar } from '@mui/material';


const AdminHeader: React.FC = () => {




    return (
        <AppBar position="static" style={{ backgroundColor: 'gray' }}>
            <Toolbar>
                <Typography variant="h6" style={{ flexGrow: 1 }}>
                    Admin Dashboard
                </Typography>

                {/* User Info */}
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Typography variant="body1">
                        Xin chào, 
                    </Typography>

                </div>
            </Toolbar>
        </AppBar>
    );
};

export default AdminHeader;