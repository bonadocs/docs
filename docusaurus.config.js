import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Bonadocs",
  tagline: "Simplify Smart Contract Integrations",
  favicon: "img/favicon.ico",
  url: "https://docs.bonadocs.com",
  baseUrl: "/",

  organizationName: "Bonadocs",
  projectName: "Docs",
  trailingSlash: false,

  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: "./sidebars.js",
          editUrl: "https://github.com/bonadocs/docs",
        },

        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        respectPrefersColorScheme: true,
      },
      image: "img/bonadocs-fullmark.svg",
      navbar: {
        title: "Bonadocs",
        logo: {
          alt: "Bonadocs Logo",
          src: "img/bonadocs-docs-logo.svg",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "docsSidebar",
            label: "Docs",
            position: "left",
          },

          {
            href: "https://github.com/bonadocs/docs",
            label: "GitHub",
            position: "right",
          },
          // {
          //   href: "https://discord.gg/A7uFKCvf8V",
          //   label: "Discord",
          //   position: "right",
          // },
        ],
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      sitemap: {
        lastmod: "date",
        changefreq: "weekly",
        priority: 0.5,
        ignorePatterns: ["/tags/**"],
        filename: "sitemap.xml",
        createSitemapItems: async (params) => {
          const { defaultCreateSitemapItems, ...rest } = params;
          const items = await defaultCreateSitemapItems(rest);
          return items.filter((item) => !item.url.includes("/page/"));
        },
      },
    }),
};

export default config;
