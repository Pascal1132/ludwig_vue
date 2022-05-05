/**
 * RUBBERDUCK MIDDLEWARE FOR NUXT.JS
 */
 const bodyParser = require('body-parser')
 require('dotenv').config()
 const app = require('express')()
 const fs = require('fs');
 const axios = require('axios');
 const https = require('https');
 const cors = require('cors');
 
 app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({ extended: true }));
 // TODO: Add CORS specific origin to the project
app.use(cors({
    origin: '*',
}));
 
 app.post('/builder', async (req, res) => {
     let routes = req.body.routes;
     await fs.promises.writeFile('./storage/routes.json', JSON.stringify(routes));
     res.send('ok');
 });
 
 app.get('/pageable', async (req, res) => {
     let result = {};
     let status = 200;
     try {
         let route = req.query.route;
         let request = axios.get(process.env.API_URL, {
             httpsAgent: new https.Agent({
                 rejectUnauthorized: false
             }),
             params: {
                 route: route
             }
         })
         result = (await request).data;
 
         let tmpLanguage = route.split('/')[1] ?? null;
         result.language = (tmpLanguage) ? tmpLanguage : 'fr';
     } catch (error) {
         if (error.response.status === 404) {
             status = 404;
             result = await error.response.data;
         }
     }
     res.status(status).send(result);
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
 
 app.get('/objects/:name', async (req, res) => {
     let name = req.params.name;
     let ids = req.query.ids;
     let request = axios.get(process.env.API_URL + '/objects/' + name, {
         httpsAgent: new https.Agent({
             rejectUnauthorized: false
         }),
         params: {
             name: name,
             ids: ids
         }
     })
     let result = (await request).data;
     res.send(result);
 });
 
 
 module.exports = { path: '/rubberduck', handler: app }
 