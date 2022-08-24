export interface InvoiceState {
  isLoading: boolean;
  error: Error | string | null;
  invoicePDF: null;
}

export interface Invoice {
  logo: string;
  dateHeaders: string[];
  no: string;
  date?: Date;
  dueDate?: Date;
  itemsHeaders: string[];
  items: Item[];
  amountHeaders: string[];
  subtotal: number;
  tax: number;
  discount: number;
  total: number;
  notes: string;
  yourCompany: YourCompany;
  clientCompany: ClientCompany;
}

export interface YourCompany {
  company: string;
  fullName: string;
  website: string;
  address: string;
  city: string;
  country: string;
  phone: number;
  email: string;
}

export interface ClientCompany {
  company: string;
  fullName: string;
  address: string;
  city: string;
  country: string;
}

export interface Item {
  cell1: string;
  cell2: string;
  cell3: string;
  cell4: string;
}

export interface InvoiceFormValues
  extends Omit<
    Invoice,
    | "subtotal"
    | "tax"
    | "discount"
    | "total"
    | "yourCompany"
    | "date"
    | "dueDate"
  > {
  date: string;
  dueDate: string;
  tax: string;
  discount: string;
  yourCompany: YourCompanyFormValues;
  afterSubmit?: string;
}

export interface YourCompanyFormValues extends Omit<YourCompany, "phone"> {
  phone: string;
}
