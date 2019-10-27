const b2cPath = '../../../../b2c/src/main/webapp/resources'
const b2cAbsPath = '/Volumes/DataHD/Code/stunitas/b2c/src/main/webapp/resources'
export default {
  mode: 'universal',
  /*  router: {
      base: '/html/',
    },*/
  server: {
    port: 8000, // default: 3000
    host: '0.0.0.0', // default: localhost
  },
  /*
    router: {
      extendRoutes(routes, resolve){
        routes.push({
          name: 'ThePermitCard',
          path: '/ThePermitCard',
          component: resolve(__dirname, 'components/permit/ThePermitCard/index.vue')
        })
      }
    },*/
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
  loading: { color: '#fff' },
  plugins: [],
  modules: [
    '@nuxtjs/style-resources',
  ],
  css: [
    '~assets/style/global.scss',
  ],
  styleResources: {
    scss: [
      '~assets/style/color.scss',
    ],
  },
  /*
  ** Build configuration
  */
  globals: {
    id: 'tutor-b2c',
  },
  generate: {
    dir: `${b2cAbsPath}/b2c`,
    subFolders: false,
    exclude: [
      /^(?=.*\bassets\b).*$/,
      /^(?=.*\badmin\b).*$/,
      // /^(?=.*\bclass\b).*$/,
      // /^(?=.*\bpermit\b).*$/,
      // /^(?=.*\blearning\b).*$/
    ],
  },
  dir: {
    pages: 'css',
  },
  build: {
    publicPath: '/',
    extractCSS: true,
    filenames: {
      app: 'js/b2c/[name].js',
      chunk: 'js/b2c/[name].js',
      css: '[name].css',
      img: 'img/b2c/[name].[ext]',
      // css: `${b2cPath}/css/b2c/[name].css`,
      // img: `${b2cPath}/img/b2c/[name].[ext]`,
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
