const initState = {
    units: [],
    listing: {}
  };
  
  const bookingReducer = (state = initState, action) => {
    switch (action.type) {
    //   case "CREATE_REPO_SUCCESS":
    //     console.log("create repo success");
    //     window.location.reload();
    //     return {
    //       ...state,
    //       modalState: !state.modal,
    //       create_repo_err: null
    //     };
    //   case "CREATE_REPO_ERROR":
    //     console.log("create repo error");
    //     return {
    //       ...state,
    //       create_repo_err: "Issue occured in create repo"
    //     };
  
    //   case "FETCH_REPO_SUCCESS":
    //     console.log("fetch repo success");
    //     return {
    //       ...state,
    //       reponame_values: action.res_data
    //     };
    //   case "FETCH_REPO_ERROR":
    //     console.log("fetch repo error");
    //     return state;
  
    //   case "FETCH_REPO_ALL_SUCCESS":
    //     console.log("fetch repo all success");
    //     return {
    //       ...state,
    //       repos: action.res_data
    //     };
    //   case "FETCH_REPO_ALL_ERROR":
    //     console.log("fetch repo error");
    //     return state;
  
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