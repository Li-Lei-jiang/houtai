<template>
  <div id="lines">
    <ve-line :data="chartData" height="350px"></ve-line>
  </div>
</template>
<style>
  .ve-line{
    max-width: 1130px!important;

  }
</style>
<script>
export default {
  name: "Lines-plan",
  components: {

  },
  props: {},
  data() {
    return {
      chartData: {},
        chars:[],
    };
  },
  methods: {
    getChartData() {
      this.$axios
        .req("api/homeChat") //拿到传来的数据
        .then(res => {
          this.chartData = res;//得到数据
          let columns = Object.getOwnPropertyNames( this.chartData.data[0]);//得到数据的每一项
          delete(columns[columns.pop()]);//删除得到的数据最后一项
          this.chartData.columns = columns;//数组添加属性的方法 添加列
          let chars = this.chartData.data;//把数组的值赋给变量，
          delete (this.chartData.data);//删除原数组的data 变量值
          this.chartData.rows = chars;//让行 等于这个变量

        })
        .catch(err => {
          console.log(err); //返回失败数据
        });
    }
  },
  mounted() {
    this.getChartData();
  },
  created() {},
  filters: {},
  computed: {},
  watch: {},
  directives: {}
};
</script>

<style scoped lang="scss">
#lines {
  margin: 0;
  padding-top: 0;
  /*width: 1130px;*/
  /*height: 350px;*/
  /*background:greenyellow ;*/
}
</style>
