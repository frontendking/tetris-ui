export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  server: {
    port: 8000, // default: 3000
    host: '0.0.0.0', // default: localhost
  },
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [],
  /*
  ** Nuxt.js modules
  */
  modules: [],
  /*
  ** Build configuration
  */
  globals: {
    id: 'tutor-b2c',
  },
  generate: {
    subFolders: false,
    exclude: [
      /^(?=.*\bassets\b).*$/,
      /^(?=.*\badmin\b).*$/,
      /^(?=.*\bclass\b).*$/,
      /^(?=.*\bpermit\b).*$/,
      // /^(?=.*\blearning\b).*$/
    ]
  },
  build: {
    publicPath: '/tutor/',
    extractCSS: true,
    filenames: {
      app: '[name].js',
      chunk: '[name].js',
      css: '[name].css',
      img: '[path][name].[ext]',
      font: '[path][name].[ext]',
      video: '[path][name].[ext]',
    },
    postcss: {
      preset: {
        autoprefixer: {
          grid: 'autoplace',
        },
      },
    },
    extend (config, { isClient }) {
      // Extend only webpack config for client-bundle
      config.devtool = isClient ? 'eval-source-map' : 'inline-source-map'
    },
  },
}
