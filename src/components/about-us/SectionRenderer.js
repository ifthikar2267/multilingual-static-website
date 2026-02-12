import CardGrid from "@/components/about-us/CardGrid";
import LogoSection from "@/components/about-us/LogoSection";

export default function SectionRenderer({ section }) {
  const type = section?.component;

  switch (type) {
    case "common.logos-section":
      return <LogoSection section={section} />;
    case "common.activities":
    case "common.card-section":
    default:
      return <CardGrid section={section} />;
  }
}

