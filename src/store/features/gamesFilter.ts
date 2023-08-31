import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { CategoryType, GamesFilterParameters, PlatformType, SortByType } from '../../config/types'

const initialState: GamesFilterParameters = {
  platform: 'all',
  sortBy: 'relevance',
  category: null,
};

export const gamesFilterSlice = createSlice({
  name: 'gamesFilter',
  initialState,

  reducers: {
    changePlatformValue: (state, action: PayloadAction<PlatformType>) => {
      state.platform = action.payload;
    },
    changeCategoryValue: (state, action: PayloadAction<CategoryType>) => {
      state.category = action.payload;
    },
    changeSortByValue: (state, action: PayloadAction<SortByType>) => {
      state.sortBy = action.payload;
    },
  }
})

export const {
  changePlatformValue,
  changeCategoryValue,
  changeSortByValue
} = gamesFilterSlice.actions;

export default gamesFilterSlice.reducer;