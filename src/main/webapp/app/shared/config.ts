import Vuex from 'vuex';
import VueI18n from 'vue-i18n';
import setupAxiosInterceptors from '../config/axios-interceptor';

import BootstrapVue from 'bootstrap-vue';
import {library} from '@fortawesome/fontawesome-svg-core';
import {fas} from '@fortawesome/free-solid-svg-icons';

import VueCookie from 'vue-cookie';
import Vuelidate from 'vuelidate';
import Vue2Filters from 'vue2-filters';

import * as filters from './date/filters';

export function initVueApp(vue) {
    vue.use(VueCookie);
    vue.use(Vuelidate);
    vue.use(Vue2Filters);
    setupAxiosInterceptors(() => console.log('Unauthorized!'));
    filters.initFilters();
}

export function initBootstrapVue(vue) {
    vue.use(BootstrapVue);

    library.add(fas);
}

export function initI18N(vue) {
    vue.use(VueI18n);
    return new VueI18n({
        silentTranslationWarn: true
    });
}

export function initVueXStore(vue) {
    vue.use(Vuex);
    return new Vuex.Store({
        state: {
            authenticated: true,
            schemaId: null,
            schema: null
        },
        mutations: {
            authenticated(state) {
                state.authenticated = true;
            },
            logout(state) {
                state.authenticated = false;
            },
            setSchemaId(state, schemaId) {
                state.schemaId = schemaId;
            },
            setSchema(state, schema) {
                state.schema = schema;
            }
        },
        getters: {
            authenticated: state => state.authenticated
        }
    });
}
