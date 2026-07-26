import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSelectedAll: false,
  selectedIds: [],
  excludedIds: [],
};

const tableSlice = createSlice({
  name: "table",
  initialState,
 reducers: {
  setIsSelectedAll: (state, { payload }) => {
    state.isSelectedAll = payload;

    if (payload) {
      state.selectedIds = [];
      state.excludedIds = [];
    }
  },

  addSelectedId: (state, { payload }) => {
    if (!state.selectedIds.includes(payload)) {
      state.selectedIds.push(payload);
    }
  },

  removeSelectedId: (state, { payload }) => {
    state.selectedIds = state.selectedIds.filter(
      (id) => id !== payload
    );
  },

  addExcludedId: (state, { payload }) => {
    if (!state.excludedIds.includes(payload)) {
      state.excludedIds.push(payload);
    }
  },

  removeExcludedId: (state, { payload }) => {
    state.excludedIds = state.excludedIds.filter(
      (id) => id !== payload
    );
  },
}
});

export const {
  setIsSelectedAll,
  addExcludedId,
  removeExcludedId,
  removeSelectedId,
  addSelectedId,
 
} = tableSlice.actions;

export default tableSlice.reducer;