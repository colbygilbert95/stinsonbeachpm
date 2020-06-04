export const openMap = () => {
  return {
    type: "OPEN_MAP",
  };
};

export const closeMap = () => {
  return {
    type: "CLOSE_MAP",
  };
};

export const setCenter = data => {
  return {
    type: "SET_CENTER",
    playload: data,
  };
};

export const setZoom = data => {
  return {
    type: "SET_ZOOM",
    playload: data,
  };
};

export const setHoverId = data => {
  return {
    type: "SET_HOVER_ID",
    playload: data,
  };
};

export const setListingImgs = data => {
  console.log("Action Data", data);

  return {
    type: "SET_LISTING_IMG",
    playload: data,
  };
};
