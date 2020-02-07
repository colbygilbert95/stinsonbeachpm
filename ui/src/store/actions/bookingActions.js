import axios from "axios";
const apiUrl = "http://localhost:5555";

export const getActiveUnits = () => {
  return dispatch => {
    return axios
      .get(apiUrl + "/getActiveUnits")
      .then(response => {
        dispatch({ type: "GET_ACTIVE_UNITS_SUCCESS", res_data: response.data });
      })
      .catch(err => {
        dispatch({ type: "GET_ACTIVE_UNITS_ERROR", err });
      });
  };
};

export const getUnit = unitName => {
  console.log("getUnit");
  console.log(unitName);
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
