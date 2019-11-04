<template>
  <div id="regis">
    <div id="forms">
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        class="demo-ruleForm"
      >
        <el-card class="box-card" id="crate">
          <div slot="header" class="clearfix" id="header">
            <span>欢迎来到小艾后台管理系统</span>
          </div>
          <el-form-item label="请输入用户名" prop="username" id="uses">
            <el-input
              v-model="ruleForm.username"
              placeholder="请输入用户名"
            ></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password" id="passs">
            <el-input
              type="password"
              v-model="ruleForm.password"
              autocomplete="off"
              placeholder="请输入密码"
            ></el-input>
          </el-form-item>
          <div class="end">
            <span class="span2">
              <el-button type="primary" @click="submitForm('ruleForm')"
                >立即注册</el-button
              ></span
            >
            <span class="span1">
              <el-button type="primary" @click="goin()"
                >立即登录</el-button
              ></span
            >
          </div>
        </el-card>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Register",
  components: {},
  props: {},
  data() {
    let validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    return {
      ruleForm: {
        username: "",
        password: ""
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 4, max: 10, message: "长度在 4 到 10 个字符", trigger: "blur" }
        ],
        password: [
          {
            required: true,
            validator: validatePass,
            message: "请输入密码",
            trigger: "blur"
          },
          { min: 4, max: 6, message: "长度在 4 到 6 个字符", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    //登录
    goin() {
      this.$router.push("/index");
    },
    open1() {
      this.$message({
        message: "注册成功",
        type: "success"
      });
    },
    //注册
    submitForm(ruleForm) {
      //验证表单
      this.$refs[ruleForm].validate(valid => {
        if (valid) {
          this.$axios
            .req("api/user/register", {
              username: this.ruleForm.username,
              password: this.ruleForm.password
            })
            .then(res => {
              console.log(res);
              //返回成功数据
              if (res.code === 500) {
                this.$message({
                  type: "warning",
                  message: "用户名或密码不正确"
                });
              }
              if (res.code === 200) {
                //保存到本地
                localStorage.setItem("user", this.ruleForm.username);
                //获取登录时间
                let time = new Date();
                console.log(time);
                this.$router.push("/index");
              }
            });

          this.open1();
        } else {
          console.log("error submit!!");
          return false;
        }
      });
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
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}
.el-form-item__content {
  display: flex;
}

.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

.box-card {
  width: 480px;
}
</style>
<style scoped lang="scss">
#regis {
  background: #00b7ff;
  max-width: 1300px;
  max-height: 600px;
  width: 1260px;
  height: 590px;
}
#forms {
  line-height: 0;
  padding: 10% 0 0 30%;
}
#crate {
  height: 300px;
  width: 500px;
  line-height: 0;
}
#crate input {
  width: 200px;
}
.butt {
  /*background: #b3c0d1;*/
  width: 100px;
  height: 40px;
}
#back {
  height: 230px;
  width: 400px;
}
#uses {
  display: flex;
  padding-left: 5%;
}
#passs {
  display: flex;
  padding-left: 5%;
}
#passs .el-input {
  padding-left: 22%;
}
#captes {
  display: flex;
  /*padding-left: 5%;*/
}
#captes .butt {
}
#header {
  text-align: center;
}
.end {
  display: flex;
  justify-content: space-between;
}
.end .span1 {
  padding-right: 25%;
}
.end .span2 {
  padding-left: 16%;
}
</style>
