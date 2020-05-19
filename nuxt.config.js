
module.exports = {
    mode: 'spa',
    /*
    ** Headers of the page
    */
    head: {
        title: 'NETVAULT',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open+Sans&display=swap' }

        ]
    },
    /*
    ** Customize the progress-bar color
    */
    loading: { color: '#fff' },
    /*
    ** Global CSS
    */
    css: [
        '@/assets/scss/main.scss',
        '@/assets/scss/shared.scss',
        '@/assets/scss/icons.scss',
    ],
    /*
    ** Plugins to load before mounting the App
    */
    plugins: [
    ],
    /*
    ** Nuxt.js dev-modules
    */
    buildModules: [
    ],
    /*
    ** Nuxt.js modules
    */
    modules: [
        '@nuxtjs/axios'
    ],
    /*
    ** Build configuration
    */
    auth: {
        // Options
    },
    build: {
        /*
        ** You can extend webpack config here
        */
        extend(config, ctx) {
        }
    },
    serverMiddleware: [
        `~/server/middleware/auth.js`
    ]
}
