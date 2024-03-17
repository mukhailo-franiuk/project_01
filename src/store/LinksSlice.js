import { createSlice } from '@reduxjs/toolkit';

export const LinksSlice = createSlice({
    name: 'links',
    initialState: {
        oneElement: {}
    },
    reducers: {
        oneElem: (state, elem) => {
            state.oneElement = elem.payload;
        }
    }
});
export const { oneElem } = LinksSlice.actions;
export const getOneElement = state => state.links.oneElement;
export default LinksSlice.reducer;