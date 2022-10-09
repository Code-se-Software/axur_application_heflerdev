import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux'
import type {RootState, AppDispatch} from './store'

export const useAppDispatch: (insertData: { payload: string, type: string }) => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector