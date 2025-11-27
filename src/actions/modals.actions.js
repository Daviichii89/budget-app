export const openEditModalAction = (id) => ({
  type: "OPEN_EDIT_MODAL",
  payload: { id },
});
export const closeEditModalAction = () => ({ type: "CLOSE_EDIT_MODAL" });
