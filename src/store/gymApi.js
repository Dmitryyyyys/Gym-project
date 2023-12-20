import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const gymApiHeaders = {
  'X-RapidAPI-Key': '7d9d7b8fefmsh9223a6138c4bc68p12fc40jsne1eaf8437851',
  'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
};

const makeApiCall = (url) => ({
  url,
  headers: gymApiHeaders,
});

const baseUrl = 'https://exercisedb.p.rapidapi.com';

export const gymApi = createApi({
  reducerPath: 'gymApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getAllWorkouts: builder.query({
      query: () => makeApiCall(`/exercises`),
    }),
    getWorkoutByBodyPart: builder.query({
      query: (bodyPart) => {
        // console.log('BodyPart in GymApi:', bodyPart);
        return makeApiCall(`/exercises/bodyPart/${bodyPart}`);
      },
    }),
    getSingleWorkout: builder.query({
      query: (id) => makeApiCall(`/exercises/exercise/${id}`),
    }),
    getTargetWorkout: builder.query({
      query: (target) => makeApiCall(`/exercises/target/${target}`),
    }),
    getEquipmentWorkout: builder.query({
      query: (equipment) => makeApiCall(`/exercises/equipment/${equipment}`),
    }),
    getGymCategories: builder.query({
      query: () => makeApiCall(`/exercises/bodyPartList`),
    }),
  }),
});

export const {
  useGetGymCategoriesQuery,
  useGetAllWorkoutsQuery,
  useLazyGetAllWorkoutsQuery,
  useGetWorkoutByBodyPartQuery,
  useLazyGetWorkoutByBodyPartQuery,
  useGetSingleWorkoutQuery,
  useGetTargetWorkoutQuery,
  useGetEquipmentWorkoutQuery,
} = gymApi;