declare module "next-themes" {
  import { ThemeProvider as Provider } from "next-themes/dist/types";

  export type ThemeProviderProps = {
    attribute?: string;
    defaultTheme?: string;
    themes?: string[];
    forcedTheme?: string;
    enableSystem?: boolean;
    enableColorScheme?: boolean;
    disableTransitionOnChange?: boolean;
    storageKey?: string;
    onChangeTheme?: (theme: string) => void;
  };

  export const ThemeProvider: React.FC<ThemeProviderProps>;
  export const useTheme: () => {
    theme: string | undefined;
    setTheme: (theme: string) => void;
    forcedTheme?: string;
    systemTheme?: "dark" | "light";
  };
}
