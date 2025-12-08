import entriesTypes from "../actions/entries.actions";

const entriesReducer = (state = initialEntries, action) => {
  let newEntries;
  switch (action.type) {
    case entriesTypes.GET_ENTRIES_SUCCESS:
      return action.payload;

    case entriesTypes.ADD_ENTRY:
      newEntries = state.concat({ ...action.payload });
      return newEntries;
    case entriesTypes.REMOVE_ENTRY:
      newEntries = state.filter((entry) => entry.id !== action.payload.id);
      return newEntries;
    case entriesTypes.GET_ENTRY_DETAILS_SUCCESS:
    case entriesTypes.UPDATE_ENTRY:
      newEntries = [...state];
      const index = newEntries.findIndex(
        (entry) => entry.id === action.payload.id
      );
      newEntries[index] = {
        ...newEntries[index],
        ...action.payload.entry,
      };
      return newEntries;
    default:
      return state;
  }
};

export default entriesReducer;

var initialEntries = [];
