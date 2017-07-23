<template>
  <div class="editor">
    <div v-if="this.token.length !== 0" class="editor-wrapper">
      <div class="editor-item">
        <span @click="selectIdea" class="editor-idea-icon"></span>
        <span class="editor-name">添加哲学思想</span>
      </div>
      <div class="editor-item">
        <span @click="selectWorks" class="editor-works-icon"></span>
        <span class="editor-name">添加著作</span>
      </div>
      <div class="editor-item">
        <span @click="selectPaper" class="editor-paper-icon"></span>
        <span class="editor-name">添加论文</span>
      </div>
      <div class="editor-item">
        <span @click="selectData" class="editor-data-icon"></span>
        <span class="editor-name">添加相关资源</span>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import { mapGetters } from 'vuex'
  import { addIdea, addWorks, addPaper, addData } from 'api/philosopher'

  export default {
    computed: {
      ...mapGetters([
        'token',
        'timestamp',
        'uid',
        'philosopher'
      ])
    },
    methods: {
      selectIdea() {
        this.$swal.setDefaults({
          input: 'text',
          confirmButtonText: 'Next &rarr;',
          showCancelButton: true,
          animation: false,
          progressSteps: ['1', '2', '3', '4']
        })
        let steps = [
          {
            title: '典型原文',
            text: '请填写代表该哲学家主要思想的典型原文'
          },
          {
            title: '引用著作',
            text: '请填写典型原文的出处（著作）'
          },
          {
            title: '引用篇章',
            text: '请填写典型原文的出处著作中的篇名/章名（或页码）'
          },
          {
            title: '推荐度评分',
            text: '请为该典型原文评分，分值范围 0.0~5.0'
          }
        ]
        this.$swal.queue(steps).then((result) => {
          this.$swal.resetDefaults()
          console.log(result)
          let params = {
            uid: this.uid,
            token: this.token,
            timestamp: this.timestamp,
            pid: this.philosopher.id,
            content: result[0],
            frombook: result[1],
            frompaper: result[2],
            rating: result[3]
          }
          addIdea(params).then(res => {
            console.log(res)
            if (res.status === 0) {
              this.$swal('添加成功', '感谢您对社区知识的贡献！', 'success')
            }
          })
        }, function () {
          this.$swal.resetDefaults()
        })
      },
      selectWorks() {
        this.$swal.setDefaults({
          input: 'text',
          confirmButtonText: 'Next &rarr;',
          showCancelButton: true,
          animation: false,
          progressSteps: ['1', '2', '3']
        })
        let steps = [
          {
            title: '原著名称',
            text: '请填写代表该哲学家的原著名称'
          },
          {
            title: '原著链接',
            text: '请填写该著作的豆瓣介绍链接'
          },
          {
            title: '推荐度评分',
            text: '请为该原著评分，分值范围 0.0~5.0'
          }
        ]
        this.$swal.queue(steps).then((result) => {
          this.$swal.resetDefaults()
          console.log(result)
          let params = {
            uid: this.uid,
            token: this.token,
            timestamp: this.timestamp,
            pid: this.philosopher.id,
            worksname: result[0],
            worksurl: result[1],
            rating: result[2]
          }
          addWorks(params).then(res => {
            console.log(res)
            if (res.status === 0) {
              this.$swal('添加成功', '感谢您对社区知识的贡献！', 'success')
            }
          })
        }, function () {
          this.$swal.resetDefaults()
        })
      },
      selectPaper() {
        this.$swal.setDefaults({
          input: 'text',
          confirmButtonText: 'Next &rarr;',
          showCancelButton: true,
          animation: false,
          progressSteps: ['1', '2', '3', '4']
        })
        let steps = [
          {
            title: '论文名称',
            text: '请填写学者撰写的关于该哲学家的研究论文名称'
          },
          {
            title: '第一作者',
            text: '请填写该论文的第一作者'
          },
          {
            title: '论文链接',
            text: '请填写该论文的知网链接'
          },
          {
            title: '推荐度评分',
            text: '请为该原著评分，分值范围 0.0~5.0'
          }
        ]
        this.$swal.queue(steps).then((result) => {
          this.$swal.resetDefaults()
          let params = {
            uid: this.uid,
            token: this.token,
            timestamp: this.timestamp,
            pid: this.philosopher.id,
            papername: result[0],
            author: result[1],
            paperurl: result[2],
            rating: result[3]
          }
          addPaper(params).then(res => {
            console.log(res)
            if (res.status === 0) {
              this.$swal('添加成功', '感谢您对社区知识的贡献！', 'success')
            }
          })
        }, function () {
          this.$swal.resetDefaults()
        })
      },
      selectData() {
        this.$swal.setDefaults({
          input: 'text',
          confirmButtonText: 'Next &rarr;',
          showCancelButton: true,
          animation: false,
          progressSteps: ['1', '2', '3']
        })
        let steps = [
          {
            title: '资料名称',
            text: '请填写关于该哲学家的网络资源的名称'
          },
          {
            title: '资料链接',
            text: '请填写该网络资源的链接'
          },
          {
            title: '推荐度评分',
            text: '请为该原著评分，分值范围 0.0~5.0'
          }
        ]
        this.$swal.queue(steps).then((result) => {
          this.$swal.resetDefaults()
          console.log(result)
          let params = {
            uid: this.uid,
            token: this.token,
            timestamp: this.timestamp,
            pid: this.philosopher.id,
            name: result[0],
            url: result[1],
            rating: result[2]
          }
          addData(params).then(res => {
            console.log(res)
            if (res.status === 0) {
              this.$swal('添加成功', '感谢您对社区知识的贡献！', 'success')
            }
          })
        }, function () {
          this.$swal.resetDefaults()
        })
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/mixin"

  .editor
    display flex
    position absolute
    top 50px
    left 0
    bottom 0
    width 100%
    background #f3f5f7
    .editor-wrapper
      display flex
      flex-direction row
      margin 30px auto
      .editor-item
        width 120px
        height 200px
        text-align center
        margin auto 20px
        .editor-idea-icon
          display block
          margin 20px auto
          width 100px
          height 100px
          bg-image('talk')
          background-size 100px 100px
          background-repeat no-repeat
          &:hover
            width 110px
            height 110px
            background-size 110px 110px
            background-repeat no-repeat
        .editor-works-icon
          display block
          margin 20px auto
          width 100px
          height 100px
          bg-image('book')
          background-size 100px 100px
          background-repeat no-repeat
          &:hover
            width 110px
            height 110px
            background-size 110px 110px
            background-repeat no-repeat
        .editor-paper-icon
          display block
          margin 20px auto
          width 100px
          height 100px
          bg-image('paper')
          background-size 100px 100px
          background-repeat no-repeat
          &:hover
            width 110px
            height 110px
            background-size 110px 110px
            background-repeat no-repeat
        .editor-data-icon
          display block
          margin 20px auto
          width 100px
          height 100px
          bg-image('data')
          background-size 100px 100px
          background-repeat no-repeat
          &:hover
            width 110px
            height 110px
            background-size 110px 110px
            background-repeat no-repeat
        .editor-name
          font-size 14px
          font-family "Songti SC"

</style>
