<template>
  <div>
    <div id="top">
      <el-card class="box-card box-top">
        <div class="text item box-txt">
          <div class="igm" style="line-height:0">
            <img src="../../../imgas/ren.png" alt="" width="40px" />
          </div>
          <div class="Txt" style="line-height:0">
            <span>New visits</span><br />
            <!--               // duration: 5000, // 需要滚动的时间
                  // startVal: 0, // 初始值
                // endVal: 102400 // 最终值-->
            <span
              ><countTo
                :startVal="0"
                :endVal="this.homeData.visits"
                :duration="4000"
              ></countTo
            ></span>
          </div>
        </div>
      </el-card>

      <el-card class="box-card box-top">
        <div class="text item box-txt">
          <div class="igm" style="line-height:0">
            <img src="../../../imgas/xinxi.png" alt="" width="40px" />
          </div>
          <div class="Txt" style="line-height:0">
            <span>Messages</span><br />
            <span
              ><countTo
                :startVal="0"
                :endVal="this.homeData.messages"
                :duration="4000"
              ></countTo>
            </span>
          </div>
        </div>
      </el-card>

      <el-card class="box-card box-top">
        <div class="text item box-txt">
          <div class="igm" style="line-height:0">
            <img src="../../../imgas/qian.png" alt="" width="40px" />
          </div>
          <div class="Txt" style="line-height:0">
            <span>Purchases</span><br />
            <span
              ><countTo
                :startVal="0"
                :endVal="this.homeData.purchases"
                :duration="4000"
              ></countTo
            ></span>
          </div>
        </div>
      </el-card>

      <el-card class="box-card box-top">
        <div class="text item box-txt ">
          <div class="igm" style="line-height:0">
            <img src="../../../imgas/gouwuche.png" alt="" width="40px" />
          </div>
          <div class="Txt" style="line-height:0">
            <span>Shopping</span><br />
            <span
              ><countTo
                :startVal="0"
                :endVal="this.homeData.shopping"
                :duration="4000"
              ></countTo
            ></span>
          </div>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
import countTo from "vue-count-to";
export default {
  name: "Cont",
  components: {
    countTo
  },
  props: {},
  data() {
    return {
      homeData: {},
    };
  },
  methods: {
    gethomeData() {
      this.$axios
        .req("api/homeData ") //拿到传来的数据
        .then(res => {
          this.homeData = res.data;
          // console.log(res); //返回成数据
          // console.log(11);
        })
        .catch(err => {
          console.log(err); //返回失败数据
        });
    },
  },
  mounted() {
    this.gethomeData();
    // console.log(11)

  },
  created() {},
  filters: {},
  computed: {},
  watch: {},
  directives: {}
};
</script>

<style scoped lang="scss">
#top {
  display: flex;
  justify-content: space-between;
}
/*  卡片*/
.box-top {
  width: 24%;
  height: 100px;
  padding: 0;
  margin: 0;
}
.box-txt {
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-between;
  height: 100px;
  width: 274px;

  line-height: 0;
}
.box-txt .igm,
img {
  width: 50px;
  height: 50px;
  padding: 6% 0 0 6%;
}
.Txt {
  padding: 6% 16% 0 0%;
  margin: 0;
  height: 100px;
  max-width: 50px;
}
.Txt span {
  line-height: 25px;
  height: 50px;
}
</style>
