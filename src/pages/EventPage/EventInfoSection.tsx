import { Box, Typography } from '@mui/material';
import { IEvent } from '../../types/eventType';

interface EventInfoProps {
  event: IEvent;
}

const EventInfoSection = ({ event }: EventInfoProps) => {
  const eventInfo = [
    { label: 'Event:', value: event.name },
    { label: 'Type:', value: event.type },
    { label: 'Organizer:', value: event.promoter },
    { label: 'Date:', value: event.humanDate },
    { label: 'City:', value: event.city },
    { label: 'Location:', value: event.venue },
  ];

  return (
    <Box
      sx={{
        display: 'flex',
        gap: 5,
        flexDirection: { xs: 'column', md: 'row' },
      }}
    >
      <Box
        sx={{
          width: { sm: '100%' },
          maxWidth: { sm: '564px', md: '100%' },
          margin: { xs: '0 auto' },
          height: '368px',
          flex: '1 1 50%',
        }}
      >
        <Box
          component="img"
          src={event.imageUrl}
          alt={event.name + 'poster'}
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
          }}
        />
      </Box>

      <Box sx={{ flex: '1 1 50%' }}>
        <Typography component="h3" variant="h5">
          Event information
        </Typography>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: 2,
            mt: 2,
          }}
          role="table"
        >
          {eventInfo.map((item, index) => (
            <Box
              role="row"
              sx={{
                display: 'grid',
                gridTemplateColumns: '30% 70%',
                backgroundColor: 'rgba(63, 81, 181, 0.04)',
                padding: 1,
                borderRadius: '6px',
              }}
              key={index}
            >
              <Box component="span" role="cell">
                {item.label}
              </Box>
              <Box component="span" role="cell">
                {item.value}
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default EventInfoSection;
