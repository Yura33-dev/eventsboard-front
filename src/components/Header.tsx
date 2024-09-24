import { Box, Container, Link as MuiLink, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const Header = () => {
  return (
    <Box component="header" sx={{ backgroundColor: 'primary.main' }}>
      <Container maxWidth="lg">
        <Typography
          component="h1"
          variant="h1"
          sx={{ width: 'max-content', fontSize: { xs: '38px', md: '48px' } }}
        >
          <MuiLink
            component={RouterLink}
            to="/"
            underline="none"
            color="primary.contrastText"
            sx={{ display: 'flex', paddingY: 1.5 }}
          >
            EventsBoard
          </MuiLink>
        </Typography>
      </Container>
    </Box>
  );
};

export default Header;
