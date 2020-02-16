const initState = {
    units: [],
    listing: {},
    reviews: [],
    headerImgs: [],
    roomImgs: [],
    blockedDays: {},
    ownerInfo: {}
  };
  
  const bookingReducer = (state = initState, action) => {
    switch (action.type) {
      case "GET_OWNER_INFO_BY_LISTING_SUCCESS":
        console.log("get owner info by listing success");
        return {
          ...state,
          ownerInfo: action.res_data
        };

      case "GET_OWNER_INFO_BY_LISTING_ERROR":
        console.log("get owner info by listing error");

        return state;

      case "GET_BLOCKED_DAYS_SUCCESS":
        console.log("get blocked days success");
        return {
          ...state,
          blockedDays: action.res_data
        };

      case "GET_BLOCKED_DAYS_ERROR":
        console.log("get blocked days error");

        return state;

      case "GET_UNIT_AMENITIES_SUCCESS":
        console.log("get unit amenities success");
        return {
          ...state,
          amenities: action.res_data
        };

      case "GET_UNIT_AMENITIES_ERROR":
        console.log("get unit amenities error");
        return state;
  
  
      case "GET_ROOM_HEADER_IMGS_SUCCESS":
        console.log("get room header imgs success");
        return {
          ...state,
          roomImgs: action.res_data
        };

      case "GET_ROOM_HEADER_IMGS_ERROR":
        console.log("get room header imgs error");
        return state;
  
      case "GET_UNIT_HEADER_IMGS_SUCCESS":
        console.log("get unit header imgs success");
        return {
          ...state,
          headerImgs: action.res_data
        };
      case "GET_UNIT_HEADER_IMGS_ERROR":
        console.log("get unit header imgs error");
        return state;
  
      case "GET_UNIT_REVIEW_SUCCESS":
        console.log("get unit review success");
        return {
          ...state,
          reviews: action.res_data
        };
      case "GET_UNIT_REVIEW_ERROR":
        console.log("get unit review error");
        return state;
  
      case "GET_UNIT_SUCCESS":
        console.log("get unit success");
        return {
          ...state,
          listing: action.res_data[0]
        };
      case "GET_UNIT_ERROR":
        console.log("get unit error");
        return state;
  
      case "GET_ACTIVE_UNITS_SUCCESS":
        console.log("fetch all active units success");
        console.log(action.res_data)
        return {
          ...state,
          units: action.res_data
        };
      case "GET_ACTIVE_UNITS_ERROR":
        console.log("fetch all active units error");
        return state;
  
      default:
        return state;
    }
  };
  
  export default bookingReducer;