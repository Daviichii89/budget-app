export const addEntryAction = (payload) => ({ type: "ADD_ENTRY", payload });
export const removeEntryAction = (payload) => ({
  type: "REMOVE_ENTRY",
  payload,
});
export const updateEntryAction = (id, entry) => ({
  type: "UPDATE_ENTRY",
  payload: { id, entry },
});
