<template>
  <div>
   <div id="tpian"><img src="../../../imgas/shouyee.png" alt=""></div>
   <div v-for="item in ress" :key="item.id" id="tx-t">
     <div  class="prog">{{item.name}}</div>
     <div class="prog"><el-progress :percentage="(item.progress)*100"></el-progress></div>
   </div>
  </div>
</template>

<script>
export default {
  name: "OrderRig",
  components: {},
  props: {},
  data() {
    return {
      Progress:{},
        ress:[],
        percentage:'progress',
    };
  },
  methods: {
    getProgress() {
      this.$axios
        .req("api/progress") //拿到传来的数据
        .then(res => {
            this.ress = res.data;
            let progress = Object.values(this.ress);
            this.ress.progress = progress;

          // console.log(this.ress);
        })
        .catch(err => {
          console.log(err); //返回失败数据
        });
    },
      format(percentage) {
          return percentage === 100 ? '满' : `${percentage}%`;
      }
  },
  mounted() {
    this.getProgress();
  },
  created() {},
  filters: {},
  computed: {},
  watch: {},
  directives: {}
};
</script>

<style scoped lang="scss">
  #tx-t{
    line-height: 5px ;
    text-align: left;
  }
  #tpian{
    height: 300px;
  }
  .prog{
    padding: 0% 2% 1%  4% ;
  }
</style>
