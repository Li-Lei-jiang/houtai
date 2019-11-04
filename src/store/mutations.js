import {ADD_NUM, DEL_NUM, SET_NUM, GET_CITY} from './mutation-types'
//解构赋值引进
export default {
  [SET_NUM] (state, data) { //data是后面的参数  操作state
    state.num = data
  },
  [ADD_NUM] (state) {
    state.num += 1
  },
  [DEL_NUM] (state) {
    state.num -= 2
  },
  [GET_CITY] (state, data) {
    state.citys = data
  }
}
//mutations中的方法可以对state中的数据进行改变。