import * as Yup from "yup";
import { format } from "date-fns";
import { useFormik } from "formik";
import { compact, reduce } from "lodash";
import { useCallback, useState } from "react";
// @mui
import { styled } from "@mui/material/styles";
import {
  Box,
  Card,
  Grid,
  Stack,
  Button,
  Table,
  TableRow,
  Container,
  TableBody,
  TableCell,
  TableHead,
  Typography,
  TableContainer,
  TextField as MUITextField,
  Divider,
  IconButton,
} from "@mui/material";

// components
import { UploadAvatar } from "../../components/upload";
import { MotionViewport } from "../../components/animate";
//
import { InvoiceFormValues } from "../../@types/invoice";
import Iconify from "src/components/Iconify";

// ----------------------------------------------------------------------

const TextField = styled(MUITextField)(({ theme }) => ({
  width: "100%",
  color: "#2d3e50",
  "& .MuiInput-underline:after": {
    borderBottomColor: theme.palette.primary.main,
  },
  "& .MuiOutlinedInput-root": {
    borderRadius: 0,
    "& input": {
      padding: theme.spacing(0.25, 0.5),
    },
    "& fieldset": {
      borderColor: "transparent",
      borderStyle: "dashed",
    },
    "&:hover fieldset": {
      borderColor: theme.palette.primary.main,
    },
    "&.Mui-focused fieldset": {
      borderColor: theme.palette.primary.main,
    },
  },
}));

const RootStyle = styled("div")(({ theme }) => ({
  padding: theme.spacing(5, 2),
  [theme.breakpoints.up("sm")]: {
    padding: theme.spacing(10),
  },
  backgroundColor: "#f2f5f8",
}));

// ----------------------------------------------------------------------

export default function HomeInvoice() {
  const [photoURL, setPhotoURL] = useState(null);

  const validationSchema = Yup.object().shape({
    yourCompany: Yup.object({
      company: Yup.string().required(),
      fullName: Yup.string().required(),
      website: Yup.string().required(),
      phone: Yup.number().required(),
      email: Yup.string().email().required(),
    }),
  });

  const formik = useFormik<InvoiceFormValues>({
    initialValues: {
      logo: "",
      no: "",
      date: format(new Date(), "yyyy-MM-dd"),
      dueDate: format(new Date(), "yyyy-MM-dd"),
      itemsHeaders: ["ID", "Description", "Quantity", "Price"],
      items: [],
      dateHeaders: ["Invoice No:", "Invoice Date:", "Due Date:"],
      amountHeaders: ["Subtotal:", "Tax:", "Discount:", "Total:"],
      tax: "",
      discount: "",
      notes: "",
      yourCompany: {
        company: "",
        fullName: "",
        website: "",
        address: "",
        city: "",
        country: "",
        phone: "",
        email: "",
      },
      clientCompany: {
        company: "",
        fullName: "",
        address: "",
        city: "",
        country: "",
      },
    },
    validationSchema,
    onSubmit: async (values) => {
      console.log(values);
    },
  });

  const {
    errors,
    values,
    touched,
    handleSubmit,
    getFieldProps,
    setFieldValue,
  } = formik;

  const handleDrop = useCallback(
    (acceptedFiles) => {
      const file = acceptedFiles[0];
      if (file) {
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
          setFieldValue("logo", reader.result);
        };
        setPhotoURL({
          ...file,
          preview: URL.createObjectURL(file),
        });
      }
    },
    [setPhotoURL]
  );

  const calculateSubtotal = () => {
    const subtotal = reduce(
      compact(values.items.map(({ cell4 }) => +cell4)),
      (acc, a) => acc + a,
      0
    );
    if (subtotal) return subtotal.toFixed(2).toString();
    return "00.0";
  };

  const calculateTotal = () => {
    const subtotal = +calculateSubtotal();

    const tax = ((+values.tax || 0) / 100) * subtotal;
    const discount = ((+values.discount || 0) / 100) * (subtotal + tax);
    if (subtotal) return (subtotal + tax - discount).toFixed(2).toString();
    return "00.0";
  };

  const onAddMore = () => {
    setFieldValue("items", [
      ...values.items,
      { cell1: "", cell2: "", cell3: "", cell4: "" },
    ]);
  };

  const onDeleteItem = (index: number) => {
    setFieldValue(
      "items",
      values.items.filter((item, _index) => _index !== index)
    );
  };

  return (
    <RootStyle>
      <Container component={MotionViewport}>
        <Card
          sx={{
            mx: "auto",
            width: "100%",
            maxWidth: 800,
            borderRadius: 0,
            p: (theme) => ({ xs: theme.spacing(3), sm: theme.spacing(6) }),
          }}
        >
          <Grid container sx={{ color: "#2d3e50" }} spacing={3}>
            <Grid item xs={12} sm={6}>
              <Typography component="h2" variant="h3" mb={3}>
                Invoice
              </Typography>

              <Stack mb={0.5}>
                <TextField
                  {...getFieldProps("yourCompany.company")}
                  size="small"
                  placeholder="Your Company*"
                  InputProps={{ sx: { fontWeight: 600 } }}
                  error={Boolean(
                    touched.yourCompany &&
                      errors.yourCompany &&
                      touched.yourCompany.company &&
                      errors.yourCompany.company
                  )}
                />

                <TextField
                  {...getFieldProps("yourCompany.fullName")}
                  size="small"
                  placeholder="Your First and Last Name*"
                  error={Boolean(
                    touched.yourCompany &&
                      errors.yourCompany &&
                      touched.yourCompany.fullName &&
                      errors.yourCompany.fullName
                  )}
                />

                <TextField
                  {...getFieldProps("yourCompany.website")}
                  size="small"
                  placeholder="Company Website*"
                  error={Boolean(
                    touched.yourCompany &&
                      errors.yourCompany &&
                      touched.yourCompany.website &&
                      errors.yourCompany.website
                  )}
                />

                <TextField
                  {...getFieldProps("yourCompany.address")}
                  size="small"
                  placeholder="Company Address"
                />

                <TextField
                  {...getFieldProps("yourCompany.city")}
                  size="small"
                  placeholder="City, State ZIP"
                />

                <TextField
                  {...getFieldProps("yourCompany.country")}
                  size="small"
                  placeholder="Country"
                />

                <TextField
                  {...getFieldProps("yourCompany.phone")}
                  size="small"
                  placeholder="Phone No.*"
                  error={Boolean(
                    touched.yourCompany &&
                      errors.yourCompany &&
                      touched.yourCompany.phone &&
                      errors.yourCompany.phone
                  )}
                />

                <TextField
                  {...getFieldProps("yourCompany.email")}
                  size="small"
                  placeholder="Email Address*"
                  error={Boolean(
                    touched.yourCompany &&
                      errors.yourCompany &&
                      touched.yourCompany.email &&
                      errors.yourCompany.email
                  )}
                />
              </Stack>

              <Stack>
                <TextField
                  {...getFieldProps("clientCompany.company")}
                  size="small"
                  placeholder="Client's Company"
                  InputProps={{ sx: { fontWeight: 600 } }}
                />

                <TextField
                  {...getFieldProps("clientCompany.fullName")}
                  size="small"
                  placeholder="Client's Name"
                />

                <TextField
                  {...getFieldProps("clientCompany.address")}
                  size="small"
                  placeholder="Client's Address"
                />

                <TextField
                  {...getFieldProps("clientCompany.city")}
                  size="small"
                  placeholder="City, State ZIP"
                />

                <TextField
                  {...getFieldProps("clientCompany.country")}
                  size="small"
                  placeholder="Country"
                />
              </Stack>
            </Grid>

            <Grid item xs={12} sm={6}>
              <UploadAvatar
                accept="image/*"
                file={photoURL}
                onDrop={handleDrop}
              />

              <Box height={200} />

              <Stack direction="row">
                <Box width="50%">
                  <TextField
                    {...getFieldProps("dateHeaders[0]")}
                    size="small"
                    placeholder="Invoice No"
                    InputProps={{
                      sx: {
                        fontWeight: 600,
                        "& input": { textAlign: "right" },
                      },
                    }}
                  />
                </Box>
                <Box width="50%">
                  <TextField
                    {...getFieldProps("no")}
                    size="small"
                    placeholder="####"
                    InputProps={{ sx: { "& input": { textAlign: "right" } } }}
                  />
                </Box>
              </Stack>

              <Stack direction="row">
                <Box width="50%">
                  <TextField
                    {...getFieldProps("dateHeaders[1]")}
                    size="small"
                    placeholder="Invoice Date"
                    InputProps={{
                      sx: {
                        fontWeight: 600,
                        "& input": { textAlign: "right" },
                      },
                    }}
                  />
                </Box>
                <Box width="50%">
                  <TextField
                    {...getFieldProps("date")}
                    type="date"
                    size="small"
                    InputProps={{ sx: { "& input": { textAlign: "right" } } }}
                  />
                </Box>
              </Stack>

              <Stack direction="row">
                <Box width="50%">
                  <TextField
                    {...getFieldProps("dateHeaders[2]")}
                    size="small"
                    placeholder="Due Date"
                    InputProps={{
                      sx: {
                        fontWeight: 600,
                        "& input": { textAlign: "right" },
                      },
                    }}
                  />
                </Box>
                <Box width="50%">
                  <TextField
                    {...getFieldProps("dueDate")}
                    type="date"
                    size="small"
                    InputProps={{ sx: { "& input": { textAlign: "right" } } }}
                  />
                </Box>
              </Stack>
            </Grid>

            <Grid item xs={12}>
              <Box
                sx={{
                  "&:hover > #button__table_action__addmore": {
                    display: "inline-flex",
                  },
                }}
              >
                <TableContainer>
                  <Table sx={{ minWidth: 650 }}>
                    <TableHead>
                      <TableRow>
                        <TableCell
                          sx={{
                            bgcolor: "#425B76",
                            boxShadow: "unset!important",
                          }}
                        >
                          <TextField
                            {...getFieldProps("itemsHeaders[0]")}
                            size="small"
                            placeholder="ID"
                            InputProps={{
                              sx: { fontWeight: 600, color: "white" },
                            }}
                          />
                        </TableCell>
                        <TableCell
                          sx={{
                            bgcolor: "#425B76",
                            boxShadow: "unset!important",
                          }}
                        >
                          <TextField
                            {...getFieldProps("itemsHeaders[1]")}
                            size="small"
                            placeholder="Description"
                            InputProps={{
                              sx: { fontWeight: 600, color: "white" },
                            }}
                          />
                        </TableCell>
                        <TableCell
                          sx={{
                            bgcolor: "#425B76",
                            boxShadow: "unset!important",
                          }}
                        >
                          <TextField
                            {...getFieldProps("itemsHeaders[2]")}
                            size="small"
                            placeholder="Quantity"
                            InputProps={{
                              sx: { fontWeight: 600, color: "white" },
                            }}
                          />
                        </TableCell>
                        <TableCell
                          sx={{
                            bgcolor: "#425B76",
                            boxShadow: "unset!important",
                          }}
                        >
                          <TextField
                            {...getFieldProps("itemsHeaders[3]")}
                            size="small"
                            placeholder="Price"
                            InputProps={{
                              sx: { fontWeight: 600, color: "white" },
                            }}
                          />
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {values.items.map((item, index) => (
                        <TableRow
                          key={index}
                          sx={{
                            position: "relative",
                            "&:last-child td, &:last-child th": { border: 0 },
                            "&:hover > button": { display: "inline-flex" },
                          }}
                        >
                          <TableCell>
                            <TextField
                              {...getFieldProps(`items[${index}].cell1`)}
                              size="small"
                              placeholder="00"
                              InputProps={{ sx: { fontWeight: 600 } }}
                            />
                          </TableCell>
                          <TableCell>
                            <TextField
                              {...getFieldProps(`items[${index}].cell2`)}
                              size="small"
                              placeholder="Item description"
                              InputProps={{ sx: { fontWeight: 600 } }}
                            />
                          </TableCell>
                          <TableCell>
                            <TextField
                              {...getFieldProps(`items[${index}].cell3`)}
                              size="small"
                              placeholder="0"
                              InputProps={{ sx: { fontWeight: 600 } }}
                            />
                          </TableCell>
                          <TableCell>
                            <TextField
                              {...getFieldProps(`items[${index}].cell4`)}
                              size="small"
                              placeholder="$0.00"
                              InputProps={{ sx: { fontWeight: 600 } }}
                            />
                          </TableCell>

                          <IconButton
                            color="inherit"
                            sx={{
                              display: "none",
                              position: "absolute",
                              top: "50%",
                              right: "0%",
                              transform: "translate(0%,-50%)",
                            }}
                            onClick={() => onDeleteItem(index)}
                          >
                            <Iconify
                              icon="ci:close-small"
                              sx={{ width: 20, height: 20 }}
                            />
                          </IconButton>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>

                <Button
                  fullWidth
                  variant="contained"
                  onClick={onAddMore}
                  sx={{ display: "none" }}
                  id="button__table_action__addmore"
                >
                  Add More
                </Button>
              </Box>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Stack
                border="1px solid #425b76"
                borderRadius={1}
                p={2}
                spacing={2}
              >
                <Typography variant="subtitle2" textAlign="center">
                  Notes:
                </Typography>

                <TextField
                  {...getFieldProps("notes")}
                  multiline
                  size="small"
                  placeholder="Any additional comments"
                  InputProps={{
                    sx: {
                      fontWeight: 600,
                      "& textarea": { textAlign: "center" },
                    },
                  }}
                />
              </Stack>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Stack direction="row">
                <Box width="50%">
                  <TextField
                    {...getFieldProps("amountHeaders[0]")}
                    size="small"
                    placeholder="Subtotal"
                    InputProps={{
                      sx: { fontWeight: 600 },
                    }}
                  />
                </Box>
                <Box width="50%">
                  <Typography variant="subtitle1" textAlign="right">
                    {calculateSubtotal()}
                  </Typography>
                </Box>
              </Stack>

              <Stack direction="row" alignItems="center">
                <Box width="50%">
                  <TextField
                    {...getFieldProps("amountHeaders[1]")}
                    size="small"
                    placeholder="Tax"
                    InputProps={{
                      sx: { fontWeight: 600 },
                    }}
                  />
                </Box>
                <Box width="50%">
                  <TextField
                    {...getFieldProps("tax")}
                    size="small"
                    placeholder="0"
                    InputProps={{
                      sx: {
                        fontWeight: 600,
                        "& input": { textAlign: "right" },
                      },
                    }}
                  />
                </Box>
                <Typography variant="subtitle1">%</Typography>
              </Stack>

              <Stack direction="row" alignItems="center">
                <Box width="50%">
                  <TextField
                    {...getFieldProps("amountHeaders[2]")}
                    size="small"
                    placeholder="Discount"
                    InputProps={{ sx: { fontWeight: 600 } }}
                  />
                </Box>
                <Box width="50%">
                  <TextField
                    {...getFieldProps("discount")}
                    size="small"
                    placeholder="0"
                    InputProps={{
                      sx: {
                        fontWeight: 600,
                        "& input": { textAlign: "right" },
                      },
                    }}
                  />
                </Box>
                <Typography variant="subtitle1">%</Typography>
              </Stack>

              <Divider color="#425b76" sx={{ borderWidth: 1 }} />

              <Stack direction="row" alignItems="center">
                <Box width="50%">
                  <TextField
                    {...getFieldProps("amountHeaders[3]")}
                    size="small"
                    placeholder="Total"
                    InputProps={{ sx: { fontWeight: 600 } }}
                  />
                </Box>
                <Box width="50%">
                  <Typography variant="subtitle1" textAlign="right">
                    {calculateTotal()}
                  </Typography>
                </Box>
              </Stack>
            </Grid>

            <Grid item xs={12}>
              <Typography variant="subtitle1" textAlign="center">
                This invoice was created using the HubSpot Invoice Template
                Generator
              </Typography>
            </Grid>
          </Grid>
        </Card>

        <Box
          sx={{ mx: "auto", width: "100%", maxWidth: 800, pt: 3 }}
          textAlign="right"
        >
          <Button
            variant="contained"
            size="large"
            onClick={() => handleSubmit()}
          >
            Download Now
          </Button>
        </Box>
      </Container>
    </RootStyle>
  );
}
