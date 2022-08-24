import { m } from "framer-motion";
// @mui
import { styled } from "@mui/material/styles";
import { Box, Container, Typography } from "@mui/material";
// components
import { MotionViewport, varFade } from "../../components/animate";

// ----------------------------------------------------------------------

const RootStyle = styled("div")(({ theme }) => ({
  paddingTop: theme.spacing(15),
}));

// ----------------------------------------------------------------------

export default function HomeStart() {
  return (
    <RootStyle>
      <Container component={MotionViewport}>
        <Box
          sx={{
            textAlign: "center",
            py: { xs: 1, md: 3 },
            maxWidth: 1000,
            mx: "auto",
          }}
        >
          <m.div variants={varFade().inUp}>
            <Typography
              variant="h3"
              component="h1"
              color={(theme) => theme.palette.grey[700]}
              mb={1}
            >
              Invoice Template Generator
            </Typography>
          </m.div>
          <m.div variants={varFade().inDown}>
            <Typography variant="h5" color={(theme) => theme.palette.grey[700]}>
              Fill in your business details in the invoice template below to
              create a professional invoice for your customers.
            </Typography>
          </m.div>
        </Box>
      </Container>
    </RootStyle>
  );
}
