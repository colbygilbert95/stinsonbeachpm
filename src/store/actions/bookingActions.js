import axios from "axios";
// const apiUrl = "https://us-central1-stinsonbeachpm.cloudfunctions.net/app";
const apiUrl = "http://localhost:5001/stinsonbeachpm/us-central1/app";

export const getActiveUnits = () => {
  return dispatch => {
    return axios
      .get(apiUrl + "/getActiveUnits")
      .then(response => {
        console.log(response)
        dispatch({ type: "GET_ACTIVE_UNITS_SUCCESS", res_data: response.data });
      })
      .catch(err => {
        dispatch({ type: "GET_ACTIVE_UNITS_ERROR", err });
      });
  };
};

export const setTotalGuests = total => {
  window.localStorage.setItem('total' , total)
  return {
    type: 'SET_TOTAL_GUESTS',
    playload: total
  }
}

export const setDates = dates => {
  window.localStorage.setItem('dates' , JSON.stringify(dates))
  return {
    type: 'SET_DATES',
    playload: dates
  }
}

export const clearDates = () => {
  window.localStorage.removeItem('dates')
  return {
    type: 'CLEAR_DATES'
  }
}

export const openModal = () => {
  return {
    type: "OPEN_MODAL"
  }
}
export const closeModal = () => {
  return {
    type: "CLOSE_MODAL",
  }
}
export const getUnit = unitName => {
  return dispatch => {
    return axios.get(apiUrl+ '/getUnit', {
      params: {
        unitName: unitName
      }
    })
      .then(response => {
        console.log("getUnit");
        console.log(response.data);
        dispatch({ type: "GET_UNIT_SUCCESS", res_data: response.data });
      })
      .catch(err => {
        dispatch({ type: "GET_UNIT_ERROR", err });
      });
  };
};

export const getUnitReviews = unitName => {
  return dispatch => {
    return axios.get(apiUrl+ '/getUnitReviews', {
      params: {
        unitName: unitName
      }
    })
      .then(response => {
        console.log("getUnitReviews");
        console.log(response.data);
        dispatch({ type: "GET_UNIT_REVIEW_SUCCESS", res_data: response.data });
      })
      .catch(err => {
        dispatch({ type: "GET_UNIT_REVIEW_ERROR", err });
      });
  };
};

export const getUnitHeaderImgs = unitName => {
  return dispatch => {
    return axios.get(apiUrl+ '/getUnitHeaderImgs', {
      params: {
        unitName: unitName
      }
    })
      .then(response => {
        console.log("getUnitHeaderImgs");
        console.log(response.data);
        dispatch({ type: "GET_UNIT_HEADER_IMGS_SUCCESS", res_data: response.data });
      })
      .catch(err => {
        dispatch({ type: "GET_UNIT_REVIEW_ERROR", err });
      });
  };
};

export const getRoomHeaderImgs = unitName => {
  return dispatch => {
    return axios.get(apiUrl + '/getRoomHeaderImgs', {
      params: {
        unitName: unitName
      }
    })
      .then(response => {
        console.log("getRoomHeaderImgs");
        console.log(response.data);
        dispatch({ type: "GET_ROOM_HEADER_IMGS_SUCCESS", res_data: response.data });
      })
      .catch(err => {
        dispatch({ type: "GET_ROOM_REVIEW_ERROR", err });
      });
  };
};

export const getUnitAmenities = unitName => {
  return dispatch => {
    return axios.get(apiUrl + '/getUnitAmenities', {
      params: {
        unitName: unitName
      }
    })
      .then(response => {
        dispatch({ type: "GET_UNIT_AMENITIES_SUCCESS", res_data: response.data });
      })
      .catch(err => {
        dispatch({ type: "GET_UNIT_AMENITIES_ERROR", err });
      });
  };
};

export const getBlockedDays = unitName => {
  return dispatch => {
    return axios.get(apiUrl + '/getBlockedDays', {
      params: {
        unitName: unitName
      }
    })
      .then(response => {
        
        dispatch({ type: "GET_BLOCKED_DAYS_SUCCESS", res_data: response.data });
      })
      .catch(err => {
        dispatch({ type: "GET_BLOCKED_DAYS_ERROR", err });
      });
  };
};

export const getOwnerInfoByListing = unitName => {
  return dispatch => {
    return axios.get(apiUrl + '/getOwnerInfoByListing', {
      params: {
        unitName: unitName
      }
    })
      .then(response => {
        dispatch({ type: "GET_OWNER_INFO_BY_LISTING_SUCCESS", res_data: response.data });
      })
      .catch(err => {
        dispatch({ type: "GET_OWNER_INFO_BY_LISTING_ERROR", err });
      });
  };
};

// export const repoExists = args => {
//   return dispatch => {
//     return axios
//       .post(apiUrl + "/repoExists", {
//         repopath: args.path
//       })
//       .then(response => {
//         dispatch({ type: "REPO_EXISTS_SUCCESS", res_data: response.data });
//       })
//       .catch(err => {
//         dispatch({ type: "REPO_EXISTS_ERROR", err });
//       });
//   };
// };

// export const getFile = args => {
//   return dispatch => {
//     return axios
//       .post(apiUrl + "/getFile", {
//         repopath: args.path,
//         blob: args.blob
//       })
//       .then(response => {
//         dispatch({ type: "GET_BLOB_SUCCESS", res_data: response.data });
//       })
//       .catch(err => {
//         dispatch({ type: "GET_BLOB_ERROR", err });
//       });
//   };
// };
