import { m } from "framer-motion";
// @mui
import { Box, Container, Typography } from "@mui/material";
// components
import { MotionViewport, varFade } from "../../components/animate";

// ----------------------------------------------------------------------

export default function HomeHowToUse() {
  return (
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
            variant="h4"
            color={(theme) => theme.palette.grey[700]}
            mb={2}
          >
            How to Use the Free Invoice Template Generator
          </Typography>
        </m.div>

        <m.div variants={varFade().inDown}>
          <Typography
            variant="body1"
            color={(theme) => theme.palette.grey[700]}
            mb={2}
          >
            Use this free invoice generator to create and download professional
            invoices to send to your customers. Start by filling in your
            business details in the invoice template below to populate the
            statement. You can add additional line items by clicking the “+ Add
            More” button. When you’re done with the details, click on the tools
            icon to the left to customize your color scheme. When complete,
            click the “Download Now” button to download the invoice PDF.
          </Typography>
          <Typography
            variant="body1"
            color={(theme) => theme.palette.grey[700]}
            mb={2}
          >
            Once you’ve downloaded the invoice, send it to your customers via
            email or print it and mail it directly.
          </Typography>
        </m.div>

        <m.div variants={varFade().inUp}>
          <Typography
            variant="h5"
            color={(theme) => theme.palette.grey[700]}
            mb={2}
          >
            Looking for more blank invoice templates to choose from?
          </Typography>
        </m.div>

        <m.div variants={varFade().inDown}>
          <Typography
            variant="subtitle1"
            color={(theme) => theme.palette.grey[700]}
          >
            We’ve created 10 free invoice templates for Microsoft Word to meet
            all of your invoicing needs. Simply fill out the form below to
            access the templates. The templates are fully editable and can be
            downloaded as a PDF to send off to your customers.
          </Typography>
        </m.div>
      </Box>
    </Container>
  );
}
