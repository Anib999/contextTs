export type Theme = 'dark' | 'light'
export type ThemeContextType = {
    theme: Theme;
    changeTheme: (theme: Theme) => void;
}