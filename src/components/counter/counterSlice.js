import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    count: 0,
    showError: false
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.count += 1
        },
        decrement: (state) => {
            state.count -= 1
            state.showError = false
        },
        error: (state) => {
            state.showError = true
        },
        clearError: (state) => {
          state.showError = false
        },
        clear: () => initialState
    },
})

export const checkAndIncrement = () => (dispatch, getState) => {
    const prevCounterValue = getCount(getState());

    if (prevCounterValue > 2) {
        dispatch(error())
        return
    }
    dispatch(increment())
}
export const { increment, decrement, clear, error, clearError } = counterSlice.actions

export const getCount = (state) => state.counter.count;
export const shouldShowToast = (state) => state.counter.showError;

export default counterSlice.reducer
