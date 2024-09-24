import { Box, Skeleton } from '@mui/material';

const MainPageSkeleton = () => {
  return (
    <Box sx={{ display: 'flex', gap: 2 }}>
      <Box sx={{ flex: '1 1 auto' }}>
        <Skeleton
          variant="rectangular"
          sx={{ width: '100%', height: '140px' }}
        />
        <Skeleton width="100%" height={70} />
        <Skeleton width="100%" height={20} />
        <Skeleton width="100%" height={20} />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-start',
            gap: 2,
            mt: 4,
          }}
        >
          <Skeleton width="30%" height={50} />
          <Skeleton width="30%" height={50} />
        </Box>
      </Box>

      <Box sx={{ flex: '1 1 auto' }}>
        <Skeleton
          variant="rectangular"
          sx={{ width: '100%', height: '140px' }}
        />
        <Skeleton width="100%" height={70} />
        <Skeleton width="100%" height={20} />
        <Skeleton width="100%" height={20} />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-start',
            gap: 2,
            mt: 4,
          }}
        >
          <Skeleton width="30%" height={50} />
          <Skeleton width="30%" height={50} />
        </Box>
      </Box>

      <Box sx={{ flex: '1 1 auto' }}>
        <Skeleton
          variant="rectangular"
          sx={{ width: '100%', height: '140px' }}
        />
        <Skeleton width="100%" height={70} />
        <Skeleton width="100%" height={20} />
        <Skeleton width="100%" height={20} />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-start',
            gap: 2,
            mt: 4,
          }}
        >
          <Skeleton width="30%" height={50} />
          <Skeleton width="30%" height={50} />
        </Box>
      </Box>

      <Box sx={{ flex: '1 1 auto' }}>
        <Skeleton
          variant="rectangular"
          sx={{ width: '100%', height: '140px' }}
        />
        <Skeleton width="100%" height={70} />
        <Skeleton width="100%" height={20} />
        <Skeleton width="100%" height={20} />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-start',
            gap: 2,
            mt: 4,
          }}
        >
          <Skeleton width="30%" height={50} />
          <Skeleton width="30%" height={50} />
        </Box>
      </Box>
    </Box>
  );
};

export default MainPageSkeleton;
