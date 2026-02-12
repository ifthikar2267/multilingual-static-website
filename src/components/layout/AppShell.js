import Box from "@mui/material/Box";
import HeaderClient from "@/components/layout/HeaderClient";
import Footer from "@/components/layout/Footer";

export default function AppShell({ locale, children }) {
  return (
    <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <HeaderClient locale={locale} />

      {/* No container here */}
      <Box component="main" sx={{ flex: 1 }}>
        {children}
      </Box>

      <Footer locale={locale} />
    </Box>
  );
}
