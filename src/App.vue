<template>
  <div id="app" @touchmove.prevent>
    <navigation></navigation>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script type="text/ecmascript-6">
  import Navigation from 'components/navigation/navigation'

  export default {
    components: {
      Navigation
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
</style>
