import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IEvent } from '../types/eventType';
import { Dayjs } from 'dayjs';
import { IParticipant } from '../types/participantType';

export const type = 'event';

interface IEventsResponse {
  status: number;
  message: string;
  data: {
    data: IEvent[];
    hasNextPage: boolean;
    hasPrevPage: boolean;
    page: number;
    perPage: number;
    totalItems: number;
    totalPages: number;
  };
}

interface IEventResponse {
  data: IEvent;
  status: number;
  message: string;
}

interface IRegistrationRequest {
  eventId: string;
  fullName: string;
  email: string;
  birthDate: Dayjs | null;
  heardFrom: string;
}

interface IRegistrationResponse {
  status: number;
  message: string;
  data?: object;
}

interface IGetParticipantsResponse {
  status: number;
  message: string;
  data: IParticipant[];
}

export const eventsApi = createApi({
  reducerPath: 'eventsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://eventsboard-back.onrender.com/',
  }),
  endpoints: (builder) => ({
    getEvents: builder.mutation<
      IEventsResponse,
      { page: number; perPage: number; sortBy: string }
    >({
      query: ({ page, perPage, sortBy }) => ({
        url: `/events?page=${page}&perPage=${perPage}&sortBy=${sortBy}`,
        method: 'GET',
      }),
    }),
    getEventById: builder.query<IEventResponse, string>({
      query: (eventId) => `/events/${eventId}`,
    }),
    getEventParticipants: builder.query<IGetParticipantsResponse, string>({
      query: (eventId) => `/events/${eventId}/participants`,
    }),
    createRegistration: builder.mutation<
      IRegistrationResponse,
      IRegistrationRequest
    >({
      query: ({ eventId, ...rest }) => ({
        url: `/participants/${eventId}`,
        method: 'POST',
        body: rest,
      }),
    }),
  }),
});

export const {
  useGetEventsMutation,
  useGetEventByIdQuery,
  useGetEventParticipantsQuery,
  useCreateRegistrationMutation,
} = eventsApi;
