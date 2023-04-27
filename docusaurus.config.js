const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')
const math = require('remark-math')
const katex = require('rehype-katex')
const gtm = require('docusaurus-gtm-plugin')

const metaDescription =
  'Documentation of Topos, a consensusless, trustless, and proof-based ecosystem of interoperable blockchains built for a decentralized internet'
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
          remarkPlugins: [math],
          rehypePlugins: [katex],
          editUrl: ({ versionDocsDirPath, docPath }) =>
            `https://github.com/toposware/docs/edit/master/${versionDocsDirPath}/${docPath}`,
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  plugins: [[gtm, { id: 'GTM-MMSJVKH' }]],
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
            to: 'https://twitter.com/Topos_Network',
            position: 'right',
            className: 'social twitter',
          },
          {
            to: 'https://www.linkedin.com/company/toposware',
            position: 'right',
            className: 'social linkedin',
          },
          {
            to: 'https://medium.com/topos-network',
            position: 'right',
            className: 'social medium',
          },
          {
            to: 'https://github.com/topos-network',
            position: 'right',
            className: 'social github',
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      algolia: {
        // The application ID provided by Algolia
        appId: 'S36OISFKTX',

        // Public API key: it is safe to commit it
        apiKey: '0fa2fba08c391e0b749497138ce5d965',

        indexName: 'toposware',
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
