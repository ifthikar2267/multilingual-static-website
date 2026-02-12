export function getStrapiImage(media) {
  const attrs = media?.data?.attributes;
  if (!attrs) return null;

  return {
    url: attrs.url || null,
    width: attrs.width || null,
    height: attrs.height || null,
    alt: attrs.alternativeText || "",
  };
}

