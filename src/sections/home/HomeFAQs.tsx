import { m } from "framer-motion";
// @mui
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import { styled } from "@mui/material/styles";
import { Box, Container, Typography } from "@mui/material";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
// components
import Iconify from "../../components/Iconify";
import { MotionViewport, varFade } from "../../components/animate";

// ----------------------------------------------------------------------

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
  "&.Mui-expanded": {
    borderRadius: 0,
    boxShadow: "unset",
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<Iconify icon="ic:round-arrow-forward-ios" />}
    {...props}
  />
))(({ theme }) => ({
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  textAlign: "left",
  padding: theme.spacing(1, 5),
}));

// ----------------------------------------------------------------------

export default function HomeFAQs() {
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
            variant="h3"
            component="h1"
            color={(theme) => theme.palette.grey[700]}
            mb={5}
          >
            Invoice FAQs
          </Typography>
        </m.div>

        <m.div variants={varFade().inDown}>
          <Accordion>
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <Typography
                variant="h5"
                color={(theme) => theme.palette.grey[700]}
              >
                What is an Invoice?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                variant="body1"
                component="span"
                color={(theme) => theme.palette.grey[700]}
              >
                An invoice, or sales invoices, is a billing document issued by a
                seller to a customer.
                <br />
                <br />
                The document typically:
                <br />
                <br />
                <ul style={{ listStylePosition: "inside" }}>
                  <li>Details the contact and billing information</li>
                  <li>Quantifies an itemized list of goods or services sold</li>
                  <li>Provides a clear total for the purchase</li>
                  <li>Defines any discounts or specific payment terms</li>
                  <li>Contains a unique invoice number and date</li>
                </ul>
              </Typography>
            </AccordionDetails>
          </Accordion>
        </m.div>

        <m.div variants={varFade().inDown}>
          <Accordion>
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <Typography
                variant="h5"
                color={(theme) => theme.palette.grey[700]}
              >
                What is an Invoice Number?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                variant="body1"
                color={(theme) => theme.palette.grey[700]}
              >
                An invoice number is a unique number that you assign to each new
                invoice you create. These numbers are then used to organize and
                track each invoice you send.
                <br />
                <br />
                Your invoice numbers should be assigned in sequential order. For
                example, your very first invoice might be “invoice no. 1,”
                followed by “invoice no. 2,” and so on. Invoice numbers aren’t
                specific to one customer, so you should keep a running total
                across all of the invoices you send.
                <br />
                <br />
                That being said, some businesses choose to adapt their numbering
                system to meet their individual needs. This might mean that you
                choose to incorporate the date into your invoice number for
                filing purposes, like this: 20172711-001.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </m.div>

        <m.div variants={varFade().inDown}>
          <Accordion>
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <Typography
                variant="h5"
                color={(theme) => theme.palette.grey[700]}
              >
                How to Make an Invoice
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                variant="body1"
                component="span"
                color={(theme) => theme.palette.grey[700]}
              >
                <ol style={{ listStylePosition: "inside" }}>
                  <li>Include the word "Invoice."</li>
                  <li>Assign a unique invoice number and date.</li>
                  <li>Provide your business name and contact information.</li>
                  <li>
                    List out the details of the product(s) or service(s) you
                    provided -- include quantity, rates, hours, etc.
                  </li>
                  <li>
                    Provide the name and contact information of the customer.
                  </li>
                  <li>Highlight the subtotal.</li>
                  <li>
                    Specify any payment details or a due date if necessary.
                  </li>
                </ol>
                <br />
                While your invoice details will change slightly depending on
                whether you are providing a service or a product (e.g., billable
                hours and rate vs. quantity and cost), the above guidelines
                serve as best practices for creating a professional invoice.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </m.div>

        <m.div variants={varFade().inDown}>
          <Accordion>
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <Typography
                variant="h5"
                color={(theme) => theme.palette.grey[700]}
              >
                How to Send an Invoice
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                variant="body1"
                component="span"
                color={(theme) => theme.palette.grey[700]}
              >
                When it comes to actually sending your invoice off to the
                customer, you have a couple of options:
                <br />
                <br />
                <ol style={{ listStylePosition: "inside" }}>
                  <li>Send the invoice electronically via email or website.</li>
                  <li>Send the invoice via postal mail.</li>
                </ol>
                <br />
                When sending an invoice electronically, you may send it through
                email or directly from your accounting or invoicing software.
                For many businesses, this is a preferred sending method, as it
                allows you to deliver invoices to a customer in real time.
                Invoices that are sent electronically are often paid
                electronically -- or, less commonly, paid via mail.
                <br />
                <br />
                When sending an invoice by postal mail, make sure that you
                consider the time it will take for your invoice to arrive. While
                this tends to be the slower of the two options, many businesses
                still send invoices via postal mail to meet the needs and
                demands of their specific audiences.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </m.div>

        <m.div variants={varFade().inDown}>
          <Accordion>
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <Typography
                variant="h5"
                color={(theme) => theme.palette.grey[700]}
              >
                What's the Difference Between a Bill and an Invoice?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                variant="body1"
                color={(theme) => theme.palette.grey[700]}
              >
                The term “invoice” is often adopted in business environments to
                define a payment request for goods or services purchased by a
                specific customer. Once the customer receives the invoice, they
                will typically refer to it as a bill that they now owe to the
                seller.
                <br />
                <br />
                That being said, it’s not uncommon for the two terms to be used
                interchangeably, as they both refer to an itemized statement of
                payment owed to a seller by a buyer.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </m.div>

        <m.div variants={varFade().inDown}>
          <Accordion>
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <Typography
                variant="h5"
                color={(theme) => theme.palette.grey[700]}
              >
                What are the Most Popular Types of Invoices?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                variant="body1"
                component="span"
                color={(theme) => theme.palette.grey[700]}
              >
                <ol style={{ listStylePosition: "inside" }}>
                  <li>Standard Invoice</li>
                  <li>Shipping Invoice</li>
                  <li>Service Invoice</li>
                  <li>Pro-forma Invoice</li>
                  <li>Commercial Invoice</li>
                  <li>Recurring Invoice</li>
                </ol>
                <br />
                The standard invoice is the most common invoice type. The
                standard invoice includes all of the basic information needed to
                complete an invoice, including contact information for the buyer
                and seller, an invoice number, an invoice date, itemized
                purchases, and a clearly defined subtotal.
                <br />
                <br />
                The shipping invoice serves as a formal payment agreement for
                goods sold between a seller and a customer. For shipping
                invoices, information typically includes the cost and number of
                each item, the subtotal after shipping fees and taxes, the
                contact information of both parties, as well as an invoice date
                and number.
                <br />
                <br />
                The service invoice is often used by service businesses that
                bill customers based on hourly rates for services such as
                consultants, graphic designers, website developers, lawyers,
                auto repair technicians, and so on. On service invoices, the
                subtotal is a reflection of the billable hours invested.
                <br />
                <br />
                The pro-forma invoice can be best compared to a quote or
                estimation. The pro-forma invoice type is often used as a first
                step in negotiating a payment agreement and is not considered a
                true invoice, as it does not demand payment.
                <br />
                <br />
                The commercial invoice is used for customs in instances where
                goods are being exported across international borders. The
                commercial invoice contains many of the elements of a standard
                invoice, in addition to the manufacturing country of the goods,
                what the items are being used for, the Harmonized System codes
                (if known), the number of packages and their total weight, and
                the reason for export.
                <br />
                <br />
                The recurring invoice typically contains a fixed price and is
                sent on a monthly basis for rented goods or services such as an
                apartment, business software, cell phone bills, and so on.
                Recurring invoices will continue to be sent until the customer's
                contract or subscription expires.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </m.div>

        <m.div variants={varFade().inDown}>
          <Accordion>
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <Typography
                variant="h5"
                color={(theme) => theme.palette.grey[700]}
              >
                Where Can I Find Sample Invoices for Inspiration?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                variant="body1"
                color={(theme) => theme.palette.grey[700]}
              >
                While creating an invoice might not sound like a big branding
                opportunity, having a well-designed, professional invoice can
                make a big difference in the eye’s of your customer -- and help
                you get paid on time.
                <br />
                <br />
                Before making any type of payment, customers want to ensure that
                they are doing business with a credible, trustworthy company.
                This means your invoices should be error-free with consistent
                branding and a clear, itemized list of goods or services.
                <br />
                <br />
                If you need help organizing all of the must-have information
                that comes on an invoice, download the free invoice templates
                above.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </m.div>

        <m.div variants={varFade().inDown}>
          <Box mt={5} textAlign="left">
            <Typography
              variant="caption"
              color={(theme) => theme.palette.grey[700]}
            >
              Disclaimer: These FAQs include some information on legal issues
              surrounding invoicing, but legal information is not the same as
              legal advice -- applying the law to a specific circumstance. We’ve
              conducted research to better ensure that our information is
              accurate and useful, but we insist that you talk to a lawyer if
              you want professional assurance that our information, and your
              interpretation of it, is accurate. In a nutshell, you may not rely
              on this information as legal advice, nor as a recommendation or
              endorsement of any particular legal understanding, and you should
              instead see this info as for entertainment purposes only.
            </Typography>
          </Box>
        </m.div>
      </Box>
    </Container>
  );
}
