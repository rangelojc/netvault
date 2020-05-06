const express = require('express')
const session = require('express-session')

const { Nuxt, Builder } = require('nuxt')
const app = express()

const sqlManager = require("./classes/SQLManager.js");
const apiRouter = require("./api/api.js");

// Import and Set Nuxt.js options
const nuxtconfig = require('../nuxt.config.js')
nuxtconfig.dev = process.env.NODE_ENV !== 'production';

//session
app.use(session({ secret: 'netvault2020', saveUninitialized: true, resave: true }));

// Attach sql manager to app locals
app.locals.sqlmanager = new sqlManager();

// Attach api routes
app.use('/api', apiRouter)

const startNuxt = async function () {
    // Init Nuxt.js
    const nuxt = new Nuxt(nuxtconfig)
    const { host, port } = nuxt.options.server

    await nuxt.ready();

    // Build only in dev mode
    if (nuxtconfig.dev) {
        const builder = new Builder(nuxt)
        await builder.build()
    }

    // Give nuxt middleware to express
    app.use(nuxt.render);

    // Listen the server
    app.listen(port, host);

    console.log(`Server listening on http://${host}:${port}`);
}

startNuxt();