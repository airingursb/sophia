<template>
  <div class="navigation">
    <div class="title">
      <span @click="selectHome" class="logo"></span>
      <h1 @click="selectHome" class="name">Philosopher</h1>
      <img @click="selectUser"
           class="avatar"
           :src="this.user.face ? this.user.face : 'http://airing.ursb.me/image/cover/philosopherlogo.png'">
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import { mapGetters } from 'vuex'

  export default {
    computed: {
      ...mapGetters([
        'token',
        'user'
      ])
    },
    methods: {
      selectUser() {
        if (this.token.length !== 0) {
          this.$router.push({
            path: `/user`
          })
        }
      },
      selectHome() {
        this.$router.push({
          path: `/home`
        })
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  @import "~common/stylus/mixin"

  .navigation
    position fixed
    top 0
    left 0
    width 100%
    height 50px
    background rgba(47, 47, 47, 0.98)
    z-index 9996
    .title
      margin 10px 20px
      .logo
        display inline-block
        width 30px
        height 30px
        bg-image('logo')
        background-size 30px 30px
        background-repeat no-repeat
      .name
        display inline-block
        margin 6px 0 0 10px
        vertical-align top
        font-size 18px
        color rgb(255, 255, 255)
        font-family "Comic Sans MS"
        line-height 18px
    .avatar
      float right
      width 30px
      height 30px
      border-radius 30px

</style>
