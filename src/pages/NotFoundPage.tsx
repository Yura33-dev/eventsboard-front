import { Link as RouterLink } from 'react-router-dom';
import { Container, Link as MuiLink, Typography } from '@mui/material';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';

const NotFoundPage = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        gap: '1rem',
      }}
    >
      <Typography component="h2" variant="h2">
        Page not found
      </Typography>
      <Typography component="p" variant="body1">
        Sorry, we cannot find requested page or resource 😓
      </Typography>
      <MuiLink
        component={RouterLink}
        to="/"
        color="primary.main"
        sx={{ display: 'flex', gap: 1 }}
      >
        <KeyboardReturnIcon />
        Back to Home
      </MuiLink>
    </Container>
  );
};

export default NotFoundPage;
