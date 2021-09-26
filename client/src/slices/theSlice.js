import {createSlice} from '@reduxjs/toolkit/'

const initialState = {
    user: null,
    destination: null,
    travelTimeInformation: null
}

export const theSlice = createSlice({
    name: 'the',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload
        },
        setDestination: (state, action) => {
            state.destination = action.payload
        },
        setTravelTimeInformation: (state, action) => {
            state.travelTimeInformation = action.payload
        },
    }
})

export const { setUser, setDestination, setTravelTimeInformation} = theSlice.actions

export const selectUser = (state) => state.the.user
export const selectDestination = (state) => state.the.destination
export const selectTravelTimeInformation = (state) => state.the.TravelTimeInformation

export default theSlice.reducer