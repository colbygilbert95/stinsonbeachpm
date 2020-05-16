const initState = {
    units: [],
    listing: {},
    reviews: [],
    headerImgs: [],
    roomImgs: [],
    blockedDays: {},
    ownerInfo: {},
    totalGuests: 0,
    dates: {}
  };
  
  const bookingReducer = (state = initState, action) => {
    switch (action.type) {
      case "GET_OWNER_INFO_BY_LISTING_SUCCESS":
        return {
          ...state,
          ownerInfo: action.res_data
        };

      case "SET_TOTAL_GUESTS":
        return {
          ...state,
          totalGuests: action.playload
        }
        
      case "SET_DATES":
        return {
          ...state,
          dates: action.playload
        }

      case "GET_OWNER_INFO_BY_LISTING_ERROR":

        return state;

      case "GET_BLOCKED_DAYS_SUCCESS":
        return {
          ...state,
          blockedDays: action.res_data
        };

      case "GET_BLOCKED_DAYS_ERROR":

        return state;

      case "GET_UNIT_AMENITIES_SUCCESS":
        return {
          ...state,
          amenities: action.res_data
        };

      case "GET_UNIT_AMENITIES_ERROR":
        return state;
  
  
      case "GET_ROOM_HEADER_IMGS_SUCCESS":
        return {
          ...state,
          roomImgs: action.res_data
        };

      case "GET_ROOM_HEADER_IMGS_ERROR":
        return state;
  
      case "GET_UNIT_HEADER_IMGS_SUCCESS":
        return {
          ...state,
          headerImgs: action.res_data
        };
      case "GET_UNIT_HEADER_IMGS_ERROR":
        return state;
  
      case "GET_UNIT_REVIEW_SUCCESS":
        return {
          ...state,
          reviews: action.res_data
        };
      case "GET_UNIT_REVIEW_ERROR":
        return state;
  
      case "GET_UNIT_SUCCESS":
        return {
          ...state,
          listing: action.res_data[0]
        };
      case "GET_UNIT_ERROR":
        return state;
  
      case "GET_ACTIVE_UNITS_SUCCESS":
        return {
          ...state,
          units: action.res_data
        };
      case "GET_ACTIVE_UNITS_ERROR":
        return state;
  
      default:
        return state;
    }
  };
  
  export default bookingReducer;