import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  customers: null,
  filteredCustomersChange: null,
  productFilter: {
    company: null,
    category: null,
    product: null,
  },
  currentCustomer: null,
  currentCustomerId: null,
  currentFileUrl: null,
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
    setCurrentCustomer: (state, action) => {
      state.currentCustomer = action.payload.currentCustomer;
      state.currentCustomerId = action.payload.id;
    },
    setCurrentFileUrl: (state, action) => {
      state.currentFileUrl = action.payload;
    },
  },
});

export const {
  setCustomers,
  setFilteredCustomersChange,
  setProductFilter,
  setCurrentCustomer,
  setCurrentFileUrl,
} = customersSlice.actions;

export default customersSlice.reducer;
