import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Link as MuiLink,
} from '@mui/material';
import { IEvent } from '../types/eventType';

interface EventCardProps {
  event: IEvent;
}

const linkStyles = {
  textTransform: 'uppercase',
  fontSize: '14px',
  py: 1,
  px: 1,
  transition: 'background-color 150ms linear',
  borderRadius: '4px',
  '&:hover': {
    backgroundColor: 'rgba(63, 81, 181, 0.04)',
  },
};

const EventCard = ({ event }: EventCardProps) => {
  return (
    <Card
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <Box>
        <CardMedia
          sx={{ height: 140 }}
          image={event.imageUrl}
          title={event.name}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h6"
            component="h3"
            sx={{ minHeight: '100px' }}
          >
            {event.name}
          </Typography>

          <Typography
            component="p"
            sx={{
              fontSize: '14px',
              marginTop: '0.75rem',
              display: 'flex',
              justifyContent: 'flex-start',
              alignItems: 'center',
              gap: '10px',
            }}
          >
            <Typography
              component="span"
              sx={{
                fontWeight: 700,
              }}
            >
              Type:
            </Typography>
            {event.type}
          </Typography>

          <Typography
            component="p"
            sx={{
              fontSize: '14px',
              marginTop: '0.75rem',
              display: 'flex',
              justifyContent: 'flex-start',
              alignItems: 'center',
              gap: '10px',
            }}
          >
            <Typography
              component="span"
              sx={{
                fontWeight: 700,
              }}
            >
              City:
            </Typography>
            {event.city}
          </Typography>

          <Typography
            component="p"
            sx={{
              fontSize: '14px',
              marginTop: '0.5rem',
              display: 'flex',
              justifyContent: 'flex-start',
              alignItems: 'center',
              gap: '10px',
            }}
          >
            <Typography
              component="span"
              sx={{
                fontWeight: 700,
              }}
            >
              Date:
            </Typography>
            {event.humanDate}
          </Typography>

          <Typography
            component="p"
            sx={{
              fontSize: '14px',
              marginTop: '0.5rem',
              display: 'flex',
              justifyContent: 'flex-start',
              alignItems: 'center',
              gap: '10px',
            }}
          >
            <Typography
              component="span"
              sx={{
                fontWeight: 700,
              }}
            >
              Organizer:
            </Typography>
            {event.promoter}
          </Typography>
        </CardContent>
      </Box>

      <CardActions>
        <MuiLink
          component={RouterLink}
          to={'/events/' + event._id}
          underline="none"
          sx={linkStyles}
        >
          Register
        </MuiLink>

        <MuiLink
          component={RouterLink}
          to={'/events/' + event._id + '/participants'}
          underline="none"
          sx={linkStyles}
        >
          View
        </MuiLink>
      </CardActions>
    </Card>
  );
};

export default EventCard;
