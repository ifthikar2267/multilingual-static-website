import Image from "next/image";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function HeroSection({ hero }) {
  const image = hero?.image;

  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        overflow: "hidden",
        minHeight: { xs: 260, sm: 320, md: 420 },
      }}
    >
      {image?.url ? (
        <Image
          src={image.url}
          alt={image.alt || hero?.title || "About Us"}
          fill
          priority
          sizes="(max-width: 900px) 100vw, 900px"
          style={{ objectFit: "cover" }}
        />
      ) : (
        <Box sx={{ position: "absolute", inset: 0, bgcolor: "grey.200" }} />
      )}

      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(90deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.15) 60%, rgba(0,0,0,0) 100%)",
        }}
      />

      <Box
        sx={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "flex-end",
          p: { xs: 3, md: 5 },
        }}
      >
        <Box sx={{ maxWidth: 720 }}>
          <Typography
            variant="h3"
            sx={{
              color: "common.white",
              fontWeight: 300,
              lineHeight: 1.1,
              fontSize: { xs: 32, sm: 40, md: 52 },
            }}
          >
            {hero?.title || "About Us"}
          </Typography>

          {hero?.subTitle ? (
            <Typography
              variant="subtitle1"
              sx={{ color: "rgba(255,255,255,0.9)", mt: 1.5 }}
            >
              {hero.subTitle}
            </Typography>
          ) : null}
        </Box>
      </Box>
    </Box>
  );
}

