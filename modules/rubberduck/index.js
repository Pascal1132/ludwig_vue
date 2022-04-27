const fs = require('fs');

export default async function () {
    this.addServerMiddleware('@modules/rubberduck/server-middleware/index.js');
    //this.addServerMiddleware('@modules/rubberduck/server-middleware/routing.js');
    this.extendRoutes(async (nuxtRoutes, resolve) => {
        // Default catch all routes for the override router
        nuxtRoutes.push(
            {
                path: '*',
                component: resolve('@/pages/index.vue'),
            }
        );
    });
}