import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  customers: null,
  filteredCustomersChange: null,
  productFilter: {
    company: null,
    category: null,
    product: null,
  },
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
    setProductFilter: (state, action) => {
      state.productFilter.company = action.payload.company;
      state.productFilter.category = action.payload.category;
      state.productFilter.product = action.payload.product;
    },
  },
});

export const { setCustomers, setFilteredCustomersChange, setProductFilter } =
  customersSlice.actions;

export default customersSlice.reducer;
