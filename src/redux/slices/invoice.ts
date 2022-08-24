import sum from "lodash/sum";
import uniqBy from "lodash/uniqBy";
import { createSlice } from "@reduxjs/toolkit";
// utils
import axios from "../../utils/axios";
import { Invoice, InvoiceState } from "../../@types/invoice";
//
import { dispatch } from "../store";

// ----------------------------------------------------------------------

const initialState: InvoiceState = {
  isLoading: false,
  error: null,
  invoicePDF: null,
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
      state.invoicePDF = action.payload;
    },
  },
});

// Reducer
export default slice.reducer;

// ----------------------------------------------------------------------

export function getInvoice(invoice: Invoice) {
  return async () => {
    // dispatch(slice.actions.startLoading());
    try {
      const response = await axios.post(`/api/invoice`, invoice, {
        responseType: "blob", // had to add this one here
      });

      // create temp download url
      const url = window.URL.createObjectURL(response.data);

      // open pdf file on new tab
      window.open(url, "__blank");

      // remove temp url
      window.URL.revokeObjectURL(url);

      // dispatch(slice.actions.getInvoiceSuccess(response.data));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}
