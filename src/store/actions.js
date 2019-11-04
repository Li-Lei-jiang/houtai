import { GET_HOMEDATA } from "./mutation-types";
import axios from "../http";

export default {
  // 把commit从store解构出来
  async gethomeData({ commit }) {
    //传整个store
    let res = await axios.req("api/homeData");
    console.log(res);
    commit(GET_HOMEDATA, res); //定义actions
  }
};
//action中的方法可以调用mutations中的方法，但不可修改state中的原始数据