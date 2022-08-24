import { ReactNode } from "react";
// components
import MainLayout from "./main";

// ----------------------------------------------------------------------

type Props = {
  children: ReactNode;
  variant?: "main";
};

export default function Layout({ variant = "main", children }: Props) {
  if (variant === "main") {
    return <MainLayout>{children}</MainLayout>;
  }

  return <> {children} </>;
}
