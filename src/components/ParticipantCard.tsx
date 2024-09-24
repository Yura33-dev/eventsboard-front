import { Divider, ListItem, Paper, Stack, Typography } from '@mui/material';
import { IParticipant } from '../types/participantType';

interface ParticipantCardProps {
  participant: IParticipant;
}

const ParticipantCard = ({ participant }: ParticipantCardProps) => {
  return (
    <ListItem sx={{ display: 'block', padding: 0 }}>
      <Paper
        elevation={2}
        sx={{
          py: 2,
          px: 3,
        }}
      >
        <Stack direction="column" gap={1}>
          <Typography
            component="span"
            variant="body1"
            sx={{
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            {participant.fullName}
          </Typography>
          <Divider />
          <Typography
            component="span"
            variant="body2"
            sx={{
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            {participant.email}
          </Typography>
        </Stack>
      </Paper>
    </ListItem>
  );
};

export default ParticipantCard;
