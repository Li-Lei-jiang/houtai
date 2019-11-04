<template>
  <div id="upback">
    <h1>支持拖拽</h1>
    <div class="text">element ui 自带上传组件</div>
    <div>
      <el-upload
        class="upload-demo"
        drag
        accept="image/gif, image/jpeg, text/plain"
        action="/api/upload"
        multiple
        :limit="3"
        name="file"
      >
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">
          将文件拖到此处，或<el-button>点击上传</el-button>
        </div>
        <div class="el-upload__tip" slot="tip">
          只能上传jpg/png文件，且不超过500kb
        </div>
      </el-upload>
    </div>
    <h1>支持剪裁</h1>

    <div class="text">vue-image-crop-upload</div>
    <div>
      <myUpload
        field="file"
        @crop-success="cropSuccess"
        @crop-upload-success="cropUploadSuccess"
        @crop-upload-faild="cropUploadFaild"
        v-model="show"
        :width="200"
        :height="200"
        url="/api/upload"
      >
      </myUpload>
      <img :src="imgDataUrl" />
    </div>
    <div>
      <el-button type="primary" @click="toggleShow">上传图片</el-button>
    </div>
  </div>
</template>

<script>
import myUpload from "vue-image-crop-upload";
export default {
  name: "Goback",
  components: {
    myUpload
  },
  props: {},
  data() {
    return {
      imgDataUrl: "",
      show: false,
      size: 2.1
    };
  },
  methods: {
    toggleShow() {
      this.show = !this.show;
    },
    cropSuccess(imgDataUrl, field) {
      console.log("-------- crop success --------", imgDataUrl, field);
      this.imgDataUrl = imgDataUrl;
    },
    //上传成功回调
    cropUploadSuccess(jsonData, field) {
      console.log("-------- upload success --------");
      // this.imgDataUrl = jsonData.files.Avatar1;
      console.log(jsonData);
      console.log("field: " + field);
    },
    //上传失败回调
    cropUploadFaild(status, field) {
      console.log("-------- upload fail --------");
      console.log("上传失败状态" + status);
      console.log("field: " + field);
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

<style scoped lang="scss">
#upback {
  text-align: left;
  line-height: 20px;
  padding: 1% 2%;
  background: white;
}
.text {
  background: #b3c0d1;
  padding-left: 3%;
  font-size: 18px;
  line-height: 40px;
  margin-bottom: 1%;
  height: 40px;
}
</style>
