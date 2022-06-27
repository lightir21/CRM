import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  customers: null,
  filteredCustomersChange: null,
};

export const customersSlice = createSlice({
  name: "customers",
  initialState: initialState,
  reducers: {
    setCustomers: (state, action) => {
      state.customers = action.payload;
    },
    setFilteredCustomersChange: (state, action) => {
      state.filteredCustomersChange = action.payload;
    },
  },
});

export const { setCustomers, setFilteredCustomersChange } =
  customersSlice.actions;

export default customersSlice.reducer;
