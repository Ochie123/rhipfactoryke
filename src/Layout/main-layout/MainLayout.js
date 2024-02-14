import React from 'react';
import { Analytics } from '@vercel/analytics/react';
import { Divider, Box } from '@mui/material';

import NavigationBar from './NavigationBar'

import Footers from './Footers';

//import './Layout.scss'
const MainLayout = ({ children } ) => {
    return (
        <>   
        <NavigationBar/>
        <Box component="section" py={{ xs: 3, md: 12 }}>
        <div className="true">{children}
        <Analytics />
        </div>
        </Box>
        <Divider/>
        <Footers/>      
        </>
    )
}

export default MainLayout;