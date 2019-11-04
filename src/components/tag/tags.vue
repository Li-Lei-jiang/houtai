<template>
  <div id="titl">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <!--        未读-->
      <el-tab-pane :label="num" name="first">
<!--        判断未成立-->
        <div v-if="num.length">
          <div id="Ure" v-for="(item, index) in Unread" :key="item.index">
            <div class="Uread">
              <div>{{ item.name }}</div>
              <div class="dates">
                <span>{{ item.time }}</span>
                <span
                  ><el-button
                    type="primary"
                    style="background:honeydew;color: black"
                    @click="toread(item, index)"
                    >标记已读</el-button
                  ></span
                >
              </div>
            </div>
          </div>
          <div class="butt">
            <el-button type="primary" @click="reads">全部标记已读</el-button>
          </div>
        </div>
        <div v-else>暂无数据</div>
      </el-tab-pane>
      <!--      已读-->
      <el-tab-pane :label="num1" name="second">
        <div id="read" v-for="(item, index) in read" :key="item.index">
          <div class="Uread">
            <div>{{ item.name }}</div>
            <div class="dates">
              <span>{{ item.time }}</span>
              <span
                ><el-button
                  type="primary"
                  style="background:honeydew;color: black"
                  @click="torecycle(item, index)"
                  >删除</el-button
                ></span
              >
            </div>
          </div>
        </div>
        <div class="butt">
          <el-button type="danger" @click="recycles">全部删除</el-button>
        </div>
      </el-tab-pane>
      <!--      回收-->
      <el-tab-pane :label="num2" name="third">
        <div id="recycle" v-for="(item, index) in recycle" :key="item.index">
          <div class="Uread">
            <div>{{ item.name }}</div>
            <div class="dates">
              <span>{{ item.time }}</span>
              <span
                ><el-button type="warning" @click="outread(item, index)"
                  >还原</el-button
                ></span
              >
            </div>
          </div>
        </div>
        <div class="butt">
          <el-button type="info" @click="outreads">清空回收站</el-button>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<style>
.el-main[data-v-7af810f6] {
  line-height: 30px;
  /*height: 30px;*/
  text-align: left;
}
.el-tabs__nav-scroll {
  height: 50px;
  line-height: 50px;
}
</style>

<script>
export default {
  name: "tags",
  components: {},
  props: {},
  data() {
    return {
      activeName: "second",
      Unread: [
        {
          name: "【系统通知】该系统于今晚凌晨2点到5点进行维护升级",
          time: "2018-4-19 20；00：00"
        },
        {
          name: "今晚12点整发大红包，先到先得",
          time: "2018-4-19 20；00：00"
        }
      ],
      read: [
        {
          name: "【系统通知】该系统于今晚凌晨2点到5点进行维护升级",
          time: "2018-4-19 20；00：00"
        }
      ],
      recycle: [
        {
          name: "【系统通知】您的优惠卷已过期",
          time: "2018-4-19 20；00：00"
        }
      ]
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    //未读标记已读
    toread(item, index) {
      //这一步是点击为已读
      this.read.unshift(item); //往已读后面添加之前未读的每一项
      this.Unread.splice(index, 1); //删除当前一项
    },
    reads() {
      //全部标为已读
      this.read = this.read.concat(this.Unread); //把当前已读和未读的链接在一起
      this.Unread = []; //再让当前未读变为空的数组 所以看起来被移除了
    },
    //已读删除
    torecycle(item, index) {
      this.read.splice(index, 1);
      this.recycle.unshift(item);
    },
    recycles() {
      this.recycle = this.recycle.concat(this.read);
      this.read = [];
    },
    //  删除还原
    outread(item, index) {
      this.read.unshift(item);
      this.recycle.splice(index, 1);
    },
    outreads() {
      this.recycle = this.read.concat(this.recycle);
      this.recycle = [];
    }
  },
  mounted() {},
  created() {},
  filters: {},
  computed: {
    num() {
      //定义方法 然后在需要用的地方动态绑定这个方法
      let unread = "未读消息（" + this.Unread.length + " )";
      return unread;
    },
    num1() {
      let read = "已读消息（" + this.read.length + " )";
      return read;
    },
    num2() {
      let recycle = "回收站（" + this.recycle.length + " )";
      return recycle;
    }
  },
  watch: {},
  directives: {}
};
</script>

<style scoped lang="scss">
.titl {
  text-align: left;
}
#Ure {
  background: white;
}
.Uread {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #b3c0d1;
  /*background: white;*/
  height: 50px;
  line-height: 50px;
}
.dates {
  padding-right: 1%;
  width: 300px;
}
.dates span {
  margin-left: 10px;
}
.butt {
  margin: 2% 0 2% 0;
}
#read {
  background: white;
}
#recycle {
  background: white;
}
</style>
