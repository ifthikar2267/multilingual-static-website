import Image from "next/image";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

/* ---------- Paragraph Parser ---------- */
const parseParagraphs = (text = "") => {
  if (!text) return [];

  // Decode escaped HTML tags
  const decoded = text
    .replace(/\\u003C/g, "<")
    .replace(/\\u003E/g, ">");

  // Extract <p>...</p> blocks
  const matches = decoded.match(/<p>(.*?)<\/p>/gis);

  if (!matches) {
    // fallback: treat whole text as content
    return [decoded.trim()];
  }

  return matches.map((p) =>
    p.replace(/<\/?p>/gi, "").trim()
  );
};
/* -------------------------------------- */

export default function FeaturedCards({ cards }) {
  if (!Array.isArray(cards) || cards.length === 0) return null;

  return (
    <Box component="section">
      <Grid container spacing={{ xs: 3, md: 4 }}>
        {cards
          .filter((c) => c?.enabled !== false)
          .map((card, idx) => {
            const imageFirst = idx % 2 === 0;
            const paragraphs = parseParagraphs(card?.description);

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
                    {/* Image */}
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
                          bgcolor: "white",
                        }}
                      >
                        {card?.image?.url && (
                          <Image
                            src={card.image.url}
                            alt={
                              card.image.alt ||
                              card.title ||
                              "Featured"
                            }
                            fill
                            sizes="(max-width: 900px) 100vw, 50vw"
                            style={{ objectFit: "contain" }}
                          />
                        )}
                      </Box>
                    </Grid>

                    {/* Content */}
                    <Grid
                      item
                      xs={12}
                      md={6}
                      order={{ xs: 1, md: imageFirst ? 1 : 0 }}
                    >
                      <Box sx={{ p: { xs: 3, md: 4 } }}>
                        {card?.title && (
                          <Typography
                            variant="h4"
                            sx={{
                              fontFamily: "Gilroy-Bold",
                              fontSize: "34px",
                              fontWeight: 700,
                              lineHeight: "52px",
                              margin: "0 0 10px",
                              color: "#E04E39",
                            }}
                          >
                            {card.title}
                          </Typography>
                        )}

                        <Box sx={{ mt: 1.5 }}>
                          {paragraphs.map((para, i) => (
                            <Typography
                              key={i}
                              sx={{
                                fontFamily: "Gilroy",
                                fontSize: "17px",
                                lineHeight: "24px",
                                color: "#333",
                                margin: "0 0 16px",
                                whiteSpace: "pre-line",
                              }}
                            >
                              {para}
                            </Typography>
                          ))}
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
