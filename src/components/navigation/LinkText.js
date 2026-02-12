"use client";

import Link from "next/link";
import Typography from "@mui/material/Typography";

export default function LinkText({ href, children, style, ...typographyProps }) {
  return (
    <Link href={href} style={{ textDecoration: "none", ...(style || {}) }}>
      <Typography {...typographyProps}>{children}</Typography>
    </Link>
  );
}

