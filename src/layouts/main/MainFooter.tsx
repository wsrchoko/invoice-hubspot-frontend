// next
import NextLink from "next/link";
// @mui
import { styled } from "@mui/material/styles";
import {
  Grid,
  Link,
  Divider,
  Container,
  Typography,
  Stack,
} from "@mui/material";
// components
import Logo from "../../components/Logo";
import SocialsButton from "../../components/SocialsButton";

// ----------------------------------------------------------------------

const LINKS = [
  {
    headline: "Popular Features",
    children: [
      { name: "Free Meeting Scheduler App", href: "#" },
      { name: "Social Media Tools", href: "#" },
      { name: "Email Tracking Software", href: "#" },
      { name: "Sales Email Automation", href: "#" },
      { name: "Ads Software", href: "#" },
      { name: "Email Marketing Software", href: "#" },
      { name: "Lead Management Software", href: "#" },
      { name: "Pipeline Management Tools", href: "#" },
    ],
  },
  {
    headline: "",
    children: [
      { name: "Sales Email Templates", href: "#" },
      { name: "Help Desk Software", href: "#" },
      { name: "Free Online Form Builder", href: "#" },
      { name: "Free Chatbot Builder", href: "#" },
      { name: "Free Live Chat Software", href: "#" },
      { name: "Marketing Analytics", href: "#" },
      { name: "Free Landing Page Builder", href: "#" },
    ],
  },
  {
    headline: "Free Tools",
    children: [
      { name: "Website Grader", href: "#" },
      { name: "Make My Persona", href: "#" },
      { name: "Email Signature Generator", href: "#" },
      { name: "Blog Ideas Generator", href: "#" },
      { name: "Invoice Template Generator", href: "#" },
      { name: "Marketing Plan Generator", href: "#" },
      { name: "Free Business Templates", href: "#" },
      { name: "Industry Benchmark Data", href: "#" },
      { name: "Software Comparisons Library", href: "#" },
      { name: "Website Themes & Templates", href: "#" },
    ],
  },
  {
    headline: "Company",
    children: [
      { name: "About Us", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Management Team", href: "#" },
      { name: "Board of Directors", href: "#" },
      { name: "Investor Relations", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Contact Us", href: "#" },
    ],
  },
  {
    headline: "Customers",
    children: [
      { name: "Customer Support", href: "#" },
      { name: "Join a Local User Group", href: "#" },
    ],
  },
];

const RootStyle = styled("div")(({ theme }) => ({
  position: "relative",
  backgroundColor: "#213343",
}));

// ----------------------------------------------------------------------

export default function MainFooter() {
  return (
    <RootStyle>
      <Container sx={{ py: 10 }}>
        <Grid
          container
          justifyContent={{ xs: "center", md: "space-between" }}
          sx={{ textAlign: { xs: "center", md: "left" } }}
        >
          <Grid item xs={12}>
            <Stack
              spacing={5}
              direction={{ xs: "column", md: "row" }}
              justifyContent="space-between"
            >
              {LINKS.map((list) => (
                <Stack key={list.headline} spacing={2}>
                  <Typography
                    component="h2"
                    variant="subtitle2"
                    color={(theme) => theme.palette.common.white}
                  >
                    {list.headline}
                  </Typography>
                  {list.children.map((link) => (
                    <NextLink key={link.name} href={link.href} passHref>
                      <Link
                        color="#b6c7d6"
                        variant="body2"
                        sx={{ display: "block" }}
                      >
                        {link.name}
                      </Link>
                    </NextLink>
                  ))}
                </Stack>
              ))}
            </Stack>
          </Grid>
        </Grid>

        <Grid container>
          <Grid item xs={12}>
            <Stack direction="row" justifyContent="center" sx={{ mt: 3 }}>
              <SocialsButton />
            </Stack>
          </Grid>

          <Grid item xs={12}>
            <Stack sx={{ mt: 3 }} alignItems="center" spacing={1}>
              <Logo
                type="full_white"
                sx={{ mx: { xs: "auto", md: "inherit" } }}
              />

              <Typography variant="caption" fontWeight="bold" color="#b6c7d6">
                Copyright © 2022 HubSpot, Inc.
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}
