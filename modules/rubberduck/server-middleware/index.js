/**
 * RUBBERDUCK MIDDLEWARE FOR NUXT.JS
 */
const bodyParser = require('body-parser')
require('dotenv').config()
const app = require('express')()
const fs = require('fs');
const axios = require('axios');
const https = require('https');
const { exit } = require('process');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
var route, routes = [];

app.post('/builder', async (req, res) => {
    // FOR REBUILDING
    const { loadNuxt, Builder } = require('nuxt')

    // Check if we need to run Nuxt in development mode
    const isDev = process.env.NODE_ENV !== 'production'

    let routes = req.body.routes;
    // Write into a file inside storage/routes.json
    await fs.promises.writeFile('./storage/routes.json', JSON.stringify(routes));
    res.send('ok');
});

app.get('/pageable', async (req, res) => {
    // const Pageable = require('../classes/pageable.ts');
    let route = req.query.route;
    let request = axios.get(process.env.API_URL, {
        httpsAgent: new https.Agent({
            rejectUnauthorized: false
        }),
        params: {
            route: route
        }
    })
    let routes = JSON.parse(fs.readFileSync("./storage/routes.json", "utf8"));
    // search for route in routes.json
    let routeFound = routes.find(r => r.path == route);
    // get request to process.env.API_URL + routeFound.path as params

    let result = (await request).data;
    let tmpLanguage = route.split('/')[1] ?? null;
    result.language = (tmpLanguage) ? tmpLanguage : 'fr';
    // list all routes
    result.routes = routes;
    if (routeFound) {
        res.send(result);
    } else {
        res.status(404).send(result);
    }
});

// Configuration
app.get('/configuration', async (req, res) => {
    let menus = JSON.parse(fs.readFileSync("./storage/menus.json", "utf8"));
    let result = {
        configuration: {
            menus: menus,
            colors: {
                primary: 'indianred',
                secondary: '#ff9800',
                dark: '#212121',
                light: '#f5f5f5',
            }
        }
    };
    res.send(result);
});

module.exports = { path: '/rubberduck', handler: app }
