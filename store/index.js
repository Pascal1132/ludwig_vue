
import axios from 'axios';
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
        let res;
        try {
            result = await axios.get(`http://localhost:3001/rubberduck/pageable?route=${route.path}`);
            res = await result.data;
        } catch (error) {
            res = await error.response?.data;
        }
        let pageable = null;
        if (res?.pageable) {
            pageable = Pageable.fromJSON(res.pageable);
            commit('SET_PAGEABLE', pageable);
        }
        if (res?.language) {
            commit('SET_LANGUAGE', res.language);
        }
        if (res?.routes) {
            commit('SET_ROUTES', res.routes);
        }

        return pageable;
    },
    async fetchConfiguration({ commit }) {
        let result = await axios.get(`http://localhost:3001/rubberduck/configuration`);
        let res = await result.data;
        let configuration = null;
        if (res.configuration) {
            configuration = Configuration.fromJSON(res.configuration);
        }
        commit('SET_CONFIGURATION', configuration);
        return configuration;
    },
    async fetchObjects({ state }, { name, ids }) {
        const language = state.language;
        let result = await axios.get(`http://localhost:3001/rubberduck/objects/${name}`, {
            params: {
                ids: JSON.stringify({ ids: ids, language: language })
            }
        });
        let res = await result.data;
        return res;
    },
    async fetchQueryObjects({ state }, { route, params }) {
        const language = state.language;
        params.language = language;
        let result = await axios.get(`http://localhost:3001/rubberduck/q/${route}`, {
            params
        });
        let res = await result.data;
        return res;
    }

}
export const getters = {
    pageable: state => state.pageable,
    configuration: state => state.configuration,
    getMenu: state => menuKey => {
        return state.configuration?.menus.find((menu) => menu.name === menuKey);
    },
    language: state => state.language,
    routes: state => state.routes,
    getRoute: state => name => {
        return state.routes.find(route => route.name === name);
    }
}