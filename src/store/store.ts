import {combineReducers, configureStore} from "@reduxjs/toolkit";
import penguinReducer from './reducers/penguinSlice'
import {userAPI} from "../service/UserService";
import {todoAPI} from "../service/ToDoService";
import todoReducer from "./reducers/todoSlice";

const rootReducer = combineReducers({
    penguin: penguinReducer,
    todos: todoReducer,
    [userAPI.reducerPath]: userAPI.reducer,
    [todoAPI.reducerPath]: todoAPI.reducer,
})

export const setupStore=()=>
{
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(userAPI.middleware,todoAPI.middleware)

    })
}



export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
export const store = setupStore();