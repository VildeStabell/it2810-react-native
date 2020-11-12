import { combineReducers } from "redux";
import detailedBookIdReducer from "./detailedBookReducer";
import loginStatusReducer from "./loginReducer";
import bookPageReducer from "./bookPageReducer";
import searchReducer from "./searchReducer";
import sortByReducer from "./sortByReducer";
import filterReducer from "./filterReducer";

const rootReducer = combineReducers<any>({
  id: detailedBookIdReducer,
  loginStatus: loginStatusReducer,
  bookPage: bookPageReducer,
  search: searchReducer,
  sortBy: sortByReducer,
  filter: filterReducer,
});

export default rootReducer;
