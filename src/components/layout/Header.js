"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

function swapLocaleInPath(pathname, nextLocale) {
  const parts = (pathname || "/").split("/");
  // ["", "en", "about-us", ...]
  if (parts.length > 1) parts[1] = nextLocale;
  return parts.join("/") || "/";
}

export default function Header({ locale }) {
  const pathname = usePathname();

  const otherLocale = locale === "ar" ? "en" : "ar";
  const switchHref = swapLocaleInPath(pathname, otherLocale);

  return (
    <AppBar position="sticky" elevation={0} color="transparent">
      <Toolbar
        sx={{
          borderBottom: "1px solid",
          borderColor: "divider",
          bgcolor: "background.paper",
        }}
      >
        <Typography
          variant="h6"
          sx={{ fontWeight: 700, letterSpacing: 0.2, flex: 1 }}
        >
          <Link
            href={`/${locale}/about-us`}
            style={{ color: "inherit", textDecoration: "none" }}
          >
            Discover Saudi
          </Link>
        </Typography>

        <Box sx={{ display: "flex", gap: 1 }}>
          <Button component="a" href={`/${locale}/about-us`} color="inherit">
            About Us
          </Button>
          <Button component="a" href={switchHref} variant="outlined">
            {otherLocale === "ar" ? "العربية" : "English"}
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

