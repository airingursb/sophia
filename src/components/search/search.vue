<template>
  <div class="search-box">
    <i class="icon-search"></i>
    <input ref="query"
           v-model="query"
           class="box"
           :placeholder="placeholder"
           @keyup.enter="_search"/>
    <i @click="clear" v-show="query" class="icon-dismiss"></i>
  </div>
</template>

<script type="text/ecmascript-6">
  import { debounce } from 'common/js/util'
  import { showList, search } from 'api/philosopher'
  import { mapMutations } from 'vuex'

  export default {
    props: {
      placeholder: {
        type: String,
        default: '搜索'
      }
    },
    data() {
      return {
        query: ''
      }
    },
    methods: {
      _search() {
        let params = {
          search: this.query
        }
        search(params).then(res => {
          console.log(res)
          this.setPhilosopherList(res.data)
        })
      },
      clear() {
        this.query = ''
        showList().then(res => {
          this.setPhilosopherList(res.data)
        })
      },
      setQuery(query) {
        this.query = query
      },
      blur() {
        this.$refs.query.blur()
      },
      ...mapMutations({
        setPhilosopherList: 'SET_PHILOSOPHERLIST'
      })
    },
    created() {
      this.$watch('query', debounce((newQuery) => {
        this.$emit('query', newQuery)
      }, 200))
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"

  .search-box
    display flex
    align-items center
    box-sizing border-box
    width 100%
    padding 0 6px
    height 40px
    background #fff
    .icon-search
      font-size 24px
      color $color-background
    .box
      flex 1
      margin 0 5px
      line-height 18px
      background #fff
      color $color-text
      font-size 12px
      outline 0
      &::placeholder
        color $color-text-d
    .icon-dismiss
      font-size 16px
      color $color-background
</style>
