"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Link from "next/link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

export default function Footer({ locale }) {
  return (
    <Box component="footer" sx={{ bgcolor: "background.paper" }}>
      <Divider />
      <Container sx={{ py: 3 }}>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={1}
          justifyContent="space-between"
          alignItems={{ xs: "flex-start", sm: "center" }}
        >
          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} Discover Saudi
          </Typography>

          <Stack direction="row" spacing={2}>
            <Typography
              variant="body2"
              component={Link}
              href={`/${locale}/about-us`}
              style={{ textDecoration: "none" }}
            >
              About
            </Typography>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}

