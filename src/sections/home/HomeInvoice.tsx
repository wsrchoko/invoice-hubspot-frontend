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
} from "@mui/material";

// components
import { UploadAvatar } from "../../components/upload";
import { MotionViewport } from "../../components/animate";
//

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
  const handleDrop = useCallback(
    (acceptedFiles) => {
      const file = acceptedFiles[0];
      if (file) {
        // var reader = new FileReader();
        // reader.readAsDataURL(file);
        // reader.onload = function () {
        //   console.log(reader.result);
        // };
        setPhotoURL({
          ...file,
          preview: URL.createObjectURL(file),
        });
      }
    },
    [setPhotoURL]
  );

  return (
    <RootStyle>
      <Container component={MotionViewport}>
        <Card
          sx={{
            mx: "auto",
            width: "100%",
            maxWidth: 800,
            borderRadius: 0,
            p: (theme) => ({ xs: theme.spacing(3), sm: theme.spacing(3, 6) }),
          }}
        >
          <Grid container sx={{ color: "#2d3e50" }} spacing={3}>
            <Grid item xs={12} sm={6}>
              <Typography component="h2" variant="h3" mb={3}>
                Invoice
              </Typography>

              <Stack mb={0.5}>
                <TextField
                  size="small"
                  placeholder="Your Company*"
                  InputProps={{ sx: { fontWeight: 600 } }}
                />

                <TextField
                  size="small"
                  placeholder="Your First and Last Name*"
                />

                <TextField size="small" placeholder="Company Website*" />

                <TextField size="small" placeholder="Company Address" />

                <TextField size="small" placeholder="City, State ZIP" />

                <TextField size="small" placeholder="Country" />

                <TextField size="small" placeholder="Phone No.*" />

                <TextField size="small" placeholder="Email Address*" />
              </Stack>

              <Stack>
                <TextField
                  size="small"
                  placeholder="Client's Company"
                  InputProps={{ sx: { fontWeight: 600 } }}
                />

                <TextField size="small" placeholder="Client's Name" />

                <TextField size="small" placeholder="Client's Address" />

                <TextField size="small" placeholder="City, State ZIP" />

                <TextField size="small" placeholder="Country" />
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
                    size="small"
                    placeholder="####"
                    InputProps={{ sx: { "& input": { textAlign: "right" } } }}
                  />
                </Box>
              </Stack>

              <Stack direction="row">
                <Box width="50%">
                  <TextField
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
                    type="date"
                    size="small"
                    InputProps={{ sx: { "& input": { textAlign: "right" } } }}
                  />
                </Box>
              </Stack>

              <Stack direction="row">
                <Box width="50%">
                  <TextField
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
                    type="date"
                    size="small"
                    InputProps={{ sx: { "& input": { textAlign: "right" } } }}
                  />
                </Box>
              </Stack>
            </Grid>

            <Grid item xs={12}>
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
                    <TableRow
                      sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
                      }}
                    >
                      <TableCell>
                        <TextField
                          size="small"
                          placeholder="00"
                          InputProps={{ sx: { fontWeight: 600 } }}
                        />
                      </TableCell>
                      <TableCell>
                        <TextField
                          size="small"
                          placeholder="Item description"
                          InputProps={{ sx: { fontWeight: 600 } }}
                        />
                      </TableCell>
                      <TableCell>
                        <TextField
                          size="small"
                          placeholder="0"
                          InputProps={{ sx: { fontWeight: 600 } }}
                        />
                      </TableCell>
                      <TableCell>
                        <TextField
                          size="small"
                          placeholder="$0.00"
                          InputProps={{ sx: { fontWeight: 600 } }}
                        />
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>

              <Button variant="contained" fullWidth>
                Add More
              </Button>
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
                  multiline
                  size="small"
                  placeholder="Any additional comments"
                  InputProps={{ sx: { fontWeight: 600 } }}
                />
              </Stack>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Stack direction="row">
                <Box width="50%">
                  <TextField
                    size="small"
                    placeholder="Subtotal"
                    InputProps={{
                      sx: { fontWeight: 600 },
                    }}
                  />
                </Box>
                <Box width="50%">
                  <Typography variant="subtitle1" textAlign="right">
                    0.00
                  </Typography>
                </Box>
              </Stack>

              <Stack direction="row" alignItems="center">
                <Box width="50%">
                  <TextField
                    size="small"
                    placeholder="Tax"
                    InputProps={{
                      sx: { fontWeight: 600 },
                    }}
                  />
                </Box>
                <Box width="50%">
                  <TextField
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
                    size="small"
                    placeholder="Discount"
                    InputProps={{ sx: { fontWeight: 600 } }}
                  />
                </Box>
                <Box width="50%">
                  <TextField
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
                    size="small"
                    placeholder="Total"
                    InputProps={{ sx: { fontWeight: 600 } }}
                  />
                </Box>
                <Box width="50%">
                  <Typography variant="subtitle1" textAlign="right">
                    0.00
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
          <Button variant="contained" size="large">Download Now</Button>
        </Box>
      </Container>
    </RootStyle>
  );
}
