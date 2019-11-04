<template>
  <div id="canvas">
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
          <el-form-item label="请输入用户名" prop="username" id="username">
            <el-input
              v-model="ruleForm.username"
              placeholder="请输入用户名"
            ></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password" id="password">
            <el-input
              type="password"
              v-model="ruleForm.password"
              autocomplete="off"
              placeholder="请输入密码"
            ></el-input>
          </el-form-item>
          <el-form-item label="请输入验证码" prop="code"  id="pact">
            <el-input
              v-model="ruleForm.code"
              placeholder="请输入验证码（不区分大小写）"
            ></el-input>
            <div class="butt" v-html="codes" @click="getcodes()"></div>
          </el-form-item>
          <div class="end">
            <span class="span1">
              <el-button type="primary" @click="submitForm('ruleForm')"
                >立即登录</el-button
              ></span
            >
            <span class="span2">
              <el-button type="primary" @click="goregister()">立即注册</el-button></span
            >
          </div>
        </el-card>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Eenter",
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
      codes: "",
      ruleForm: {
        username: "",
        password: "",
        code: ""
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
          { min: 4, max: 8, message: "长度在 4 到 8 个字符", trigger: "blur" }
        ],
        code: [{ required: true }]
      }
    };
  },
  methods: {
    //验证表单
    submitForm(ruleForm) {
      this.$refs[ruleForm].validate(valid => {
        if (valid) {
          this.$axios
            .req("api/user/login", {
              username: this.ruleForm.username,
              password: this.ruleForm.password,
              code: this.ruleForm.code,
            })
            .then(res => {
                console.log(res)
                this.$router.push("/index");
              //返回成功数据
              if (res.code === 1) {
                //验证验证码是否正确
                this.$message({
                  type: "error",
                  message: "验证码输入错误"
                });
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
                }
              }
            });
          this.open1();
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    //验证码
    getcodes() {
      this.$axios
        .req("/api/captcha")
        .then(res => {
          //返回成功数据
          this.codes = res;
        })
        .catch(err => {
          //返回失败数据
          console.log(err);
        });
    },
    //注册
    goregister(){
        this.$router.push('/register')
    },
    open1() {
      this.$message({
        message: "登录成功",
        type: "success"
      });
    }
  },
  mounted() {
      this.getcodes()
  },
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
  width: 200px;
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
  /*#pact{*/
  /*  width: 100px;*/
  /*}*/
</style>
<style>
.el-card__body {
  padding: 10px;
}
.el-form-item is-required {
  display: flex !important;
}
.el-form-item__label {
  line-height: 30px;
}
.el-form-item__content {
  height: 40px;
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
</style>
<style scoped lang="scss">
#canvas {
  line-height: 0;
  width: 100vw;
  height: 100vh;
  background: #00b7ff;
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
  padding-left: 16%;
}
.end .span2 {
  padding-right: 25%;
}
/*.el-button butt el-button--default{*/
/*  margin-left: 4%;*/
/*}*/
.butt {
  /*background: #b3c0d1;*/
  width: 100px;
  height: 40px;
}
</style>
