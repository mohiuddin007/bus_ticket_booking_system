import {
    configureStore
} from '@reduxjs/toolkit';
import busReducer from './busSlice';
import userReducer from './userSlice';

const storedRoutes = localStorage.getItem('busRoutes');
const storedUserInfo = localStorage.getItem('userInfo');

const initialState = {
    bus: {
        routes: storedRoutes ? JSON.parse(storedRoutes) : [],
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