const { EnvironmentPlugin } = require('webpack');
const dotenv = require('dotenv');

dotenv.config();

const base = process.env.VUEPRESS_BASE || '/';

module.exports = {
  title: 'adidas | code\'n\'stripes',
  description: 'Join adidas micro coding challenges and earn prizes!',
  base,
  dest: './dist',
  head: [
    ['link', { rel: 'icon', href: '/adidas-black.svg' }],
    ['link', { rel: 'manifest', href: '/manifest.webmanifest', crossorigin: 'use-credentials' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1' }],
    ['meta', { name: 'theme-color', content: '#000000' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'mask-icon', href: '/adidas.svg', color: '#000000' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  themeConfig: {
    logo: '/adidas.svg',
    search: false,
    nav: [
      { text: 'Leaderboard', link: '/leaderboard' },
      { text: 'Challenge T&C', link: '/terms-and-conditions' },
      { text: 'Challenge Privacy Notice', link: '/privacy-notice' },
      { text: 'Frequently Asked Questions', link: '/faq' }
    ]
  },
  plugins: [
    [
      '@vuepress/pwa',
      {
        updatePopup: true,
        popupComponent: 'refresh-popup'
      }
    ]

  ],
  chainWebpack: (config) => {

    config
      .module
      .rule('stylus').oneOf('normal').use('css-loader')
      .tap((options) => ({ ...options, url: false }));

    config
      .plugin('env')
      .use(EnvironmentPlugin, [[
        'NODE_ENV',
        'INSTANA_EUM_KEY',
        'CNS_START_DATE',
        'CNS_END_DATE',
        'CNS_CHALLENGE_LINK'
      ]]);
  }
};
