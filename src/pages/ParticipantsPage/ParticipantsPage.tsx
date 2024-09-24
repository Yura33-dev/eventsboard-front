import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { skipToken } from '@reduxjs/toolkit/query';
import { useGetEventByIdQuery } from '../../redux/api';
import { IParticipant } from '../../types/participantType';
import ParticipantCard from '../../components/ParticipantCard';
import ParticipantsPageSkeleton from './ParticipantsPageSkeleton';
import BackBtn from '../../components/ui/BackBtn';
import ChartBox from '../../components/chartBox/chartBox';
import UseFilterHook from './useFilterHook';

import {
  Box,
  Container,
  List,
  Skeleton,
  TextField,
  Typography,
} from '@mui/material';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const ParticipantsPage = () => {
  const { eventId } = useParams();

  const [parts, setParts] = useState<IParticipant[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const { data: event } = useGetEventByIdQuery(eventId ?? skipToken);
  const { searchString, handleFilter, filteredItems } = UseFilterHook({
    parts,
  });

  useEffect(() => {
    const fetchEventParticipants = async () => {
      setIsLoading(true);
      fetch(
        `https://eventsboard-back.onrender.com/events/${eventId}/participants`,
      )
        .then((response) => response.json())
        .then((data) => {
          if (data.status === 200 && data.data) {
            setParts(data.data);
          }
        })
        .catch((e) => console.log('Some error:', e))
        .finally(() => setIsLoading(false));
    };

    fetchEventParticipants();
  }, [eventId]);

  return (
    <Box component="section" py={4}>
      <BackBtn text="Back to events overview" />
      <Container maxWidth="lg">
        {isLoading ? (
          <Skeleton sx={{ width: '50%', height: '60px' }} />
        ) : (
          <Typography
            component="h2"
            variant="h4"
            mb={4}
            sx={{ fontSize: { xs: '24px', sm: '30px', md: '36px' } }}
          >
            {event?.data.name + ' participants'}
          </Typography>
        )}

        {isLoading ? (
          <Skeleton width={100} height={30} />
        ) : (
          <Box sx={{ display: 'flex', alignItems: 'flex-end', mb: 3 }}>
            <SearchOutlinedIcon
              sx={{ color: 'action.active', mr: 1, my: 0.5 }}
            />
            <TextField
              id="search"
              label="Search participants"
              variant="standard"
              value={searchString}
              onChange={handleFilter}
            />
          </Box>
        )}

        {isLoading && <ParticipantsPageSkeleton />}

        {filteredItems?.length === 0 && !isLoading && (
          <Typography component="h3" variant="h3" textAlign="center">
            There is no participants...
          </Typography>
        )}

        {filteredItems && filteredItems?.length > 0 && (
          <Box sx={{ maxHeight: '400px', overflowY: 'auto' }}>
            <List
              sx={{
                display: 'grid',
                gap: 2,
                gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
              }}
            >
              {filteredItems.map((participant: IParticipant) => (
                <ParticipantCard
                  key={participant._id}
                  participant={participant}
                />
              ))}
            </List>
          </Box>
        )}

        <ChartBox parts={parts} isLoading={isLoading} />
      </Container>
    </Box>
  );
};

export default ParticipantsPage;
