<template>
  <div id="All">
    <el-table :data="tableData" style="width:100%;line-height: 0;">
      <!--        序列-->
      <el-table-column type="index" :index="indexMethod" width="60">
      </el-table-column>
      <!--        标题-->
      <el-table-column prop="title" label="标题" width="120"> </el-table-column>
      <!--       作者 -->
      <el-table-column prop="author" label="作者" width="100">
      </el-table-column>
      <!--        类目-->
      <el-table-column prop="category" label="类目" width="100">
      </el-table-column>
      <!--        来源-->
      <el-table-column prop="source" label="来源" width="150">
      </el-table-column>
      <!--        重要程度-->
      <el-table-column prop="star" label="重要程度" width="180">
        <!--        使用template 方法的插槽功能，disabled 禁用效果-->
        <template slot-scope="scope">
          <el-rate disabled v-model="scope.row.star"></el-rate>
        </template>
      </el-table-column>
      <!--        发布时间-->
      <el-table-column prop="date" label="发布时间" width="140">
      </el-table-column>

      <el-table-column prop="address" label="操作" width="280" class="behavior">
        <template slot-scope="scope">
          <el-button type="primary" @click="goCompile(scope.row)">编辑</el-button>
          <!--   scope.row  父元素加上vue 自带的插槽才可以用    //得到一行的数据-->
          <el-button type="warning" @click="rowIndex(scope.row)"
            >删除</el-button
          >
          <el-button type="success" @click="goLook(scope.row)">查看</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!--    分页-->
    <div>
      <div class="block">
        <span class="demonstration">完整功能</span>
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage4"
          :page-sizes="[10, 20, 30, 40]"
          :page-size="10"
          layout="total, sizes, prev, pager, next, jumper"
          :total="100"
        >
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Yifabu",
  components: {},
  props: {},
  data() {
    return {
      tableData: [],
      currentPage4: 4
    };
  },
  methods: {
    //拿到传来的数据
    gettableData() {
      this.$axios
        .req("/api/article/allArticle")
        .then(res => {
          this.tableData = res.data;
          this.tableData.map(item => {
            //循环数组集合 箭头含函数的方式
            item.star = Number(item.star); //转换为数字
          });
          // console.log(res);
        })
        .catch(err => {
          console.log(err); //返回失败数据
        });
    },
    //分页
    indexMethod(index) {
      return index * 1;
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    // 删除数据
    rowIndex(row) {
      //这是个方法 需要传递参数
      this.$axios
        .req("/api/article/delete", {
          _id: row._id
        })
        .then(res => {
          console.log(res);
          this.tableData.map(item => {
            item.row = Number(item.row);
          });
          this.$message({
            message: "删除成功",
            type: "success"
          });
          if (res.code === 200) {
            // console.log(res.data.code);
            this.$axios
              .req("/api/article/allArticle")
              .then(res => {
                this.tableData = res.data;
                console.log(this.tableData);
              })
              .catch(e => {
                console.log(e);
              });
          }
        });
    },
    goCompile(row) {//路由传参给编辑页面 去到编辑页面
        // console.log(row);
        this.$router.push({
          name:'compile',query:{id:row._id}
      });
    },
    goLook(row) {
        // console.log(row)
      this.$router.push({
          name:'look',query:{id:row._id}
      });
    }
  },
  mounted() {
    this.gettableData();

  },
  created() {},
  filters: {},
  computed: {},
  watch: {},
  directives: {}
};
</script>

<style scoped lang="scss">
#All {
  max-width: 1143px;
  width: 1143px;
  line-height: 0;
}
.has-gutter {
  text-align: center !important;
}
/*.behavior{*/
/* display: flex;*/
/*  justify-content: space-between;*/
/*}*/
</style>
