import { Box, Container, Skeleton } from '@mui/material';

const EventInfoSkeleton = () => {
  return (
    <Box component="section">
      <Container maxWidth="lg">
        <Skeleton
          animation="wave"
          height={80}
          sx={{ my: 4, width: { xs: '70%', md: '30%' } }}
        />
        <Box
          sx={{
            display: 'flex',
            gap: 5,
            flexDirection: { xs: 'column', md: 'row' },
          }}
        >
          <Skeleton
            sx={{
              height: '368px',
              width: { xs: '100%' },
              maxWidth: { xs: '564px' },
              margin: { xs: '0 auto' },
            }}
            variant="rectangular"
          />
          <Box sx={{ flex: '1 1 50%' }}>
            <Skeleton animation="wave" width="40%" height={64} />
            <Skeleton animation="wave" width="100%" height={40} />
            <Skeleton animation="wave" width="100%" height={40} />
            <Skeleton animation="wave" width="100%" height={40} />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default EventInfoSkeleton;
