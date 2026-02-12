"use client";

import * as React from "react";
import ThemeRegistry from "@/theme/ThemeRegistry";
import { getAppTheme } from "@/theme/theme";

export default function Providers({ children, direction }) {
  const theme = React.useMemo(
    () => getAppTheme({ direction: direction || "ltr" }),
    [direction]
  );

  return (
    <ThemeRegistry direction={direction || "ltr"} theme={theme}>
      {children}
    </ThemeRegistry>
  );
}

