<template>
  <div id="index">
    <div class="warp">
      <Cont></Cont>
      <!--      线状图-->
      <div id="bobbin" >
        <div class="bob-t" >
          <LinesPlan></LinesPlan>
        </div>
      </div>
      <!--      雷达图-->
      <div id="radar" >
        <Radar class="radar-bg"></Radar>
        <Cake class="radar-bg"></Cake>
        <Histogram class="radar-bg"></Histogram>
      </div>
      <!--      穿梭框-->
      <div id="end">
        <OrderLef class="lef"></OrderLef>
        <OrderRig class="rig"></OrderRig>
      </div>
    </div>
  </div>
</template>
<style>


</style>
<script>
import Cont from "../../components/shouye/cont/Cont";
import LinesPlan from "./linesplan/LinesPlan"
import Radar from "../../components/shouye/radar/Radar";
import Cake from "../../components/shouye/cake/Cake";
import Histogram from "../../components/shouye/histogram/Histogram";
import OrderLef from "../../components/shouye/order/OrderLef";
import OrderRig from "../../components/shouye/order/OrderRig";

export default {
  name: "Index",
  components: {
    Cont,
    LinesPlan,
      Radar,
      Cake,
      Histogram,
      OrderLef,
      OrderRig,
  },
  props: {},
  data() {
    return {};
  },
  methods: {},
  mounted() {},
  created() {},
  filters: {},
  computed: {},
  watch: {},
  directives: {}
};
</script>
<style>
.el-card__body {
  padding: 0;
}
.el-main {
  line-height: 0;
}
</style>
<style scoped>
#index {
  margin: 0;
  padding: 0;
  /*background: white;*/
}
.warp {
  margin: 0;
  padding: 0;
}

#bobbin {
  margin: 2% 0 0 0;
  padding: 0;
  max-width: 1130px;
  height: 400px;
  line-height: 0;
}
#bobbin .bob-t {
  width: 1130px;
  height: 400px;
  background: white;
  line-height: 0;
}
/*  雷达图*/
#radar {
  margin: 3% 0 0 0;
  padding: 0;
  display: flex;
  justify-content: space-between;
}
.radar-bg {
  width: 32%;
  height: 350px;
  background: white;
}
/*  穿梭框*/
#end {
  margin: 3% 0 0 0;
  padding: 0;
  display: flex;
  justify-content: space-between;
}
#end .lef {
  width: 60%;
  height: 350px;
  background: white;
}
#end .rig {
  width: 37%;
  height: 350px;
  background: white;
}
</style>
