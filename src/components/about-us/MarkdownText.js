import * as React from "react";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

function isHeading(line) {
  return typeof line === "string" && line.trim().startsWith("###");
}

function stripHeading(line) {
  return line.replace(/^###\s*/, "").trim();
}

export default function MarkdownText({
  text,
  align = "start",
  headingVariant = "h6",
  bodyVariant = "body1",
  headingWeight = 700,
  bodyWeight = 400,
  sx,
}) {
  if (!text) return null;

  const blocks = String(text)
    .replace(/\r\n/g, "\n")
    .split("\n\n")
    .map((b) => b.trim())
    .filter(Boolean);

  return (
    <Stack spacing={1.25} sx={sx}>
      {blocks.map((block, idx) => {
        if (isHeading(block)) {
          return (
            <Typography
              key={idx}
              variant={headingVariant}
              sx={{ fontWeight: headingWeight, textAlign: align }}
            >
              {stripHeading(block)}
            </Typography>
          );
        }

        return (
          <Typography
            key={idx}
            variant={bodyVariant}
            color="text.secondary"
            sx={{ whiteSpace: "pre-line", fontWeight: bodyWeight, textAlign: align }}
          >
            {block}
          </Typography>
        );
      })}
    </Stack>
  );
}

