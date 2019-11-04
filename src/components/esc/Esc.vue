<template>
  <div id="esc">
    <div class="t-tx">
      <h2>期待你的下次光临</h2>
      <div><el-button type="primary" @click="getdeluse()">确定退出</el-button></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Esc",
  components: {},
  props: {},
  data() {
    return {
        deluse:{},
    };
  },
  methods: {
    getdeluse(){
        this.$axios
            .req('/api/user/logout')
            .then(res =>{
                console.log(res)
                this.$message({
                    message:'成功退出',
                    type:'success',
                });
                this.quit()
            })
            .catch(err =>{
                console.log(err)
            })
    },
      quit(){
        this.$router.push('/enter')
      },
  },
  mounted() {},
  created() {},
  filters: {},
  computed: {},
  watch: {},
  directives: {}
};
</script>

<style scoped lang="scss">
#esc {
  height: 500px;
  text-align: center;
  line-height: 0;
}
#esc .t-tx {
  height: 250px;
  padding-top: 13%;
}
#esc h2 {
  /*margin: 5%*/
}
</style>
