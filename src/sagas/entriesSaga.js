import { call, fork, put, take } from "redux-saga/effects";
import entriesTypes from "../actions/entries.actions";
import axios from "axios";
import {
  getEntriesSuccessAction,
  getEntryDetailsSuccessAction,
} from "../actions/entries.actions";

export function* getAllEntries() {
  yield take(entriesTypes.GET_ENTRIES);
  console.log("I need to get the entries now");
  try {
    const { data } = yield call(axios.get, "http://localhost:3001/entries");
    yield put(getEntriesSuccessAction(data));
  } catch (error) {
    console.error("Error fetching entries:", error);
  }
}

export function* getEntryDetails(id) {
  try {
    const { data } = yield call(
      axios.get,
      `http://localhost:3001/values/${id}`
    );
    yield put(getEntryDetailsSuccessAction(id, data));
  } catch (error) {
    console.error(`Error fetching value for id ${id}:`, error);
    if (error.response) {
      console.error(`Status: ${error.response.status}`);
      console.error(`URL intentada: ${error.config.url}`);
    }
  }
}

export function* getAllEntriesDetails() {
  const { payload } = yield take(entriesTypes.GET_ENTRIES_SUCCESS);
  for (let index = 0; index < payload.length; index++) {
    const entry = payload[index];
    yield fork(getEntryDetails, entry.id);
  }
}
