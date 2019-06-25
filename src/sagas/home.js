import {
    takeEvery
  } from "redux-saga/effects";
  
  import {
    GET_API
  } from '../action-types'
  import {
    handleSuccess,
    handleError
  } from "../utils/redux";
  import API from "../api-config";
  
  // workers
  export function* getAsync({
    payload
  }) {
    try {
      const response = yield API.getAPI(payload);
      const {
        status,
        data
      } = response;
      if (status === 200) {
        yield handleSuccess(GET_API, data.car);
      }
    } catch (err) {
      const error = {
        ...err.response,
        message: err.message,
      };
      yield   handleError(GET_API, error);   
    }
  }
  
  // watchers
  export const watchers = [
    function* watchGetAPI() {
      yield takeEvery(GET_API, getAsync);
    }
  ];