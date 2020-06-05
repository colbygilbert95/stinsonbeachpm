const initState = {
  mapState: false,
  center: {},
  zoom: "",
  hoverId: "",
  listingImgs: [],
};

const googleMapReducer = (state = initState, action) => {
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

    case "SET_HOVER_ID":
      return {
        ...state,
        hoverId: action.playload,
      };

    case "SET_LISTING_IMG":
      return {
        ...state,
        listingImgs: [...state.listingImgs, action.playload],
      };

    default:
      return state;
  }
};

export default googleMapReducer;
