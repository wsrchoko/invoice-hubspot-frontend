import sum from "lodash/sum";
import uniqBy from "lodash/uniqBy";
import { createSlice } from "@reduxjs/toolkit";
// utils
import axios from "../../utils/axios";
import { InvoiceState } from "../../@types/invoice";
//
import { dispatch } from "../store";

// ----------------------------------------------------------------------

const initialState: InvoiceState = {
  isLoading: false,
  error: null,
  invoice: null,
};

const slice = createSlice({
  name: "invoice",
  initialState,
  reducers: {
    // START LOADING
    startLoading(state) {
      state.isLoading = true;
    },

    // HAS ERROR
    hasError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    // GET INVOICE
    getInvoiceSuccess(state, action) {
      state.isLoading = false;
      state.invoice = action.payload;
    },
  },
});

// Reducer
export default slice.reducer;

// ----------------------------------------------------------------------

export function getInvoice() {
  return async () => {
    dispatch(slice.actions.startLoading());
    try {
      const response = await axios.post("/api/invoice", {});
      dispatch(slice.actions.getInvoiceSuccess(response.data));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}
