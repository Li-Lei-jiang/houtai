<template>
  <div>
    <template>
      <el-table
          :data="tableData"
          style="width: 100% ;line-height: 0" >
        <el-table-column
            prop="num"
            label="Oeder-No "
            width="250">
        </el-table-column>
        <el-table-column
            prop="price"
            label="Price"
            width="180">
        </el-table-column>
        <el-table-column
            prop="status"
            label="status">
        </el-table-column>
      </el-table>
    </template>
  </div>
</template>
<style>
  .has-gutter{
    text-align:center;
  }
</style>
<script>
export default {
  name: "OrderLef",
  components: {},
  props: {},
  data() {
    return {
        tableData: []
    };
  },
  methods: {
    getOrderLef() {
      this.$axios
        .req("api/orderData") //拿到传来的数据
        .then(res => {
            this.tableData = res.data;

          // console.log(res);
        })
        .catch(err => {
          console.log(err); //返回失败数据
        });
    }
  },
  mounted() {
    this.getOrderLef();
  },
  created() {},
  filters: {},
  computed: {},
  watch: {},
  directives: {}
};
</script>

<style scoped lang="scss"></style>
