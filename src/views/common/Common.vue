<template>
  <div>
    <div>
      <el-container>
        <el-header id="tops">
          <!-- Top-->
          <div id="head">
            <div class="warp">
              <div class="t-le">
                欢迎<span>**</span>来到**后台管理系统
              </div>
              <div class="t-ri">
                <span>早上好，亲爱的</span><span>**</span>上次登录时间:
                <span>2019.10.11</span> <span>23:25:00</span>
              </div>
            </div>
          </div>
        </el-header>
        <!--    Left-->
        <el-container>
          <el-aside width="150px">
            <el-row class="tac">
              <el-col :span="12" class="left">
                <el-menu
                  default-active="2"
                  class="el-menu-vertical-demo"
                  @open="handleOpen"
                  @close="handleClose"
                >
                  <div @click="toindex">
                    <el-menu-item index="1">
                      <i class="el-icon-location-information"></i>
                      <span slot="title">首页</span>
                    </el-menu-item>
                  </div>
                  <div @click="toissue">
                    <el-menu-item index="2">
                      <i class="el-icon-check"></i>
                      <span slot="title">已发布</span>
                    </el-menu-item>
                  </div>
                  <div @click="tocount">
                    <el-menu-item index="3">
                      <i class="el-icon-s-data"></i>
                      <span slot="title">统计</span>
                    </el-menu-item>
                  </div>
                  <div @click="topublish">
                    <el-menu-item index="4">
                      <i class="el-icon-document-checked"></i>
                      <span slot="title">发表文章</span>
                    </el-menu-item>
                  </div>
                  <div @click="totag">
                    <el-menu-item index="5">
                      <i class="el-icon-collection-tag"></i>&nbsp;
                      <span slot="title">&nbsp;&nbsp;标签页&nbsp;</span>
                    </el-menu-item>
                  </div>
                  <div @click="toderive">
                    <el-menu-item index="6">
                      <i class="el-icon-wallet"></i>
                      <span slot="title">导出excel</span>
                    </el-menu-item>
                  </div>
                  <div @click="toimg">
                    <el-menu-item index="7">
                      <i class="el-icon-upload"></i>
                      <span slot="title">图片上传</span>
                    </el-menu-item>
                  </div>
                  <div @click="toesc">
                    <el-menu-item index="8">
                      <i class="el-icon-setting"></i>
                      <span slot="title">退出系统</span>
                    </el-menu-item>
                  </div>
                </el-menu>
              </el-col>
            </el-row>
            <!--          可变组件-->
          </el-aside>
          <el-main>
            <router-view></router-view>
          </el-main>
        </el-container>
      </el-container>
    </div>
  </div>
</template>

<script>
export default {
  name: "common",
  components: {},
  props: {},
  data() {
    return {};
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    toindex() {
      //主页
      this.$router.push("/index");
    },
    toissue() {
      //发布
      this.$router.push("/yifabu");
    },
    tocount() {
      //统计 totag
      this.$router.push("/cont");
      // console.log(11)
    },
    topublish() {
      //发表
      this.$router.push("/fbiao");
      // console.log(11);
    },
    totag() {
      //标签
      this.$router.push("/tags");
    },

    toderive() {
      //导出
      this.$router.push("/excel");
    },
    toimg() {
      //上传
      this.$router.push("/goback");
    },
    toesc() {
      //退出
      this.$router.push("/esc");
    }
  },
  mounted() {},
  created() {},
  filters: {},
  computed: {},
  watch: {},
  directives: {}
};
</script>
<style>

</style>

<style scoped>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

/*  top*/
#tops {
  margin: 0;
  padding: 0 2%;
  background: #2e5e85;
  color: white;
  z-index: 9;
}
#head {
  margin: 0;
  padding: 0;
}
.warp {
  display: flex;
  justify-content: space-between;
  line-height: 60px;
  height: 60px;
  font-size: 20px;
}
.t-le {
  /*padding-left: 2%;*/
  font-weight: bold;
}
.t-ri {
  /*padding-right: 2%;*/
  font-size: 17px;
}

/*  left*/
.left {
  width: 100%;
}
.left ul li {
  border: 0;
  background: #344055;
  color: white;
  line-height: 60px;
  height: 60px;
  padding: 0 auto;
}
</style>
