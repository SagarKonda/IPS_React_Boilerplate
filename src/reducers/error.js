import update from "immutability-helper";
import {
    GET_API_ERROR,
    CLEAR_ERROR
} from '../action-types';

export const initialState = {
  meta: {
    hasError: false,
    error: {}
  },
};

export default function reducer(state = initialState, action) {
  const {
    type,
    payload
  } = action;

  switch (type) {
    case GET_API_ERROR: {
      return update(state, {
        meta: {
          hasError: {
            $set: true
          },
          error: { $set: payload }
        }
      });
    }

    case CLEAR_ERROR: {
        return update(state, {
          meta: {
            hasError: {
              $set: false
            },
            error: { $set: {} }
          }
        });
      }

    default:
      return state;
  }
}
