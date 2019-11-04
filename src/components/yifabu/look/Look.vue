<template>
  <div id="looks">
    <div class="butt">
      <el-button type="primary" @click="goyifabu">返回</el-button>
    </div>
    <div class="titl">
      <h1>{{ this.lookes.title }}</h1>
    </div>
    <div class=" abst">{{ this.lookes.abstract }}</div>
    <div class="dates">{{ this.lookes.date }}</div>
    <div id="textx">
      <div>{{ this.lookes.text }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Look",
  components: {},
  props: {},
  data() {
    return {
      lookes: {
        title: " ", //标题的值
        abstract: "", //摘要
        date: {}, //发布时间
        text: "" //编辑器的 值
      }
    };
  },
  methods: {
    //接收传过来的参数
    getlookes() {
      this.$axios.req("/api/article/article", { _id: this._id }).then(res => {
        this.lookes = res.data;
        this.title = this.lookes.title;
        this.abstract = this.lookes.abstract;
        // this.date = this.lookes.date
        this.text = this.lookes.text;
        // console.log(this.date)
        // console.log(res)
      });
    },

    goyifabu() {
      //点击回到发布页
      this.$router.push("/yifabu");
    }
  },
  mounted() {
    this._id = this.$route.query.id;
    this.getlookes();
  },
  created() {},
  filters: {},
  computed: {},
  watch: {},
  directives: {}
};
</script>
<style></style>
<style scoped lang="scss">
#looks {
  line-height: 40px;
}
#looks .butt {
  text-align: left;
}
.titl {
  text-align: center;
}
.abst {
  text-align: center;
}
.dates {
  text-align: center;
}
#textx {
  background: white;
  max-height: 600px;
  height: 400px;
  width: 1140px;
}
#textx div {
  text-align: left;
  padding: 2% 2%;
}
</style>
