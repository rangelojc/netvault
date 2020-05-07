const express = require('express')
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');

const { Nuxt, Builder } = require('nuxt')
const app = express();

//custom imports
const sessionMiddleware = require("./utils/sessionMiddleware");

const sqlManager = require("./classes/SQLManager.js");
const apiRouter = require("./api/api.js");

dotenv.config();

//json, cookie url middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

//session
sessionMiddleware(app);

// Attach sql manager to app locals
app.locals.sqlmanager = new sqlManager();

// Attach api routes
app.use('/api', apiRouter)

const startNuxt = async function () {
    // Import and Set Nuxt.js options
    const nuxtconfig = require('../nuxt.config.js')
    nuxtconfig.dev = process.env.NODE_ENV !== 'production';

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