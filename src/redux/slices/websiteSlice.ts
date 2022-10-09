import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import type {RootState} from "../store";

interface WebsiteState {
    database: String[]
    data: string
}

const initialState = {
    database: [],
    data: ""
} as WebsiteState

export const websiteSlice = createSlice({
    name: 'website',
    initialState,
    reducers: {
        insertData: (state, action: PayloadAction<string>) => {
            state.database = [...state.database, action.payload];
            state.data = action.payload
        },
    },
})

export const {insertData} = websiteSlice.actions
export const selectDatabase = (state: RootState) => state.website.database
export default websiteSlice.reducer