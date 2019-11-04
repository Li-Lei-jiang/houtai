<template>
  <div id="excle">
    <!--    输入搜索框-->
    <div id="ipt">
      <el-input v-model="inutName" placeholder="请输商品名"></el-input>
    </div>
    <!--    展示界面-->
    <div>
      <template>
        <el-table
          border
          style="width: 100%;"
          :data="
            tableData.slice(
              (currentPage - 1) * pageSize,
              currentPage * pageSize
            )
          "
        >
          <el-table-column prop="NAME" label="商品号" width="300">
          </el-table-column>
          <el-table-column
            prop="GOODS_SERIAL_NUMBER"
            label="商品号"
            width="300"
          >
          </el-table-column>

          <el-table-column prop="ORI_PRICE" label="原价" width="140px">
          </el-table-column>
          <el-table-column prop="PRESENT_PRICE" label="现价" width="140px">
          </el-table-column>
          <el-table-column
            prop="behavior"
            label="操作"
            header-align="center"
            align="center"
          >
            <template slot-scope="scope">
              <span
                ><el-button
                  type="primary"
                  icon="el-icon-edit"
                  @click="modifier(scope.row)"
                  >修改</el-button
                ></span
              >
              <span
                ><el-button
                  type="danger"
                  icon="el-icon-delete"
                  @click="hangDel(scope, $index, scope.row)"
                  >删除</el-button
                ></span
              >
              <!--    点击编辑显示编辑界面-->
              <div id="primar" v-if="flag">
                <el-card class="box-card">
                  <div class="prinpt">
                    <span>名称;</span> <el-input v-model="inutName"></el-input>
                  </div>
                  <div class="prinpt">
                    <span>原价:</span> <el-input v-model="costipt"></el-input>
                  </div>
                  <div class="prinpt">
                    <span>现价:</span
                    ><el-input v-model="currentIndex"></el-input>
                  </div>
                  <div class="butto">
                    <span><el-button @click="cancel()">取消</el-button></span>
                    <span
                      ><el-button type="primary" @click="enters()"
                        >确定</el-button
                      ></span
                    >
                  </div>
                </el-card>
              </div>
            </template>
          </el-table-column>
        </el-table>
        <!--        分页-->
        <div id="page">
          <div class="block">
            <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="currentPage"
              :page-sizes="[100, 200, 300, 400, 500, 600, 700]"
              :page-size="pageSize"
              layout="total, sizes, prev, pager, next, jumper"
              :total="total"
            >
              hide-on-single-page >
            </el-pagination>
          </div>
        </div>
        <div id="end">
          <span><el-button type="primary">导出xls</el-button></span>
          <span class="sp1"><el-button type="danger">导出csv</el-button></span>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: "Excel",
  components: {},
  props: {},
  data() {
    return {
      flag: false, //显示与隐藏
      total: 0, //默认总数据
      tableData: [], //总数据
      currentPage: 1, //初始页默认
      inutName: "", //搜索的名字
      editipt_name: "", //编辑页面的商品输入框
      pageSize: 100, //当前页条数
      tableDataEnd: [], //存放筛选的数据
      NAME: "", //商品的名字
      currentIndex: 0, //当前选择的行下标
      costipt: 0, //原价输入
      currentPrice: 0 //现价输入

    };
  },
  methods: {
    //拿到数据
    gettableData() {
      this.$axios
        .req("/api/tableData")
        .then(res => {
          this.tableData = res.data;
          this.total = res.data.length;
          this.tableDataEnd = res.data;
          // console.log(this.tableData);
        })
        .catch(err => {
          console.log(err);
        });
    },
    //分页以及展示数据
    handleSizeChange(size) {
      //得到每页显示的数据
      this.pageSize = size;
      console.log(`每页 ${size} 条`);
    },
    handleCurrentChange(currentPage) {
      //得到每页变化的数据
      this.currentPage = currentPage;
      console.log(`当前页: ${currentPage}`);
    },
    // //修改单价(假修改)点击事件1-1
    modifier(row) {
      let index = this.tableData.indexOf(row); //定位当前行的下标
      this.currentIndex = index; //得到下标
      this.inutName = this.tableData[index].NAME; //得到输入商品值
      this.costipt = this.tableData[index].ORI_PRICE;//得到原价
      this.currentPrice = this.tableData[index].PRESENT_PRICE;//得到现价
        // console.log(this.currentPrice)
      this.flag = true;
    },
    cancel() {
      //取消编辑面板点击事件2-1
      this.flag = false;
    },
    //确认编辑面板输入框点击事件2-2
    enters() {
      this.tableData[this.inutName].NAME = this.editipt_name; //得到当前选中的商品名
      this.tableData[this.inutName].ORI_PRICE = this.costipt; //得到当前选中的商品原价
      this.tableData[this.inutName].PRESENT_PRICE = this.currentPrice; //得到当前选中的商品现价
      this.flag = false;
    },
    //删除当前行 点击事件1-2
    hangDel(index) {
      this.tableData.splice(index, 1);
      this.total = this.total - 1;
    }
  },

  mounted() {
    this.gettableData();
  },
  created() {},
  filters: {},
  computed: {},
  watch: {
    //搜索匹配监听input事件并匹配输出
    inutName(val) {
      if (val.trim() !== "") {
        this.tableData = this.tableDataEnd.filter(item => {
          return JSON.stringify(item.NAME).includes(val);
        });
        this.total = this.tableData.length;
        // console.log(this.tableDataEnd);
      } else {
        this.tableData = this.tableDataEnd;
        this.total = this.tableDataEnd.length;
      }
    },
    //切换与显示修改 面板
    cuts() {
      this.flag = false;
    }
  },
  directives: {}
};
</script>
<style>
.has-gutter {
  text-align: center;
}
.el-table td,
.el-table th.is-leaf {
  text-align: center;
}
</style>

<style scoped lang="scss">
#excle {
  line-height: 0px;
}
#ipt {
  width: 300px;
  margin-bottom: 3%;
}
.iptu {
  width: 300px;
  height: 200px;
  line-height: 25px;
}
#page {
  text-align: left;
  margin: 2% 0;
}
#end {
  text-align: left;
}
.sp1 {
  margin-left: 5%;
}
#primar {
  /*background: #00b7ff;*/
  text-align: left;
}
.prinpt {
  height: 40px;
  line-height: 40px;
  margin: 1% 0;
  width: 300px;
  display: flex;
  justify-content: space-around;
}
.prinpt span {
  width: 80px;
  text-align: center;
}
.butto {
  text-align: right;
}
.butto span {
  margin-left: 2%;
}
/*  卡片*/
.text {
  font-size: 14px;
}

.item {
  padding: 18px 0;
}

.box-card {
  width: 400px;
  line-height: 30px;
}
</style>
