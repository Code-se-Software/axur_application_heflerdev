import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import type {RootState} from "../store";

interface WebsiteState {
    database: Array<{ id: string, keyword: string }>
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
        insertData: (state, action: PayloadAction<{ id: string, keyword: string }>) => {
            state.database = [...state.database, action.payload];
            state.data = action.payload.id
        },
    },
})

export const {insertData} = websiteSlice.actions
export const selectDatabase = (state: RootState) => state.website.database
export default websiteSlice.reducer