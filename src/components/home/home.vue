<template>
  <div class="container">
    <scroll class="home-content">
      <div>
        <div v-if="recommends.length" class="slider-wrapper">
          <div class="slider-content">
            <slider ref="scroll">
              <div v-for="item in recommends">
                <a href="">
                  <img @load="loadImage" :src="item">
                </a>
              </div>
            </slider>
          </div>
        </div>
      </div>
    </scroll>
  </div>
</template>

<script type="text/ecmascript-6">
  import Slider from 'base/slider/slider'
  import Scroll from 'base/scroll/scroll'

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
      Scroll
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"

  .container
    position fixed
    width 100%
    top 180px
    bottom 0
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
</style>
