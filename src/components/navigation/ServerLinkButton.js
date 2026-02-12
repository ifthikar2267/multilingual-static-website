import Button from "@mui/material/Button";

/**
 * Server-safe document navigation button.
 * Uses a real <a href> so the browser requests a full SSR Document.
 */
export default function ServerLinkButton({ href, children, ...buttonProps }) {
  return (
    <Button component="a" href={href} {...buttonProps}>
      {children}
    </Button>
  );
}

