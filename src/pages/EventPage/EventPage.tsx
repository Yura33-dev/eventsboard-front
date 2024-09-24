import { useParams } from 'react-router-dom';
import { skipToken } from '@reduxjs/toolkit/query';

import { useGetEventByIdQuery } from '../../redux/api';
import EventInfoSection from './EventInfoSection';
import EventInfoSkeleton from './EventInfoSkeleton';
import NotFoundPage from '../NotFoundPage';
import EventRegistrationForm from '../../components/EventRegistrationForm';

import { Box, Container, Typography } from '@mui/material';
import BackBtn from '../../components/ui/BackBtn';

const EventPage = () => {
  const { eventId } = useParams();

  const { data: event, isLoading } = useGetEventByIdQuery(eventId ?? skipToken);

  if (isLoading) {
    return <EventInfoSkeleton />;
  }

  if (!event) {
    return <NotFoundPage />;
  }

  return (
    <Box component="section" py={4}>
      <Container maxWidth="lg">
        <BackBtn text="Back to events overview" />

        <Typography
          component="h2"
          variant="h4"
          mb={4}
          sx={{ fontSize: { xs: '24px', sm: '30px', md: '36px' } }}
        >
          {event.data.name}
        </Typography>

        <EventInfoSection event={event.data} />

        <Typography
          component="h3"
          variant="h5"
          my={4}
          sx={{ fontSize: { xs: '20px', sm: '26px', md: '30px' } }}
        >
          Event Registration
        </Typography>

        <EventRegistrationForm />
      </Container>
    </Box>
  );
};

export default EventPage;
