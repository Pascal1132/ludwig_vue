/**
 * RUBBERDUCK MIDDLEWARE FOR NUXT.JS
 */
console.log('Rubberduck plugin loaded');
const bodyParser = require('body-parser')
const app = require('express')()
const fs = require('fs');

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
    let routes = JSON.parse(fs.readFileSync("./storage/routes.json", "utf8"));
    // search for route in routes.json
    let routeFound = routes.find(r => r.path == route);
    let result = {
        pageable: null
    };
    if (routeFound) {
        // FIXME fetch pageable from core
        result.pageable = {
            id: '',
            title: routeFound.name,// temporary
            sections: Array(10).fill(
                {
                    id: '',
                    title: 'Section 1',
                    component: 'RGO01-A',
                    fields: [
                        {
                            id: '',
                            name: 'title',
                            type: 'text',
                            data: {
                                value: 'Lorem ispum',
                            }
                        },
                        {
                            id: '',
                            name: 'text',
                            type: 'text',
                            data: {
                                value: 'Lorem ipsum dolem',
                            }
                        },
                        {
                            id: '',
                            name: 'link',
                            type: 'text',
                            data: {
                                value: '',
                            }
                        }
                    ],
                }
            ),
            module_type: '',
            parent_id: '',
            layout: 'page',
        };
        // get the first slug of the routeFound with split string
        let tmpLanguage = routeFound.path.split('/')[1] ?? null;
        result.language = (tmpLanguage) ? tmpLanguage : 'fr';
        // list all routes
        result.routes = routes;
        res.send(result);
    } else {
        // set 404 status
        result.pageable = {
            id: '',
            title: '404',
            sections: Array(1).fill(
                {
                    id: '',
                    title: 'Section 1',
                    component: 'RGO01-A',
                    fields: [
                        {
                            id: '',
                            name: 'title',
                            type: 'text',
                            data: {
                                value: '404',
                            }
                        },
                        {
                            id: '',
                            name: 'text',
                            type: 'text',
                            data: {
                                value: 'Page not found',
                            }
                        },
                        {
                            id: '',
                            name: 'link',
                            type: 'text',
                            data: {
                                value: '',
                            }
                        }
                    ],
                }
            ),
            module_type: '',
            parent_id: '',
            layout: 'page',
        };
        res.status(404).send(result);
        result.pageable = null;
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
