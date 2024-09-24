import { useEffect, useRef, useState } from 'react';
import { useGetEventsMutation } from '../../redux/api';
import EventCard from '../../components/EventCard';
import { IEvent } from '../../types/eventType';
import MainPageSkeleton from './MainPageSkeleton';

import {
  Box,
  Container,
  List,
  ListItem,
  SelectChangeEvent,
  Stack,
  Typography,
} from '@mui/material';
import SortSelect from '../../components/SortSelect';

const perPage = 16;

const MainPage = () => {
  const [page, setPage] = useState(1);
  const [events, setEvents] = useState<IEvent[]>([]);
  const [hasNextPage, setHasNextPage] = useState(true);
  const [isRestoredFromLocalStorage, setIsRestoredFromLocalStorage] =
    useState(false);

  const [sortBy, setSortBy] = useState('date');
  const handleSortChange = (event: SelectChangeEvent) => {
    setSortBy(event.target.value);
    setPage(1);
  };

  const observerRef = useRef<IntersectionObserver | null>(null);
  const lastEventRef = useRef<HTMLLIElement | null>(null);

  const [fetchData, { isLoading }] = useGetEventsMutation();

  useEffect(() => {
    const savedSortBy = localStorage.getItem('sortBy');
    const savedEvents = localStorage.getItem('events');
    const savedPage = localStorage.getItem('page');

    if (savedSortBy) {
      setSortBy(savedSortBy);
    }
    if (savedEvents) {
      setEvents(JSON.parse(savedEvents));
    }
    if (savedPage) {
      setPage(Number(savedPage));
    }

    setIsRestoredFromLocalStorage(true);
  }, []);

  useEffect(() => {
    if (isRestoredFromLocalStorage) {
      localStorage.setItem('sortBy', sortBy);
      localStorage.setItem('events', JSON.stringify(events));
      localStorage.setItem('page', page.toString());
    }
  }, [sortBy, events, page, isRestoredFromLocalStorage]);

  useEffect(() => {
    async function fetch() {
      if (!isRestoredFromLocalStorage) return;

      const result = await fetchData({ page, perPage, sortBy });

      if (result.data) {
        if (page === 1) {
          setEvents(result.data.data.data);
        } else {
          setEvents((prevEvents) => {
            const existingEventIds = new Set(
              prevEvents.map((event) => event._id),
            );
            const newEvents = result.data.data.data.filter(
              (event) => !existingEventIds.has(event._id),
            );
            return [...prevEvents, ...newEvents];
          });
        }
        setHasNextPage(result.data?.data.hasNextPage);
      }
    }

    fetch();
  }, [fetchData, page, sortBy, isRestoredFromLocalStorage]);

  useEffect(() => {
    if (isLoading || !hasNextPage) return;

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      if (entries[0].isIntersecting && hasNextPage && !isLoading) {
        setPage((prevPage) => prevPage + 1);
      }
    };

    if (observerRef.current) observerRef.current.disconnect();

    observerRef.current = new IntersectionObserver(observerCallback);
    const currentLastEventRef = lastEventRef.current;

    if (currentLastEventRef) {
      observerRef.current.observe(currentLastEventRef);
    }

    return () => {
      if (observerRef.current && currentLastEventRef) {
        observerRef.current.unobserve(currentLastEventRef);
      }
    };
  }, [isLoading, hasNextPage, events]);

  return (
    <Box component="section" py={2}>
      <Container maxWidth="lg">
        <Stack direction="row" sx={{ justifyContent: 'space-between' }}>
          <Typography
            variant="h2"
            component="h2"
            fontSize="2rem"
            my={1.5}
            sx={{ flex: '1 1 auto' }}
          >
            Events
          </Typography>

          <SortSelect sortBy={sortBy} handleSortChange={handleSortChange} />
        </Stack>

        {isLoading && page === 1 && <MainPageSkeleton />}

        {events?.length === 0 && !isLoading && (
          <Typography component="h3" variant="h3" textAlign="center">
            There is no items...
          </Typography>
        )}

        {events && events.length > 0 && (
          <List
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                sm: 'repeat(auto-fill, minmax(250px, 1fr))',
              },
              gridTemplateRows: 'auto',
            }}
          >
            {events.map((event: IEvent, index) => {
              const isLastEvent = index === events.length - 1;
              return (
                <ListItem
                  key={event._id}
                  ref={isLastEvent ? lastEventRef : null}
                  sx={{ justifyContent: 'stretch' }}
                >
                  <EventCard event={event} />
                </ListItem>
              );
            })}
          </List>
        )}

        {!hasNextPage && (
          <Typography component="h4" variant="h4" textAlign="center">
            No events anymore
          </Typography>
        )}
      </Container>
    </Box>
  );
};

export default MainPage;
