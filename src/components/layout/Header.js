import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ServerLinkButton from "@/components/navigation/ServerLinkButton";

export default function Header({ locale }) {
  const otherLocale = locale === "ar" ? "en" : "ar";
  const switchHref = `/${otherLocale}/about-us`;

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
          <a
            href={`/${locale}/about-us`}
            style={{ color: "inherit", textDecoration: "none" }}
          >
            Discover Saudi
          </a>
        </Typography>

        <Box sx={{ display: "flex", gap: 1 }}>
          <ServerLinkButton href={`/${locale}/about-us`} color="inherit">
            About Us
          </ServerLinkButton>

          {/* Full document navigation for locale switch (ensures SSR HTML in Document response). */}
          <Button component="a" href={switchHref} variant="outlined">
            {otherLocale === "ar" ? "العربية" : "English"}
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

