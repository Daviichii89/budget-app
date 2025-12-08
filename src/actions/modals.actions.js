const types = {
  OPEN_EDIT_MODAL: "OPEN_EDIT_MODAL",
  CLOSE_EDIT_MODAL: "CLOSE_EDIT_MODAL",
};
export default types;

export const openEditModalAction = (id) => ({
  type: types.OPEN_EDIT_MODAL,
  payload: { id },
});
export const closeEditModalAction = () => ({ type: types.CLOSE_EDIT_MODAL });
