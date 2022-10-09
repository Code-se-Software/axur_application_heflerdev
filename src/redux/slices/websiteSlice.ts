import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import type {RootState} from "../store";

interface WebsiteState {
    value: String[]
}

const initialState = {
    value: [],
} as WebsiteState

export const websiteSlice = createSlice({
    name: 'website',
    initialState,
    reducers: {
        insertData: (state, action: PayloadAction<string>) => {
            state.value = [...state.value, action.payload];
        },
    },
})

export const {insertData} = websiteSlice.actions
export const selectData = (state: RootState) => state.website.value
export default websiteSlice.reducer