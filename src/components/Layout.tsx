import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import Header from './Header';
import { useEffect } from 'react';

const Layout = () => {
  useEffect(() => {
    async function wakeupServer() {
      fetch('https://eventsboard-back.onrender.com/events/')
        .then((response) => response.json())
        .catch((e) => console.log('Some error:', e));
    }

    const interval = setInterval(async () => {
      await wakeupServer();
    }, 23000);

    return () => {
      clearInterval(interval);
    };
  });
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
