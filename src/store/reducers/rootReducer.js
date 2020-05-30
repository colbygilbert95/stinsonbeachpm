import { combineReducers } from "redux";
import bookingReducer from "./bookingReducer";
import sendMessageReducer from "./sendMessageReducer";
import googleMapReducer from "./googleMapReducer";

const rootReducer = combineReducers({
  booking: bookingReducer,
  sendMessage: sendMessageReducer,
  googleMap: googleMapReducer,
});

export default rootReducer;
