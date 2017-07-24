<template>
  <div class="creation">
    <div v-if="this.token.length !== 0" class="creation-wrapper">
      <h2 class="creation-input">录入哲学家</h2>
      <input ref="creationName" class="creation-input" type="text" placeholder="名字"/>
      <input ref="creationEnglishName" class="creation-input" type="url" placeholder="英文名"/>
      <input ref="creationAvatar" class="creation-input" type="text" placeholder="头像链接"/>
      <input ref="creationPlace" class="creation-input" type="text" placeholder="地区"/>
      <input ref="creationTime" class="creation-input" type="text" placeholder="时代"/>
      <input ref="creationWiki" class="creation-input" type="url" placeholder="wiki链接"/>
      <input ref="creationMainIdea" class="creation-input" type="text" placeholder="主要思想"/>
      <textarea ref="creationIntroduce" class="creation-textarea" placeholder="                    简介"></textarea>
      <span @click="_addPhilosopher" class="button">录入</span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import { addPhilosopher } from 'api/philosopher'
  import { mapGetters, mapMutations } from 'vuex'

  export default {
    computed: {
      ...mapGetters([
        'token',
        'timestamp',
        'uid'
      ])
    },
    methods: {
      _addPhilosopher() {
        if (this.$refs.creationName.value === '' || this.$refs.creationEnglishName.value === '' || this.$refs.creationAvatar.value === '' || this.$refs.creationPlace.value === '' || this.$refs.creationTime.value === '' || this.$refs.creationWiki.value === '' || this.$refs.creationMainIdea.value === '' || this.$refs.creationIntroduce.value === '') {
          this.$swal('录入失败!', '请把哲学家的信息填写完整！', 'warning')
          return
        }
        let params = {
          uid: this.uid,
          token: this.token,
          timestamp: this.timestamp,
          name: this.$refs.creationName.value,
          englishname: this.$refs.creationEnglishName.value,
          avatar: this.$refs.creationAvatar.value,
          place: this.$refs.creationPlace.value,
          time: this.$refs.creationTime.value,
          wiki: this.$refs.creationWiki.value,
          mainidea: this.$refs.creationMainIdea.value,
          introduce: this.$refs.creationIntroduce.value
        }
        addPhilosopher(params).then(res => {
          if (res.status === 0) {
            this.$swal('录入成功!', '录入成功！感谢您对社区知识所做的贡献！', 'success').then(() => {
              this.setListRefresh(1)
              this.$router.push({
                path: `/home`
              })
            })
          } else {
            this.$swal('录入失败!', '网络状态不稳定，请联系管理员或稍后再试！', 'error')
          }
        })
      },
      ...mapMutations({
        setListRefresh: 'SET_LISTREFRESH'
      })
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .creation
    display flex
    position absolute
    top 50px
    left 0
    bottom 0
    width 100%
    background #f3f5f7
    .creation-wrapper
      display flex
      flex-direction column
      margin 30px auto
      .creation-input
        display block
        margin-top 18px
        font-family "Songti SC"
        font-size 14px
        width 150px
        height 30px
        text-align center
        border-radius 4px
      .creation-textarea
        display block
        margin-top 18px
        font-family "Songti SC"
        font-size 12px
        width 150px
        height 30px
        border 1px solid #fff
        border-radius 4px
      .button
        display block
        margin-top 18px
        font-family "Songti SC"
        font-size 14px
        line-height 28px
        width 150px
        vertical-align top
        text-align center
        border-radius 4px
        background-color #42B983
        color #eee
        &:hover
          background-color #3BA170
</style>
