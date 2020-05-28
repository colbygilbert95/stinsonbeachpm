export const setSelectedvalue = event => {
  const { id, value } = event;
  return {
    type: "SET_SELECTED_VALUE",
    playload: value,
    id,
  };
};
