const initState = {
  mapState: false,
  center: {},
  zoom: "",
};

const googleMapReducer = (state = initState, action) => {
  console.log(action);
  switch (action.type) {
    case "OPEN_MAP":
      return {
        ...state,
        mapState: true,
      };

    case "CLOSE_MAP":
      return {
        ...state,
        mapState: false,
      };

    case "SET_CENTER":
      return {
        ...state,
        center: action.playload,
      };

    case "SET_ZOOM":
      return {
        ...state,
        zoom: action.playload,
      };

    default:
      return state;
  }
};

export default googleMapReducer;
