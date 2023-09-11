import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  product: null,
}

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    show: (state,action) => {
      state.product = action.payload;
    }
  },
})

// Action creators are generated for each case reducer function
export const { show } = productSlice.actions

export default productSlice.reducer