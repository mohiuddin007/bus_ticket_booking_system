import {
    configureStore
} from '@reduxjs/toolkit';
import busReducer from './busSlice';
import userReducer from './userSlice';
import { predefinedRoutes } from '../constants/predefinedRoutes';


const storedRoutes = localStorage.getItem('busRoutes') ?
    JSON.parse(localStorage.getItem('busRoutes')) :
    predefinedRoutes;

const storedUserInfo = localStorage.getItem('userInfo');

if (!localStorage.getItem('busRoutes')) {
    localStorage.setItem('busRoutes', JSON.stringify(predefinedRoutes));
}

const initialState = {
    bus: {
        routes: storedRoutes,
    },
    user: {
        userInfo: storedUserInfo ? JSON.parse(storedUserInfo) : null,
    },
};

const store = configureStore({
    reducer: {
        bus: busReducer,
        user: userReducer,
    },
    preloadedState: initialState,
});

store.subscribe(() => {
    const state = store.getState();
    localStorage.setItem('busRoutes', JSON.stringify(state.bus.routes));
    localStorage.setItem('userInfo', JSON.stringify(state.user.userInfo));
});

export default store;