<template>
  <div class="tab">
    <router-link tag="div" class="tab-item" to="/home">
      <span class="tab-link">主页</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/page2">
      <span class="tab-link">页面2</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/page3">
      <span class="tab-link">页面3</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/user">
      <span class="tab-link">我的</span>
    </router-link>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  .tab
    display flex
    margin 20px auto
    width 400px
    height 44px
    line-height 44px
    font-size $font-size-medium
    .tab-item
      flex 1
      text-align center
      .tab-link
        padding-bottom 5px
        color $color-text
      &.router-link-active
        .tab-link
          color $color-theme
          border-bottom 2px solid $color-theme
</style>
