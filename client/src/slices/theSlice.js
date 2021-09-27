import {createSlice} from '@reduxjs/toolkit/'

const initialState = {
    user: null,
    tasks: null,
    travelTimeInformation: null
}

export const theSlice = createSlice({
    name: 'the',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload
        },
        setTasks: (state, action) => {
            state.tasks = action.payload
        },
        setTravelTimeInformation: (state, action) => {
            state.travelTimeInformation = action.payload
        },
    }
})

export const { setUser, setTasks, setTravelTimeInformation} = theSlice.actions

export const selectUser = (state) => state.the.user
export const selectTasks = (state) => state.the.tasks
export const selectTravelTimeInformation = (state) => state.the.TravelTimeInformation

export default theSlice.reducer