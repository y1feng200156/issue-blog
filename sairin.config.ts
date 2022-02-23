// theme
import { SairinConfig } from "@sairinjs/core";
import BlogTheme from "@sairinjs/sairin-theme-minimal";

export default {
  siteConfig: {
    title: 'Sairin'
  },
  theme: BlogTheme,
  themeConfig: {
    title: `Charles`,
    links: [
      {
        title: "GitHub",
        url: "https://github.com/y1feng200156",
      }
    ],
  },
} as SairinConfig;
