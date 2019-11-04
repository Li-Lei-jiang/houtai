export default {
  addNum (state) {
    return state.num +1
  }
}//对state中的值 进行过滤或者操作 这是一个方法可以理解为是staore的计算属性，可以实现就store的计算，但是不能更改


// 使用;conputed:{
//     num(){
// //         readable this.$store.getters.addAll()
//     }
// }