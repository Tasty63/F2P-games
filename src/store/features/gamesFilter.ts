import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { GamesFilterParameters, GamesFilterPayload } from '../../config/types'

const initialState: GamesFilterParameters = {
  platform: null,
  category: null,
  sortBy: null,
};

export const gamesFilterSlice = createSlice({
  name: 'gamesFilter',
  initialState,

  reducers: {
    changeFilterValue: (state, action: PayloadAction<GamesFilterPayload>) => {
      const { name, value } = action.payload;

      switch (name) {
        case 'platform':
          state.platform = value
          break;
        case 'category':
          state.category = value
          break;
        case 'sortBy':
          state.sortBy = value
          break;
      }
    },
  }
})

export const { changeFilterValue } = gamesFilterSlice.actions;

export default gamesFilterSlice.reducer;