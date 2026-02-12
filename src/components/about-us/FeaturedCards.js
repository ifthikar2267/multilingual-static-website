import Image from "next/image";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

import MarkdownText from "@/components/about-us/MarkdownText";

export default function FeaturedCards({ cards, locale }) {
  const isRTL = locale === "ar";
  if (!Array.isArray(cards) || cards.length === 0) return null;

  return (
    <Box component="section">
      <Grid container spacing={{ xs: 3, md: 3 }}>
        {cards
          .filter((c) => c?.enabled !== false)
          .map((card, idx) => {
            const imageFirst = idx % 2 === 0;

            return (
              <Grid key={card.id || idx} item xs={12}>
                <Paper
                  variant="outlined"
                  sx={{
                    overflow: "hidden",
                    borderRadius: { xs: 2, md: 2 },
                  }}
                >
                  <Grid container>
                    <Grid
                      item
                      xs={12}
                      md={6}
                      order={{ xs: 0, md: imageFirst ? 0 : 1 }}
                    >
                      <Box
                        sx={{
                          position: "relative",
                          height: { xs: 240, sm: 320, md: "100%" },
                          minHeight: { md: 360 },
                          bgcolor: "grey.100",
                        }}
                      >
                        {card?.image?.url ? (
                          <Image
                            src={card.image.url}
                            alt={card.image.alt || card.title || "Featured"}
                            fill
                            sizes="(max-width: 900px) 100vw, 50vw"
                            style={{ objectFit: "cover" }}
                          />
                        ) : null}
                      </Box>
                    </Grid>

                    <Grid
                      item
                      xs={12}
                      md={6}
                      order={{ xs: 1, md: imageFirst ? 1 : 0 }}
                    >
                      <Box sx={{ p: { xs: 3, md: 4 } }}>
                        {card?.title ? (
                          <Typography
                            variant="overline"
                            sx={{ letterSpacing: 1.0, fontWeight: 800, fontSize: 40, color: "#ff5e00", textAlign: isRTL ? "right" : "left" }}
                            
                          >
                            {card.title}
                          </Typography>
                        ) : null}

                        <Box sx={{ mt: 1.5 }}>
                          <MarkdownText text={card?.description} />
                        </Box>
                      </Box>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
            );
          })}
      </Grid>
    </Box>
  );
}

