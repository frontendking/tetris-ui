export default {
  mode: 'universal',
  build: {
    filenames: {
      chunk: '[name].js'
    },
    extractCSS: true,
    extend (config, { isClient }) {
      // Extend only webpack config for client-bundle
      if (process.env.NODE_ENV === 'development') {
        config.devtool = isClient
          ? 'eval-source-map'
          : 'inline-source-map'
      }
      config.externals = {
        jquery2: 'jQuery'
      }
      config.optimization.minimize = false
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
