import { configureStore } from '@reduxjs/toolkit'
import theReducer from '../slices/theSlice'

export default configureStore({
  reducer: {
      the: theReducer,
  },
})

