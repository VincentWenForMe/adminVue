import Vue from 'vue';
import Vuex from 'vuex';

import {constantRouterMap} from '../router';

Vue.use(Vuex);

const state = {
  initNavData: constantRouterMap,
  user: {
    name: 'wen',
    password: '123456',
    userState: true,
  },
};
const getters = {
  initNavData: state => state.initNavData
}
const mutations = {};
const actions = {};

export default new Vuex.Store({
  state, getters, mutations, actions
})
