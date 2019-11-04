<template>
  <div id="radarChat">
    <ve-radar :data="radarChat" height="350px"></ve-radar>
  </div>
</template>

<script>
export default {
  name: "Radar",
  components: {},
  props: {},
  data() {
    return {
      radarChat: {},
        radar: []
    };
  },
  methods: {
    getradarChat() {
      this.$axios
        .req("api/radarChat") //拿到传来的数据
        .then(res => {
          this.radarChat = res;
          // console.log(this.radarChat); //返回成数据
          let columns = Object.getOwnPropertyNames(this.radarChat.data[0]);
          this.radarChat.columns = columns;
          delete columns[columns.pop()];
          let radar = this.radarChat.data;
          this.radarChat.rows= radar;
          delete this.radarChat.data;
          // console.log(radar);
        })
        .catch(err => {
          console.log(err); //返回失败数据
        });
    }
  },
  mounted() {
    this.getradarChat();
    // alert(11)
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
#radarChat {
  margin: 0;
  padding: 0;
  width: 34%;
  height: 350px;
}
</style>
