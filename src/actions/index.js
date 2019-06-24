import { GET_API, CLEAR_ERROR } from '../action-types';

export const getAPI = () => ({
    type: GET_API
});

export const clearErrors = () => ({
    type: CLEAR_ERROR
})
