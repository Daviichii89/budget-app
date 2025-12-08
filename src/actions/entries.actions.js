const types = {
  GET_ENTRIES: "GET_ENTRIES",
  GET_ENTRIES_SUCCESS: "GET_ENTRIES_SUCCESS",
  GET_ENTRY_DETAILS_SUCCESS: "GET_ENTRY_DETAILS_SUCCESS",
  ADD_ENTRY: "ADD_ENTRY",
  REMOVE_ENTRY: "REMOVE_ENTRY",
  UPDATE_ENTRY: "UPDATE_ENTRY",
};
export default types;

export const getAllEntriesAction = () => ({ type: types.GET_ENTRIES });

export const addEntryAction = (payload) => ({ type: types.ADD_ENTRY, payload });

export const removeEntryAction = (payload) => ({
  type: types.REMOVE_ENTRY,
  payload,
});

export const updateEntryAction = (id, entry) => ({
  type: types.UPDATE_ENTRY,
  payload: { id, entry },
});

export const getEntriesSuccessAction = (entries) => ({
  type: types.GET_ENTRIES_SUCCESS,
  payload: entries,
});

export const getEntryDetailsSuccessAction = (id, entry) => ({
  type: types.GET_ENTRY_DETAILS_SUCCESS,
  payload: { id, entry },
});
