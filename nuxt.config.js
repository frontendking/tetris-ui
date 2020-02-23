export default {
  mode: 'universal',
  build: {
    extractCSS: true,
    extend (config, { isClient }) {
      // Extend only webpack config for client-bundle
      if (process.env.NODE_ENV === 'development') {
        config.devtool = isClient
          ? 'eval-source-map'
          : 'inline-source-map'
      }
      const svgRule = config.module.rules.find(rule => rule.test.test('.svg'));

      svgRule.test = /\.(png|jpe?g|gif|webp)$/;

      config.module.rules.push({
        test: /\.svg$/,
        use: [
          'babel-loader',
          'vue-svg-loader',
        ],
      });
    }
  },
  loading: { color: '#fff' },
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  }
}
