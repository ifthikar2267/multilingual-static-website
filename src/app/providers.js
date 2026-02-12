import ThemeRegistry from "@/theme/ThemeRegistry";

export default function Providers({ children, direction }) {
  return (
    <ThemeRegistry direction={direction || "ltr"}>{children}</ThemeRegistry>
  );
}

