<template>
  <div>
    <ve-histogram :data="pillar"></ve-histogram>
  </div>
</template>

<script>
export default {
  name: "Histogram",
  components: {},
  props: {},
  data() {
    return {
      pillar: {},
      hist: []
    };
  },
  methods: {
    getPillar() {
      this.$axios
        .req("api/homeChat") //拿到传来的数据
        .then(res => {
          this.pillar = res;
          let columns = Object.getOwnPropertyNames(this.pillar.data[0]); //方法把对象转为数组
          this.pillar.columns = columns;
          delete columns[columns.pop()]
            // let hist = Object.getOwnPropertyNames(this.pillar.data[0])
          let hist = this.pillar.data
          this.pillar.rows = hist
            delete this.pillar.data
          // console.log(columns);

        })
        .catch(err => {
          console.log(err); //返回失败数据
        });
    }
  },
  mounted() {
    this.getPillar();
  },
  created() {},
  filters: {},
  computed: {},
  watch: {},
  directives: {}
};
</script>

<style scoped lang="scss"></style>
