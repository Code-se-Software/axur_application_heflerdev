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
        removeData: (state, action: PayloadAction<any>) => {
            state.database.map((item, index) => {
                if (item.id === action.payload) return state.database.splice(index, 1)
            })
        },
        setData: (state, {payload}: PayloadAction<any>) => {
            state.data = payload
        }
    },
})

export const {insertData, removeData, setData} = websiteSlice.actions
export const selectDatabase = (state: RootState) => state.website.database
export default websiteSlice.reducer