import update from "immutability-helper";
import { GET_API, GET_API_SUCCESS, GET_API_ERROR } from "../action-types";

export const initialState = {
  meta: {
    isLoading: true
  }
};

export default function reducer(state = initialState, action) {
  // eslint-disable-next-line no-unused-vars
  const { type, payload } = action;

  switch (type) {
    case GET_API:
      return update(state, {
        meta: {
          isLoading: {
            $set: true
          }
        }
      });

    case GET_API_SUCCESS: {
      return update(state, {
        meta: {
          isLoading: {
            $set: false
          }
        }
      });
    }

    case GET_API_ERROR: {
      return update(state, {
        meta: {
          isLoading: {
            $set: false
          }
        }
      });
    }

    default:
      return state;
  }
}
