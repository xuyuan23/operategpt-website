const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const config = {
  title: 'OperateGPT',
  tagline: 'Revolutionize Your Operations with One-Line Requests',
  favicon: 'img/operategpt_logo_blue.svg',

  url: 'http://operategpt.cn',
  baseUrl: '/',
  organizationName: 'None',
  projectName: 'operateGPT',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/xuyuan23/operateGPT',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/xuyuan23/operateGPT',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    ({
      defaultClassicDocs: '/docs/en/README',
      navbar: {
        logo: {
          alt: 'operateGPT Logo',
          src: 'img/merge_black.svg',
          srcDark: 'img/merge_white.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'right',
            label: 'DOC',
          },
          {to: '/blog', label: 'BLOG', position: 'right'},
          {
            to: 'https://github.com/xuyuan23/operateGPT',
            label: 'GITHUB',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Getting Started',
                to: '/docs/en/README',
              },
              {
                label: 'How OperateGPT Works',
                to: '/docs/en/OperateGPT',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'CSDN',
                href: 'https://blog.csdn.net/weixin_43193041?type=blog',
              },
              {
                label: 'Juejin',
                href: 'https://juejin.cn/user/169737643364749/posts',
              },
              {
                label: 'Zhihu',
                href: 'https://www.zhihu.com/people/peaceful-xu',
              },
              {
                label: 'Medium',
                href: 'https://medium.com/@yuqiutong233',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} OperateGPT`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
    }),
};

module.exports = config;
