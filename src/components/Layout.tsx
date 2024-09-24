import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import Header from './Header';

const Layout = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Header />

      <Box component="main" sx={{ minHeight: '100vh' }}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
