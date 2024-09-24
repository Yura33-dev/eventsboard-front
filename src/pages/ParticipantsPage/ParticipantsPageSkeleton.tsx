import { Box, Divider, Paper, Skeleton, Stack } from '@mui/material';

const ParticipantsPageSkeleton = () => {
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: 2,
      }}
    >
      <Paper
        elevation={2}
        sx={{ py: 2, px: 2, flex: '1 1 auto', minWidth: '200px' }}
      >
        <Stack direction="column" gap={2}>
          <Skeleton sx={{ width: '50%', height: '20px' }} />
          <Divider />
          <Skeleton sx={{ width: '90%', height: '10px' }} />
        </Stack>
      </Paper>

      <Paper
        elevation={2}
        sx={{ py: 2, px: 2, flex: '1 1 auto', minWidth: '200px' }}
      >
        <Stack direction="column" gap={2}>
          <Skeleton sx={{ width: '50%', height: '20px' }} />
          <Divider />
          <Skeleton sx={{ width: '90%', height: '10px' }} />
        </Stack>
      </Paper>

      <Paper
        elevation={2}
        sx={{ py: 2, px: 2, flex: '1 1 auto', minWidth: '200px' }}
      >
        <Stack direction="column" gap={2}>
          <Skeleton sx={{ width: '50%', height: '20px' }} />
          <Divider />
          <Skeleton sx={{ width: '90%', height: '10px' }} />
        </Stack>
      </Paper>

      <Paper
        elevation={2}
        sx={{ py: 2, px: 2, flex: '1 1 auto', minWidth: '200px' }}
      >
        <Stack direction="column" gap={2}>
          <Skeleton sx={{ width: '50%', height: '20px' }} />
          <Divider />
          <Skeleton sx={{ width: '90%', height: '10px' }} />
        </Stack>
      </Paper>

      <Paper
        elevation={2}
        sx={{ py: 2, px: 2, flex: '1 1 auto', minWidth: '200px' }}
      >
        <Stack direction="column" gap={2}>
          <Skeleton sx={{ width: '50%', height: '20px' }} />
          <Divider />
          <Skeleton sx={{ width: '90%', height: '10px' }} />
        </Stack>
      </Paper>
    </Box>
  );
};

export default ParticipantsPageSkeleton;
