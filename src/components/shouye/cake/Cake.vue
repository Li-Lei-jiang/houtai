<template>
  <div>
   <ve-pie :data="ringChat"></ve-pie>
  </div>
</template>

<script>
export default {
  name: "Cake",
  components: {},
  props: {},
  data() {
    return {
      ringChat: [],
        cake:{},
    };
  },
  methods: {
    getringChat() {
      this.$axios
        .req("api/ringChat") //拿到传来的数据
        .then(res => {
          this.ringChat = res;
          let columns = Object.getOwnPropertyNames(this.ringChat.data[0]);
          this.ringChat.columns = columns;
          delete (columns[columns.pop()])
            let cake = this.ringChat.data;
          this.ringChat.rows = cake ;
          delete this.ringChat.data ;
          // console.log(cake)
          //   alert(11)
        })
        .catch(err => {
          console.log(err); //返回失败数据
        });
    }
  },
  mounted() {
      this.getringChat()
  },
  created() {},
  filters: {},
  computed: {},
  watch: {},
  directives: {}
};
</script>

<style scoped lang="scss"></style>
