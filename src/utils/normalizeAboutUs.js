import { getStrapiImage } from "@/utils/strapi";

function normalizeCard(card) {
  return {
    id: card?.id ?? null,
    title: card?.title ?? null,
    description: card?.description ?? null,
    enabled: card?.enabled !== false,
    fullWidth: !!card?.fullWidth,
    url: card?.url ?? null,
    image: getStrapiImage(card?.image),
  };
}

function normalizeSection(section) {
  return {
    id: section?.id ?? null,
    component: section?.__component ?? null,
    title: section?.title ?? null,
    description: section?.description ?? null,
    cards: Array.isArray(section?.cards) ? section.cards.map(normalizeCard) : [],
    logos: Array.isArray(section?.logos?.data)
      ? section.logos.data.map((logo) => ({
          id: logo?.id ?? null,
          image: getStrapiImage({ data: logo }),
        }))
      : [],
  };
}

export function normalizeAboutUsResponse(raw) {
  const attrs = raw?.data?.attributes || {};

  const heroImage = getStrapiImage(attrs?.hero?.image);

  const featuredCards = Array.isArray(attrs?.featuredCard?.[0]?.cards)
    ? attrs.featuredCard[0].cards.map(normalizeCard)
    : [];

  const sections = Array.isArray(attrs?.sections)
    ? attrs.sections.map(normalizeSection)
    : [];

  return {
    locale: attrs?.locale || "en",
    meta: {
      title: attrs?.meta?.metaTitle || "About Us",
      description: attrs?.meta?.metaDescription || "",
    },
    hero: {
      title: attrs?.hero?.title || "",
      subTitle: attrs?.hero?.subTitle || "",
      image: heroImage,
    },
    featuredCards,
    sections,
  };
}

