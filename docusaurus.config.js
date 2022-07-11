const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')
const math = require('remark-math')
const katex = require('rehype-katex')
const gtm = require('docusaurus-gtm-plugin')

const metaDescription =
  'Documentation of Topos, a consensusless, trust-free, privacy-enhancing interoperability protocol to bridge blockchains'
const metaImage = 'https://docs.toposware.com/img/banner-topos-seo.png'

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Topos Docs',
  tagline: 'Topos Docs',
  url: 'https://docs.toposware.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'toposware', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.
  trailingSlash: false,
  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          sidebarCollapsible: false,
          // Please change this to your repo.
          remarkPlugins: [math],
          rehypePlugins: [katex],
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  plugins: [
    [gtm, {id: 'GTM-MMSJVKH'}]
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [
        {
          name: 'author',
          content: 'Toposware',
        },
        {
          name: 'description',
          content: metaDescription,
        },
        {
          name: 'og:description',
          content: metaDescription,
        },
        {
          name: 'image',
          content: metaImage,
          property: 'og:image',
        },
        {
          name: 'og:image',
          content: metaImage,
        },
        {
          name: 'title',
          content: 'Topos Docs',
        },
        {
          name: 'og:title',
          content: 'Topos Docs',
        },
        {
          name: 'og:type',
          content: 'website',
        },
        {
          name: 'keywords',
          content: 'blockchain, interoperability, consensus, network',
        },
        {
          name: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          name: 'twitter:creator',
          content: 'Toposware',
        },
        {
          name: 'twitter:title',
          content: 'Topos Docs',
        },
        {
          name: 'twitter:description',
          content: metaDescription,
        },
        {
          name: 'og:image',
          content: metaImage,
        },
      ],
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      navbar: {
        title: 'Topos Docs',
        logo: {
          alt: 'Topos Docs',
          src: 'img/logo.svg',
        },
        items: [
          {
            label: 'Website',
            to: 'https://toposware.com',
            position: 'right',
          },
          {
            label: ' ',
            to: 'https://twitter.com/Topos_Network',
            position: 'right',
            className: 'social twitter',
          },
          {
            label: ' ',
            to: 'https://www.linkedin.com/company/toposware',
            position: 'right',
            className: 'social linkedin',
          },
          {
            label: ' ',
            to: 'https://medium.com/topos-network',
            position: 'right',
            className: 'social medium',
          },
          {
            label: ' ',
            to: 'https://github.com/toposware',
            position: 'right',
            className: 'social github',
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.11/dist/katex.min.css',
      integrity:
        'sha384-Um5gpz1odJg5Z4HAmzPtgZKdTBHZdw8S29IecapCSB31ligYPhHQZMIlWLYQGVoc',
      crossorigin: 'anonymous',
    },
  ],
}
