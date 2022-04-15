const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'UI GUIDE : Sample',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Guide Sample',
        link: '/guide-sample/',
      },
      {
        text: 'Use Guide',
        link: '/use-guide/',
      },
      {
        text: 'Config',
        link: '/config/'
      }
    ],
    sidebar: {
      '/use-guide/': [
        {
          title: 'Use Guide',
          collapsable: false,
          children: [
            '',
            'using-vue',
            'VuePress-notion',
          ]
        }
      ],
      '/guide-sample/': [
        {
          title: '기본 정의',
          collapsable: true,
          children: [
            '',
            'naming-rules',
          ]
        },
        {
          title: '디자인 가이드',
          collapsable: true,
          children: [
            'design-guide',
          ]
        }
      ],
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ], 

  /**
   * put a line number inside markdown(code box)
   */
  markdown: {
    lineNumbers: true
  }
}