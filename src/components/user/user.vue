<template>
  <div class="user">
    <a class="user-avatar" @click="toggleShow"></a>
    <my-upload field="img"
               @crop-success="cropSuccess"
               @crop-upload-success="cropUploadSuccess"
               @crop-upload-fail="cropUploadFail"
               v-model="show"
               :width="300"
               :height="300"
               url="/upload"
               :params="params"
               :headers="headers"
               img-format="png"></my-upload>
    <img :src="imgDataUrl">
    <div class="user-wrapper">
      <span class="user-text">姓名：邓国雄<span class="authentication"></span></span>
      <span class="user-text">性别：男</span>
      <span class="user-text">学校：中山大学</span>
      <span class="user-text">班级：17中哲</span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import myUpload from 'vue-image-crop-upload/upload-2.vue'

  export default {
    data() {
      return {
        show: false,
        params: {
          token: '123456798',
          name: 'avatar'
        },
        headers: {
          smail: '*_~'
        },
        imgDataUrl: ''
      }
    },
    methods: {
      toggleShow() {
        this.show = !this.show
      },
      cropSuccess(imgDataUrl, field) {
        console.log('-------- crop success --------')
        this.imgDataUrl = imgDataUrl
      },
      cropUploadSuccess(jsonData, field) {
        console.log('-------- upload success --------')
        console.log(jsonData)
        console.log('field: ' + field)
      },
      cropUploadFail(status, field) {
        console.log('-------- upload fail --------')
        console.log(status)
        console.log('field: ' + field)
      }
    },
    components: {
      myUpload
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .user
    display flex
    flex-direction column
    position absolute
    top 50px
    left 0
    bottom 0
    width 100%
    background-color #fff
    font-size 14px
    font-family "Songti SC"
    color #333
    .user-avatar
      margin 20px auto
      width 80px
      height 80px
      border-radius 80px
      background-color #333
    .user-wrapper
      margin 20px auto
      .authentication
        display inline-block
        vertical-align top
        margin-left 10px
        width 14px
        height 14px
        background url("authentication.png")
        background-size 14px 14px
        background-repeat no-repeat
      .user-text
        display block
        margin-top 15px
</style>
