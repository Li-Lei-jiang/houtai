//   - v-charts(vue图表库)
//图片剪切 插件
//导出插件
// import Blob from "../src/excel/Blob";
// import Export2Excel from "../src/excel/Export2Excel";
//
import VCharts from "v-charts";
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/index";
import axios from "axios";
import http from "./http";
import Element from "element-ui";

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
//VueX
import Vuex from "vuex";
Vue.use(Vuex);
// mavon-editor 插件
import mavonEditor from "mavon-editor";
import "mavon-editor/dist/css/index.css";
Vue.use(mavonEditor);
Vue.use(ElementUI);
Vue.use(Element, { size: "small", zIndex: 3000 });
Vue.prototype.$axios = http;
Vue.config.productionTip = false;
Vue.use(VCharts);
// Vue.prototype
// 响应拦截
axios.defaults.timeout = 10000; // 设置超时时间
// 过滤请求结果 只返回结果的data
axios.interceptors.response.use(
  response => {
    return response.data;
  },
  error => {
    return Promise.reject(error);
  }
);

new Vue({
  router,
  store,
  // axios,
  render: h => h(App)
}).$mount("#app");
