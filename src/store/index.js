import Vue from "vue";
import Vuex from "vuex";
import state from "./state";
import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";

Vue.use(Vuex);

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
});

/*
 * 固定写法
 * 共享文件入口
 * */
