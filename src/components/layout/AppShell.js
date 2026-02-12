"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function AppShell({ locale, children }) {
  return (
    <Box sx={{ minHeight: "100dvh", display: "flex", flexDirection: "column" }}>
      <Header locale={locale} />
      <Box component="main" sx={{ flex: 1, py: { xs: 3, md: 5 } }}>
        {children}
      </Box>
      <Footer locale={locale} />
    </Box>
  );
}

