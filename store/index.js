
import axios from 'axios';
import https from 'https';
import Configuration from '~/modules/rubberduck/Aggregate/Configuration';
import Pageable from '~/modules/rubberduck/Aggregate/Pageable';

export const state = () => ({
    pageable: new Pageable(),
    configuration: new Configuration(),
    language: 'fr',
    routes: [],
})
export const mutations = {
    SET_PAGEABLE(state, pageable) {
        state.pageable = pageable;
    },
    SET_CONFIGURATION(state, configuration) {
        state.configuration = configuration;
    },
    SET_LANGUAGE(state, language) {
        state.language = language;
    },
    SET_ROUTES(state, routes) {
        state.routes = routes;
    }
}
export const actions = {
    async fetchCurrentPageable({ commit }, route) {
        let result = {};
        try {
            result = await axios.get(`http://localhost:3000/rubberduck/pageable?route=${route.path}`);
        } catch (error) {
            result = error.response;
        }
        let res = await result.data;
        
        // Add html to the store
        //if route.path in storage/routes.json
        let pageable = null;
        if (res.pageable) {
            pageable = Pageable.fromJSON(res.pageable);
            commit('SET_PAGEABLE', pageable);
        }
        if (res.language) {
            commit('SET_LANGUAGE', res.language);
        }
        if (res.routes) {
            commit('SET_ROUTES', res.routes);
        }
        
        return pageable;
    },
    async fetchConfiguration({ commit }) {
        let result = await axios.get(`http://localhost:3000/rubberduck/configuration`);
        let res = await result.data;
        let configuration = null;
        if (res.configuration) {
            configuration = Configuration.fromJSON(res.configuration);
        }
        commit('SET_CONFIGURATION', configuration);
        return configuration;
    }
}
export const getters = {
    pageable: state => state.pageable,
    configuration: state => state.configuration,
    getMenu: state => menu => {
        return state.configuration?.getMenuByName(menu);
    },
    language: state => state.language,
    routes: state => state.routes,
    getRoute: state => name => {
        return state.routes.find(route => route.name === name);
    }
}