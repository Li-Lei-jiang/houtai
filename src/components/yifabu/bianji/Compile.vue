<template>
  <div id="editbox">
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <!--        顶部-->
      <div class="head">
        <span> <el-button type="danger" @click="getout">返回</el-button></span>
        <span
          ><el-button type="primary" @click="submitForm('ruleForm')"
            >发布</el-button
          ></span
        >
      </div>
      <!--        标题-->
      <div>
        <el-form-item label="文章标题" prop="title">
          <el-input v-model="ruleForm.title" placeholder="标题"></el-input>
        </el-form-item>
      </div>
      <!--摘要-->
      <div>
        <el-form-item label="文章摘要" prop="abstract">
          <el-input
            v-model="ruleForm.abstract"
            placeholder="请选输入摘要"
          ></el-input>
        </el-form-item>
      </div>

      <div id="potion">
        <div>
          <el-form-item label="作者" prop="author" placeholder="作者">
            <el-input v-model="ruleForm.author"></el-input>
          </el-form-item>
        </div>
        <!--      类目-->
        <div>
          <el-form-item label="类目" prop="category">
            <el-select v-model="ruleForm.category" placeholder="请选择发表类目">
              <el-option label="Javascript" value="Javascript"></el-option>
              <el-option label="PHP" value="PHP"></el-option>
              <el-option label="HTML5" value="HTML5"></el-option>
              <el-option label="CSS" value="CSS"></el-option>
              <el-option label="Mysql" value="Mysql"></el-option>
              <el-option label="其他" value="其他"></el-option>
            </el-select>
          </el-form-item>
        </div>
        <!--          来源-->
        <div>
          <el-form-item label="来源" prop="source">
            <el-select v-model="ruleForm.source" placeholder="请选来源">
              <el-option label="原创" value="原创"></el-option>
              <el-option label="转载" value="转载"></el-option>
              <el-option label="与他人合作" value="合作"></el-option>
              <el-option label="摘自" value="摘自"></el-option>
            </el-select>
          </el-form-item>
        </div>
        <!--          重要性-->
        <div>
          <el-form-item label="重要性" prop="star">
            <el-select v-model="ruleForm.star" placeholder="请选择重要程度">
              <el-option label="1" value="1"></el-option>
              <el-option label="2" value="2"></el-option>
              <el-option label="3" value="3"></el-option>
              <el-option label="4" value="4"></el-option>
              <el-option label="5" value="5"></el-option>
            </el-select>
          </el-form-item>
        </div>
        <!--          发布时间-->
        <div>
          <el-form-item label="发布时间" prop="date">
            <div class="block">
              <el-date-picker
                v-model="ruleForm.date"
                type="datetime"
                placeholder="选择日期时间"
                align="right"
                :picker-options="pickerOptions"
              >
              </el-date-picker>
            </div>
          </el-form-item>
        </div>
      </div>
      <!--//编辑器-->
      <div>
        <el-form-item label="发布文章" prop="text">
          <mavon-editor v-model="ruleForm.text" />
        </el-form-item>
      </div>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "Compile",
  components: {},
  props: {},
  data() {
    return {
      Compile: {}, //接收发布的信息
      pickerOptions: {},
      ruleForm: {
            // _id:{},
            title: " ", //标题的值
            abstract: "", //摘要
            author: "", //作者
            category: "", //类目的值
            source: "", //来源
            star: "", //重要性
            text: "", //编辑器的 值
            date: {}, //发布时间
            grade: {
                value1: [], //评分星级
                colors: ["#99A9BF", "#F7BA2A", "#FF9900"]
                // 等同于 { 2: '#99A9BF', 4: { value: '#F7BA2A', excluded: true }, 5: '#FF9900' }
            }
        },
      rules: {
        //    验证规则
        title: [
          //标题
          { message: "请输入标题内容", trigger: "blur" },
          { min: 1, max: 16, message: "长度在 1 到 16 个字符", trigger: "blur" }
        ],
        abstract: [
          //摘要
          { message: "请输入摘要内容", trigger: "blur" },
          { min: 1, max: 10, message: "长度在 1 到 10 个字符", trigger: "blur" }
        ],
        author: [
          //作者
          { message: "请输入名字", trigger: "blur" },
          { min: 2, max: 4, message: "长度在 2 到 4 个字符", trigger: "blur" }
        ],
        category: [
          //类目
          { message: "请输入类目", trigger: "change" }
        ],
        source: [{ message: "请输入来源", trigger: "change" }], //来源
        star: [
          //重要性
          { message: "请输入重要程度", trigger: "change" }
        ],
        text: [
          //文章内容
          { message: "请输入文章内容", trigger: "blur" },
          {
            min: 1,
            max: 200,
            message: "长度在 1 到 200 个字符",
            trigger: "blur"
          }
        ],
        date: [], //发布时间
        pickerOptions: {
          //时间选择器的验证
          shortcuts: [
            {
              text: "今天",
              onClick(picker) {
                picker.$emit("pick", new Date());
              }
            },
            {
              text: "昨天",
              onClick(picker) {
                const date = new Date();
                date.setTime(date.getTime() - 3600 * 1000 * 24);
                picker.$emit("pick", date);
              }
            },
            {
              text: "一周前",
              onClick(picker) {
                const date = new Date();
                date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
                picker.$emit("pick", date);
              }
            }
          ]
        }
      }
    };
  },
  methods: {
    //验证后表单发布
    submitForm(ruleForm) {
      //验证表单 （参数）
      this.$refs[ruleForm].validate(valid => {
        //当前参数验证有效性
        if (valid) {
          //如果有效
          //请求发表接口
          this.$axios
            .req("/api/article/create", {
              title: this.ruleForm.title,
              abstract: this.ruleForm.abstract,
              author: this.ruleForm.author,
              category: this.ruleForm.category,
              source: this.ruleForm.source,
              star: this.ruleForm.star,
              text: this.ruleForm.text,
              date: this.ruleForm.date
              // _id:this.ruleForm._id,
            }) //传递请求参数
            .then(res => {
              this.open2();
                this.getout()
              console.log(res);
            })
            .catch(err => {
              console.log(err); //返回失败数据
            });
        } else {
          //无效
          console.log("发布失败");
          return false;
        }
      });
    },
    open2() {//成功发布提示
      this.$message({
        message: "已成功发表文章",
        type: "success"
      });
    },
    getCompile() {
      //获取到传过来的参数
      this.$axios
        .req("/api/article/article", { _id: this._id })
        .then(res => {
          // 初始化页面？
            console.log(this.ruleForm.abstract);
          this.Compile = res.data;
          this.ruleForm.title = this.Compile.title;
          this.ruleForm.abstract = this.Compile.abstract;
          this.ruleForm.author = this.Compile.author;
          this.ruleForm.category = this.Compile.category;
          this.ruleForm.source = this.Compile.source;
          this.ruleForm.star = this.Compile.star;
          this.ruleForm.text = this.Compile.text;
          this.ruleForm.date = this.Compile.date;
          // console.log(this.ruleForm.title );
        })
        .catch(err => {
          console.log(err);
        });
    },
    getout() {
      //返回发布页面
      this.$router.push("/yifabu");
    }
  },
  mounted() {
    this._id = this.$route.query.id;
    this.getCompile();
  },
  created() {},
  filters: {},
  computed: {},
  watch: {},
  directives: {}
};
</script>

<style scoped lang="scss">
#editbox {
  line-height: 0;
  margin: 0;
  padding: 0;
  /*background: #d3dce6;*/
}
.head {
  display: flex;
  justify-content: space-around;
  margin-bottom: 7%;
}
#potion {
  display: flex;
  justify-content: space-between;
  margin: 0;
  padding: 0 1% 0 1%;
  line-height: 0;
}
#potion .pot-item {
  height: 40px;
  width: 18%;
  background: white;
  margin-bottom: 2%;
}
#potion .pot-item div {
  width: 100%;
  height: 40px;
  line-height: 0;
  margin: 0;
  padding: 0;
}
</style>
