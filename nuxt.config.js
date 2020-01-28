const b2cPath = '../../../../b2c/src/main/webapp/resources'
const b2cAbsPath = '/Volumes/DataHD/Code/stunitas/b2c/src/main/webapp/resources'
export default {
  mode: 'universal',
  router: {
    extendRoutes (routes, resolve) {
      routes.push(
/*        {
          name: 'TheClassFooter',
          path: '/TheClassFooter',
          component: resolve(__dirname,
            'components/class/TheClassFooter/index.vue'),
        },*/
        {
          name: 'TheLayout',
          path: '/TheLayout',
          component: resolve(__dirname,
            'components/layout/TheLayout.vue'),
        },
      {
        name: 'TheLayoutConectsHeaderGnb',
          path: '/TheLayoutConectsHeaderGnb',
        component: resolve(__dirname,
        'components/layout/TheLayoutConectsHeaderGnb.vue'),
      }
    )
    },
  },
  build: {
    extractCSS: true,
    extend (config, { isClient }) {
      // Extend only webpack config for client-bundle
      if (process.env.NODE_ENV === 'development') {
        config.devtool = isClient
          ? 'eval-source-map'
          : 'inline-source-map'
      }
    },
  },
  css: [
    'destyle.css'
  ],
  modules: [
    '@nuxtjs/style-resources',
  ],

  styleResources: {
    scss: [
      '~assets/style/color.scss',
    ],
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
        content: process.env.npm_package_description || '',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: '/destyle.css' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Noto+Sans+KR:100,300,400,500,700,900|Noto+Sans:400,400i,700,700i|Noto+Serif+KR:200,300,400,500,600,700,900|Noto+Serif:400,400i,700,700i&display=swap&subset=korean'
      }
    ],
  },
  /*

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
