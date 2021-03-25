module.exports = {
  title: 'Kira Yang',
  tagline: 'Here is how I grow my hippocampus :)',
  url: 'https://codeewander.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'codeewander', // Usually your GitHub org/user name.
  projectName: 'codeewander.github.io', // Usually your repo name.
  themeConfig: {
    hideSidebar: true,
    navbar: {
      title: 'Kira Yang',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo-lightMode.svg',
        href: 'https://codeewander.github.io',
      },
      items: [
        {
          to: 'docs/html/html-tags',
          position: 'left',
          label: 'Tech Notes',
        },
        {
          to: 'docs/creative-coding/data-visualization',
          position: 'left',
          label: 'Creative Coding',
        },
        {
          href: 'https://www.linkedin.com/in/chang-ru-yang/',
          position: 'right',
          className: 'linkedIn',
          'aria-label': 'LinkedIn',
          external: true 
        },
        {
          href: 'https://github.com/codeewander',
          position: 'right',
          className: 'github-link',
          'aria-label': 'GitHub',
          external: true 
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        // {
        //   title: 'Docs',
        //   items: [
        //     {
        //       label: 'Style Guide',
        //       to: 'docs/',
        //     },
        //     {
        //       label: 'Second Doc',
        //       to: 'docs/doc2/',
        //     },
        //   ],
        // },
        // {
        //   title: 'Community',
        //   items: [
        //     {
        //       label: 'Stack Overflow',
        //       href: 'https://stackoverflow.com/questions/tagged/docusaurus',
        //     },
        //     {
        //       label: 'Discord',
        //       href: 'https://discordapp.com/invite/docusaurus',
        //     },
        //     {
        //       label: 'Twitter',
        //       href: 'https://twitter.com/docusaurus',
        //     },
        //   ],
        // },
        // {
        //   title: 'More',
        //   items: [
        //     {
        //       label: 'Blog',
        //       to: 'blog',
        //     },
        //     {
        //       label: 'GitHub',
        //       href: 'https://github.com/facebook/docusaurus',
        //     },
        //   ],
        // },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Kira Yang. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          path: 'docs',
          // routeBasePath: '/docs'
          // Please change this to your repo.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
