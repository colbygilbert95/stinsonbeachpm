const initState = {
  selectedType: "",
  selectedGuest: "",
};

const sendMessageReducer = (state = initState, action) => {
  switch (action.type) {
    case "SET_SELECTED_VALUE":
      console.log(action);

      return {
        ...state,
        [action.id]: action.playload,
      };

    default:
      return state;
  }
};

export default sendMessageReducer;
