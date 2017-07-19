<template>
  <div id="app" @touchmove.prevent>
    <avatar></avatar>
    <tab></tab>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script type="text/ecmascript-6">
  import Avatar from 'components/avatar/avatar'
  import Tab from 'components/tab/tab'
  export default {
    components: {
      Avatar,
      Tab
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
</style>
