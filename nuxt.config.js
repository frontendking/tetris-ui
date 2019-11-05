const b2cPath = '../../../../b2c/src/main/webapp/resources'
const b2cAbsPath = '/Volumes/DataHD/Code/stunitas/b2c/src/main/webapp/resources'
export default {
  mode: 'universal',
  router: {
    extendRoutes(routes, resolve){
      routes.push({
        name: 'TheClassFooter',
        path: '/TheClassFooter',
        component: resolve(__dirname, 'components/class/TheClassFooter/index.vue')
      })
    }
  },
  build: {
    extractCSS: true,
    postcss: {
      preset: {
        autoprefixer: {
          grid: 'autoplace',
        },
      },
    },
    extend (config, { isClient }) {
      // Extend only webpack config for client-bundle
      if(process.env.NODE_ENV === 'development'){
        config.devtool = isClient
          ? 'eval-source-map'
          : 'inline-source-map'
      }
    },
  },
  css: [
  ],
  modules: [
    '@nuxtjs/style-resources',
  ],

  styleResources: {
    scss: [
      '~assets/style/color.scss',
    ],
  },
  globals: {
    id: 'wrap',
  },
  loading: { color: '#fff' },

  /*
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
    plugins: [],

    /!*
    ** Build configuration
    *!/

    generate: {
      dir: `${b2cAbsPath}/b2c`,
      subFolders: false,
      exclude: [
        /^(?=.*\bassets\b).*$/,
        /^(?=.*\badmin\b).*$/,
        /^(?=.*\bclass\b).*$/,
        /^(?=.*\bpermit\b).*$/,
        /^(?=.*\bmembership\b).*$/,
        /^(?=.*\blearning\b).*$/,
        /^(?=.*\bteaching\b).*$/,
        /^(?=.*\bpermit\b).*$/
      ],
    },
  */
}
