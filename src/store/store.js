import { CountReducer } from "../reducers/CountReducer";
import { TodoReducer } from "../reducers/TodoReducers";
import { createStore, combineReducers } from "redux";

const AllReducer= combineReducers({
    counts: CountReducer,
    todos: TodoReducer
})

const store= createStore(AllReducer)
export default store;