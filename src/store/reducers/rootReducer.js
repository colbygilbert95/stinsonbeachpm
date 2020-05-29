import { combineReducers } from "redux";
import bookingReducer from "./bookingReducer";
import sendMessageReducer from "./sendMessageReducer";

const rootReducer = combineReducers({
  booking: bookingReducer,
  sendMessage: sendMessageReducer,
});

export default rootReducer;
