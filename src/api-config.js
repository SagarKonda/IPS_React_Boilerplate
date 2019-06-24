import axios from "axios";
import {
  call
} from "redux-saga/effects";

const axiosDefaults = {
  headers: {
    "Content-Type": "application/json"
  },
};
const axiosConfig = axios.create({
  ...axiosDefaults,
  timeout: 90000
});

// Methods
const GET = axiosConfig.get;
const apiBase = 'http://localhost:3001';

const api = {
  getAPI: () =>
    call(
      GET,
      `${apiBase}`
    ),
};

export default api;