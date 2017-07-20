<template>
  <div class="home-container">
    <div class="home-content">
      <div>
        <div v-if="recommends.length" class="slider-wrapper">
          <div class="slider-content">
            <slider ref="scroll">
              <div v-for="item in recommends">
                <a :href="item">
                  <img @load="loadImage" :src="item">
                </a>
              </div>
            </slider>
          </div>
        </div>
        <div class="box">
          <h1 class="box-title">生命格子</h1>
          <box></box>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Slider from 'base/slider/slider'
  import Box from 'components/box/box'

  export default {
    data() {
      return {
        recommends: []
      }
    },
    created() {
      this._getRecommend()
    },
    methods: {
      _getRecommend() {
        this.recommends = [
          'https://airing.ursb.me/image/cover/13044414,2880,1800.jpg',
          'https://airing.ursb.me/image/cover/12804175,2880,1800.jpg',
          'https://airing.ursb.me/image/cover/10292877,2880,1800.jpg',
          'https://airing.ursb.me/image/cover/10290345,2880,1800.jpg',
          'https://airing.ursb.me/image/cover/10293084,2880,1800.jpg',
          'https://airing.ursb.me/image/cover/10129878,2880,1800.jpg'
        ]
      },
      loadImage() {
        if (!this.checkloaded) {
          this.checkloaded = true
          setTimeout(() => {
            this.$refs.scroll.refresh()
          }, 20)
        }
      }
    },
    components: {
      Slider,
      Box
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"

  .home-container
    display flex
    width 100%
    justify-content center
    .home-content
      height 100%
      overflow hidden
      .slider-wrapper
        position: relative
        width: 100%
        height: 0
        padding-top: 40%
        overflow: hidden
        .slider-content
          position: absolute
          top: 0
          left: 0
          width: 100%
          height: 100%
      .box
        .box-title
          height: 65px
          line-height: 65px
          text-align: center
          font-size: $font-size-medium
          color: $color-theme

</style>
