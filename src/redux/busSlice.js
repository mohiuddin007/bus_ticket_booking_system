import {
    createSlice
} from '@reduxjs/toolkit';

const busSlice = createSlice({
    name: 'bus',
    initialState: {
        routes: [],
    },
    reducers: {
        addRoute: (state, action) => {
            state.routes.push(action.payload);
            localStorage.setItem('busRoutes', JSON.stringify(state.routes));
        },
        removeRoute: (state, action) => {
            state.routes = state.routes.filter((route) => route.id !== action.payload);
            localStorage.setItem('busRoutes', JSON.stringify(state.routes));
        },
    },
});

export const {
    addRoute,
    removeRoute
} = busSlice.actions;
export default busSlice.reducer;