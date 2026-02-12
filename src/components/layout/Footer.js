import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
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
            <a href={`/${locale}/about-us`} style={{ textDecoration: "none" }}>
              <Typography variant="body2" component="span">
                About
              </Typography>
            </a>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}

