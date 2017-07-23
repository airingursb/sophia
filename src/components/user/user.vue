<template>
  <div class="user" v-if="this.token.length !== 0">
    <img class="user-avatar"
         :src="this.imgDataUrl === '' ? this.user.face : this.imgDataUrl"
         @click="toggleShow">
    <my-upload
        field="img"
        @crop-success="cropSuccess"
        @crop-upload-success="cropUploadSuccess"
        @crop-upload-fail="cropUploadFail"
        v-model="show"
        :width="300"
        :height="300"
        url="/api/upload"
        :params="params"
        :headers="headers"
        img-format="png">
    </my-upload>
    <div class="user-wrapper">
      <span class="user-text">姓名：{{this.user.username}}
        <span v-if="this.user.state === '1'" class="authentication"></span>
      </span>
      <span class="user-text">性别：{{this.user.sex === 0 ? '男' : '女'}}</span>
      <span class="user-text">学校：{{this.user.school}}</span>
      <span class="user-text">班级：{{this.user.className}}</span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import myUpload from 'vue-image-crop-upload/upload-2.vue'
  import { updateFace } from 'api/user'
  import { mapGetters, mapActions } from 'vuex'

  export default {
    data() {
      return {
        show: false,
        headers: {
          smail: '*_~'
        },
        params: {
          timestamp: +new Date()
        },
        imgDataUrl: ''
      }
    },
    computed: {
      ...mapGetters([
        'user',
        'timestamp',
        'token',
        'uid'
      ])
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
        let params = {
          uid: this.uid,
          timestamp: this.timestamp,
          token: this.token,
          face: 'static/avatars/' + this.params.timestamp + '.png'
        }
        updateFace(params).then(res => {
          if (res.status === 0) {
            console.log('success')
            console.log(res.user)
            let data = {
              uid: this.uid,
              token: this.token,
              timestamp: this.timestamp,
              user: res.user
            }
            this.saveLogin(data)
          } else {
            console.log('error')
          }
        })
      },
      cropUploadFail(status, field) {
        console.log('-------- upload fail --------')
        console.log(status)
        console.log('field: ' + field)
      },
      ...mapActions([
        'saveLogin'
      ])
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
