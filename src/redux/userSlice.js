import {
    createSlice
} from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: {
        userInfo: null,
    },
    reducers: {
        setUserInfo: (state, action) => {
            state.userInfo = action.payload;
            localStorage.setItem('userInfo', JSON.stringify(state.userInfo));
        },
        clearUserInfo: (state) => {
            state.userInfo = null;
            localStorage.removeItem('userInfo');
        },
    },
});

export const {
    setUserInfo,
    clearUserInfo
} = userSlice.actions;
export default userSlice.reducer;