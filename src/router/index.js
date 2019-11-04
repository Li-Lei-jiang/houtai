import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Common from "../views/common/Common";

Vue.use(VueRouter);

const routes = [
  {
    //重定向主页
    path: "/",
    redirect: "/index"
  },

  {
    //登录页
    path: "/enter",
    name: "enter",
    component: () => import("../views/enter/Eenter")
  },
    {
        //注册
        path:"/register",
        name:"register",
        component:() =>import("../views/enter/Register")
    },
  {
    //主页路由
    path: "/home",
    component: Common,
    children: [
      {
        path: "",
        name: "home",
        component: Home
      }
    ]
  },
  {
    //首页路由
    path: "/index",
    component: Common,
    children: [
      {
        path: "",
        name: "index",
        component: () => import("../components/shouye/Index")
      }
    ]
  },
  {
    //已发布路由
    path: "/yifabu",
    component: Common,
    children: [
      {
        path: "",
        name: "yifabu",
        component: () => import("../components/yifabu/Yifabu")
      }
    ]
  },
  {
    //编辑
    path: "/compile",
    component: Common,
    children: [
      {
        path: "",
        name: "compile",
        component: () => import("../components/yifabu/bianji/Compile")
      }
    ]
  },
  {
    //查看
    path: "/look",
    component: Common,
    children: [
      {
        path: "look",
        name: "look",
        component: () => import("../components/yifabu/look/Look")
      }
    ]
  },
  {
    //统计
    path: "/cont",
    component: Common,
    children: [
      {
        path: "",
        name: "cont",
        component: () => import("../components/tongji/Cont")
      }
    ]
  },
  {
    //发表
    path: "/fbiao",
    component: Common,
    children: [
      {
        path: "",
        name: "fbiao",
        component: () => import("../components/fabiao/Fbiao.vue")
      }
    ]
  },
  {
    //标签
    path: "/tags",
    component: Common,
    children: [
      {
        path: "",
        name: "tags",
        component: () => import("../components/tag/tags")
      }
    ]
  },
  {
    //导出
    path: "/excel",
    component: Common,
    children: [
      {
        path: "",
        name: "excel",
        component: () => import("../components/daochu/Excel")
      }
    ]
  },
  {
    //上传
    path: "/goback",
    component: Common,
    children: [
      {
        path: "",
        name: "goback",
        component: () => import("../components/shangchuan/Goback")
      }
    ]
  },
    {
        path:'/'
    },
  {
    //退出
    path: "/esc",
    component: Common,
    children: [
      {
        path: "",
        name: "esc",
        component: () => import("../components/esc/Esc")
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
