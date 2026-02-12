import Image from "next/image";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

import MarkdownText from "@/components/about-us/MarkdownText";

/* ---------- Section Parser ---------- */
const parseSections = (text = "") => {
  const normalized = text.replace(/\\n/g, "\n");
  const blocks = normalized.split(/(?=###)/g);

  return blocks
    .map((block) => {
      const trimmed = block.trim();
      if (!trimmed) return null;

      if (trimmed.startsWith("###")) {
        const withoutHashes = trimmed.replace(/^###\s*/, "");
        const lines = withoutHashes.split("\n");

        const title = lines.shift().trim();
        const content = lines.join("\n").trim();

        return { title, content };
      }

      return { title: null, content: trimmed };
    })
    .filter(Boolean);
};
/* ------------------------------------- */

export default function FeaturedCards({ cards }) {
  if (!Array.isArray(cards) || cards.length === 0) return null;

  return (
    <Box component="section" sx={{mb:5}}>
      <Grid container spacing={{ xs: 3, md: 4 , mt: { xs: -6, md: -50 }}}>
        {cards
          .filter((c) => c?.enabled !== false)
          .map((card, idx) => {
            const sections = parseSections(card?.description);

            // Alternate layout
            const textFirst = idx % 2 === 0;

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
                      order={{ xs: 0, md: textFirst ? 1 : 0 }}
                    >
                      <Box
                        sx={{
                          position: "relative",
                          height: { xs: 240, sm: 320, md: "100%" },
                          minHeight: { md: 360 },
                          bgcolor: "white",
                        }}
                      >
                        {card?.image?.url ? (
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
                        ) : null}
                      </Box>
                    </Grid>

                    {/* Content */}
                    <Grid
                      item
                      xs={12}
                      md={6}
                      order={{ xs: 1, md: textFirst ? 0 : 1 }}
                    >
                      <Box sx={{ p: { xs: 3, md: 4 } }}>
                        {card?.title && (
                          <Typography
                            variant="h5"
                            sx={{
                              fontFamily: "Gilroy-Bold",
                              fontSize: "34px",
                              fontWeight: 700,
                              lineHeight: "52px",
                              margin: "0 0 32px",
                              color: "#E04E39",
                            }}
                          >
                            {card.title}
                          </Typography>
                        )}

                        <Box sx={{ mt: 1.5 }}>
                          {sections.map((section, index) => (
                            <Box key={index} sx={{ mb: 2 }}>
                              {section.title && (
                                <Typography
                                  sx={{
                                    fontFamily: "Gilroy-Semibold",
                                    fontSize: "17px",
                                    lineHeight: "24px",
                                    fontWeight: 600,
                                    color: "#333",
                                    margin: "0 0 4px",
                                  }}
                                >
                                  {section.title}
                                </Typography>
                              )}

                              {section.content && (
                                <Typography
                                  sx={{
                                    fontSize: "17px",
                                    fontFamily: "Gilroy-Semibold",
                                    color: "#333",
                                    lineHeight: "24px",
                                    margin: "0 0 16px",
                                    whiteSpace: "pre-line",
                                  }}
                                >
                                  {section.content}
                                </Typography>
                              )}
                            </Box>
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
