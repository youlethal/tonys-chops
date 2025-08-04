export interface BrandingConfig {
  businessName: string;
  logoUrl?: string;
  primaryColor: string;
  accentColor: string;
  fontFamily: string;
}

export const defaultConfig = {
  branding: {
    businessName: "Tonys Chops",
    primaryColor: "#3B82F6",
    accentColor: "#10B981",
    fontFamily: "Inter, sans-serif"
  },
  modules: ["hero", "about", "contact", "footer"],
  darkMode: false
};

export function applyBranding(branding: BrandingConfig) {
  const root = document.documentElement;
  root.style.setProperty('--primary-color', branding.primaryColor);
  root.style.setProperty('--accent-color', branding.accentColor);
  root.style.setProperty('--font-family', branding.fontFamily);
}