import { THEME } from "@/config/theme";

export function generateThemeVariables() {
    return {
        "--background": THEME.colors.background,
        "--foreground": THEME.colors.foreground,
        "--primary": THEME.colors.primary,
        "--secondary": THEME.colors.secondary,
        "--border": THEME.colors.border,
        "--muted": THEME.colors.muted,
    } as React.CSSProperties;
}
