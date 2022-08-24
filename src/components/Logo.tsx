import { forwardRef } from "react";
import NextLink from "next/link";
// @mui
import { Box, BoxProps } from "@mui/material";

// ----------------------------------------------------------------------

interface Props extends BoxProps {
  type?: "full" | "single";
  disabledLink?: boolean;
}

const Logo = forwardRef<any, Props>(
  ({ disabledLink = false, type = "full", sx }, ref) => {
    const logo = (
      <Box
        component="img"
        alt="logo"
        src={`/logo/logo_${type}.svg`}
        width={100}
        height={30}
        {...(type === "single" && {
          width: 30,
          height: 30,
        })}
        sx={{ ...sx }}
      />
    );

    if (disabledLink) {
      return <>{logo}</>;
    }

    return <NextLink href="/">{logo}</NextLink>;
  }
);

export default Logo;
