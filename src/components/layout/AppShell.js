import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function AppShell({ locale, children }) {
  return (
    <Box sx={{ minHeight: "100dvh", display: "flex", flexDirection: "column" }}>
      <Header locale={locale} />
      <Container component="main" sx={{ flex: 1, py: { xs: 3, md: 5 } }}>
        {children}
      </Container>
      <Footer locale={locale} />
    </Box>
  );
}

