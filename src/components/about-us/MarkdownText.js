import * as React from "react";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

function isHeading(line) {
  return typeof line === "string" && line.trim().startsWith("###");
}

function stripHeading(line) {
  return line.replace(/^###\s*/, "").trim();
}

export default function MarkdownText({ text }) {
  if (!text) return null;

  const blocks = String(text)
    .replace(/\r\n/g, "\n")
    .split("\n\n")
    .map((b) => b.trim())
    .filter(Boolean);

  return (
    <Stack spacing={1.25}>
      {blocks.map((block, idx) => {
        if (isHeading(block)) {
          return (
            <Typography key={idx} variant="h6" sx={{ fontWeight: 800 }}>
              {stripHeading(block)}
            </Typography>
          );
        }

        return (
          <Typography
            key={idx}
            variant="body1"
            color="text.secondary"
            sx={{ whiteSpace: "pre-line" }}
          >
            {block}
          </Typography>
        );
      })}
    </Stack>
  );
}

