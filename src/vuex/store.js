import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  navListData: [
    {
      id: '1',
      name: '产品中心',
      secNav: [
        {
          id: '1-1',
          name: 'XX系列',
          thirdNav: [
            { id: '1-1-1', name: 'XX产品1' },
            { id: '1-1-2', name: 'XX产品2' },
            { id: '1-1-3', name: 'XX产品3' },
            { id: '1-1-4', name: 'XX产品4' },
          ]
        },
        {
          id: '1-2',
          name: 'XX系列',
          thirdNav: [
            { id: '1-2-1', name: 'XX产品1' },
            { id: '1-2-2', name: 'XX产品2' },
            { id: '1-2-3', name: 'XX产品3' },
            { id: '1-2-4', name: 'XX产品4' },
          ]
        },
        {
          id: '1-3',
          name: 'XX系列',
          thirdNav: [
            { id: '1-3-1', name: 'XX产品1' },
            { id: '1-3-2', name: 'XX产品2' },
            { id: '1-3-3', name: 'XX产品3' },
            { id: '1-3-4', name: 'XX产品4' },
          ]
        },
      ]
    }
  ],
};
const mutations = {};
const actions = {};

export default new Vuex.Store({
  state, mutations, actions
})
