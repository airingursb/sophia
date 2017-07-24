<template>
  <div class="home">
    <div class="left-wrapper">
      <search class="search-layer"
              ref="layer">
      </search>
      <scroll @scroll="scroll"
              :listen-scroll="listenScroll"
              :probe-type="probeType"
              class="menu-wrapper"
              ref="list"
              :data="philosopherList">
        <div v-for="item in philosopherList"
             class="menu-item">
          <span @click.stop="selectItem(item.pid)" ref="item" class="text border-1px">
            <img class="icon" :src="item.avatar">
            <span class="item-name">{{item.name}}</span>
          </span>
        </div>
      </scroll>
    </div>
    <div v-show="this.token.length !== 0" class="philosopher-wrapper">
      <div ref="editor" class="editor">
        <span class="add" @click="selectAdd"></span>
        <span class="delete" @click="selectDelete"></span>
        <span class="edit" @click="selectEdit"></span>
        <span class="comment" @click="selectComment">评论</span>
      </div>
      <div class="philosopher">
        <div class="info">
          <img class="info-avatar"
               :src="this.philosopher.avatar">
          <div class="info-name">
            <h2 class="philosopher-name">{{this.philosopher.name}}</h2>
            <h2 class="philosopher-name">{{this.philosopher.englishname}}</h2>
          </div>
          <div class="info-content">
            <span class="idea">主要思想：{{this.philosopher.mainidea}}</span>
            <span class="place">地区：{{this.philosopher.place}}</span>
            <span class="time">时代：{{this.philosopher.time}}</span>
            <span class="url">维基百科：<a :href="this.philosopher.wiki">{{this.philosopher.wiki}}</a></span>
          </div>
        </div>
        <div class="center-wrapper">
          <div class="center-content">
            <h3 class="center-title">哲学主张</h3>
            <div class="center-text-wrapper">
              <span v-for="item in philosopher.ideas"
                    class="center-text">{{item.content}}（《{{item.frombook}}·{{item.frompaper}}》）</span>
            </div>
          </div>
        </div>
        <div class="content-wrapper">
          <div class="left-content">
            <div class="tab">
              <div class="tab-item">
                <span ref="tab0" @click="tab(0)" class="tab-link">介绍</span>
              </div>
              <div class="tab-item">
                <span ref="tab1" @click="tab(1)" class="tab-link">著作</span>
              </div>
              <div class="tab-item">
                <span ref="tab2" @click="tab(2)" class="tab-link">论文</span>
              </div>
              <div class="tab-item">
                <span ref="tab3" @click="tab(3)" class="tab-link">相关</span>
              </div>
            </div>
            <div v-show="this.tabNow === 0" class="tab-content-0">
              {{this.philosopher.introduce}}
            </div>
            <div v-show="this.tabNow === 1" class="tab-content-1">
              <ul>
                <li class="work-item" v-for="item in philosopher.works">
                  <a :href="item.worksurl" class="work-item-title">《{{item.worksname}}》</a>
                  <star class="work-item-score" :size="24" :score="item.rating"></star>
                </li>
              </ul>
            </div>
            <div v-show="this.tabNow === 2" class="tab-content-2">
              <ul>
                <li class="work-item" v-for="item in philosopher.papers">
                  <a :href="item.paper_url" class="work-item-title">{{item.paper_name}}</a>
                  <star class="work-item-score" :size="24" :score="item.rating"></star>
                </li>
              </ul>
            </div>
            <div v-show="this.tabNow === 3" class="tab-content-3">
              <ul>
                <li class="work-item" v-for="item in philosopher.data">
                  <a :href="item.url" class="work-item-title">{{item.name}}</a>
                  <star class="work-item-score" :size="24" :score="item.rating"></star>
                </li>
              </ul>
            </div>
          </div>
          <div class="right-content">
            <div class="tag-wrapper">
              <h3 class="right-content-title">标签<span class="icon-tag" @click="_addTag"></span></h3>
              <ul v-if="philosopher.tags !== ''">
                <li class="tags" v-for="tag in philosopher.tags.split(',')">
                  <span class="tag" @click="_showTags(tag)">{{tag}}</span>
                </li>
              </ul>
            </div>
            <div class="tag-wrapper">
              <h3 class="right-content-title">评论</h3>
              <ul>
                <li class="comments" v-for="item in philosopher.comments">
                  <span class="comment">
                    <img class="comment-avatar" :src="item.face_url"/>
                    <span class="comment-user-name">{{item.username}} · {{item.className}}</span>
                    <span class="comment-content">{{item.msg}}</span>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-show="this.token.length === 0" ref="login" class="login-wrapper">
      <div class="login">
        <span class="login-logo"></span>
        <span v-if="this.loginPage" class="login-username">
          <input ref="loginPhoneNumber" class="login-username-input" type="text" placeholder="手机号"/>
          <input ref="loginPassword" class="login-username-input" type="password" placeholder="密码"/>
          <span @click="_login" class="button">登录</span>
          <span @click="selectRegister" class="no-account">没有账户？</span>
        </span>
        <span v-if="!this.loginPage" class="login-username">
          <input ref="registerPhoneNumber" class="login-username-input" type="text" placeholder="手机号"/>
          <input ref="registerCode" class="login-username-input" type="text" placeholder="验证码"/>
          <input ref="registerPassword" class="login-username-input" type="password" placeholder="密码"/>
          <input ref="registerUsername" class="login-username-input" type="text" placeholder="真实姓名"/>
          <input ref="registerSex" class="login-username-input" type="text" placeholder="性别(男/女)"/>
          <input ref="registerClassName" class="login-username-input" type="text" placeholder="所在班级"/>
          <input ref="registerSchool" class="login-username-input" type="text" placeholder="所在学校"/>
          <span @click="_code" class="button">发送验证码</span>
          <span @click="_register" class="button">注册</span>
          <span @click="selectLogin" class="no-account">已有账户？</span>
        </span>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Scroll from 'base/scroll/scroll'
  import Star from 'components/star/star'
  import Search from 'components/search/search'
  import { mapGetters, mapMutations, mapActions } from 'vuex'
  import { login, register, code } from 'api/user'
  import { showList, showDetail, addComment, addTag, showTags } from 'api/philosopher'
  import sha1 from 'sha1'

  export default {
    data() {
      return {
        tabNow: 0,
        scrollY: 0,
        loginPage: true,
        codeTime: 0
      }
    },
    created() {
      this.probeType = 3
      this.listenScroll = true
      this._showList()
    },
    mounted() {
      this.tab(this.tabNow)
      this._showList()
    },
    computed: {
      ...mapGetters([
        'token',
        'timestamp',
        'uid',
        'user',
        'philosopherList',
        'philosopher',
        'listRefresh'
      ])
    },
    watch: {
      scrollY(newY) {
        this.$refs.layer.$el.style['transform'] = `translate3d(0, ${newY}px, 0)`
        this.$refs.layer.$el.style['webkitTransform'] = `translate3d(0, ${newY}px, 0)`
        if (newY > -40) {
          this.$refs.list.$el.style.top = 90 + newY + 'px'
        }
      },
      listRefresh(newListRefresh) {
        if (newListRefresh === 1) {
          this._showList()
          this.setListRefresh(0)
        }
      }
    },
    methods: {
      scroll(pos) {
        this.scrollY = pos.y
      },
      tab(tabNow) {
        switch (tabNow) {
          case 0:
            this.$refs.tab0.style.color = '#ffcd32'
            this.$refs.tab0.style.borderBottom = '2px solid #ffcd32'
            this.$refs.tab1.style.color = '#42B983'
            this.$refs.tab1.style.borderBottom = ''
            this.$refs.tab2.style.color = '#42B983'
            this.$refs.tab2.style.borderBottom = ''
            this.$refs.tab3.style.color = '#42B983'
            this.$refs.tab3.style.borderBottom = ''
            this.tabNow = 0
            break
          case 1:
            this.$refs.tab1.style.color = '#ffcd32'
            this.$refs.tab1.style.borderBottom = '2px solid #ffcd32'
            this.$refs.tab0.style.color = '#42B983'
            this.$refs.tab0.style.borderBottom = ''
            this.$refs.tab2.style.color = '#42B983'
            this.$refs.tab2.style.borderBottom = ''
            this.$refs.tab3.style.color = '#42B983'
            this.$refs.tab3.style.borderBottom = ''
            this.tabNow = 1
            break
          case 2:
            this.$refs.tab2.style.color = '#ffcd32'
            this.$refs.tab2.style.borderBottom = '2px solid #ffcd32'
            this.$refs.tab0.style.color = '#42B983'
            this.$refs.tab0.style.borderBottom = ''
            this.$refs.tab1.style.color = '#42B983'
            this.$refs.tab1.style.borderBottom = ''
            this.$refs.tab3.style.color = '#42B983'
            this.$refs.tab3.style.borderBottom = ''
            this.tabNow = 2
            break
          case 3:
            this.$refs.tab3.style.color = '#ffcd32'
            this.$refs.tab3.style.borderBottom = '2px solid #ffcd32'
            this.$refs.tab0.style.color = '#42B983'
            this.$refs.tab0.style.borderBottom = ''
            this.$refs.tab2.style.color = '#42B983'
            this.$refs.tab2.style.borderBottom = ''
            this.$refs.tab1.style.color = '#42B983'
            this.$refs.tab1.style.borderBottom = ''
            this.tabNow = 3
            break
          default:
            break
        }
      },
      selectRegister() {
        this.loginPage = !this.loginPage
        this.$refs.login.style.height = '700px'
      },
      selectLogin() {
        this.loginPage = !this.loginPage
        this.$refs.login.style.height = '541px'
      },
      selectAdd() {
        if (this.user.state === '1') {
          this.$router.push({
            path: `/creation`
          })
        } else {
          this.$swal('没有权限!', '对不起，你没有权限管理社区知识的权限！请联系管理员进行认证', 'error')
        }
      },
      selectDelete() {
        this.$swal('没有权限!', '对不起，你没有权限管理社区知识的权限！请联系管理员进行认证', 'error')
      },
      selectEdit() {
        if (this.user.state === '1') {
          this.$router.push({
            path: `/editor`
          })
        } else {
          this.$swal('没有权限!', '对不起，你没有权限管理社区知识的权限！请联系管理员进行认证', 'error')
        }
      },
      selectComment() {
        if (this.user.state === '1') {
          this.$swal({
            title: '请您点评该哲学家',
            input: 'text',
            showCancelButton: true,
            confirmButtonText: '提交',
            showLoaderOnConfirm: true,
            preConfirm: (text) => {
              let params = {
                uid: this.uid,
                timestamp: this.timestamp,
                token: this.token,
                msg: text,
                pid: this.philosopher.id
              }
              addComment(params).then(res => {
                if (res.status === 0) {
                  this.$swal('评论成功！', '感谢您为社区知识所做的贡献：）', 'success')
                } else {
                  this.$swal('连接失败!', '请检查自己的网络状态或联系管理员！', 'error')
                }
              })
            },
            allowOutsideClick: false
          })
        } else {
          this.$swal('没有权限!', '对不起，你没有进行实名认证无权发表评论！请联系管理员进行认证', 'error')
        }
      },
      selectItem(pid) {
        let params = {
          uid: this.uid,
          token: this.token,
          timestamp: this.timestamp,
          pid: pid
        }
        showDetail(params).then(res => {
          if (res.status === 0) {
            this.setPhilosopher(res.data)
          } else {
            this.$swal('连接失败!', '请检查自己的网络状态或联系管理员！', 'error')
          }
        })
      },
      _addTag() {
        if (this.user.state === '1') {
          this.$swal({
            title: '请为该哲学家添加标签',
            input: 'text',
            showCancelButton: true,
            confirmButtonText: '提交',
            showLoaderOnConfirm: true,
            preConfirm: (text) => {
              let params = {
                uid: this.uid,
                timestamp: this.timestamp,
                token: this.token,
                tag: text,
                pid: this.philosopher.id
              }
              addTag(params).then(res => {
                if (res.status === 0) {
                  this.$swal('添加成功！', '感谢您为社区知识所做的贡献：）', 'success')
                } else {
                  this.$swal('添加失败!', '该标签已存在，请不要重复添加！', 'error')
                }
              })
            },
            allowOutsideClick: false
          })
        } else {
          this.$swal('没有权限!', '对不起，你没有进行实名认证无权添加标签！请联系管理员进行认证', 'error')
        }
      },
      _showTags(tag) {
        let params = {
          uid: this.uid,
          token: this.token,
          timestamp: this.timestamp,
          tag: tag
        }
        console.log('res')
        showTags(params).then(res => {
          if (res.status === 0) {
            this.setPhilosopherList(res.data)
            this.selectItem(res.data[0].pid)
          }
        })
      },
      _login() {
        if (this.$refs.loginPhoneNumber.value === '' || this.$refs.loginPassword.value === '') {
          this.$swal('登录失败!', '请输入账号和密码！', 'error')
          return
        }
        let params = {
          phonenumber: this.$refs.loginPhoneNumber.value,
          password: sha1(this.$refs.loginPassword.value)
        }
        login(params).then(res => {
          console.log(res)
          if (res.status === 0) {
            let data = {
              token: res.token,
              timestamp: res.timestamp,
              uid: res.data.id,
              user: res.data
            }
            this.saveLogin(data)
            this.$swal('登录成功!', '登录成功！欢迎来到哲学世界！', 'success')
          } else {
            this.$swal('登录失败!', '用户名或密码错误！', 'error')
          }
        })
      },
      _code() {
        if (this.$refs.registerPhoneNumber.value === '') {
          this.$swal('获取验证码识别！', '请填写正确格式的手机号', 'error')
          return
        }
        this.codeTime = +new Date()
        let params = {
          phonenumber: this.$refs.registerPhoneNumber.value,
          timestamp: this.codeTime
        }
        code(params).then(res => {
          console.log(res)
          if (res.status === 0) {
            this.$swal('获取验证码成功！', '获取验证码成功！快快查收您的验证码~', 'success')
          } else {
            this.$swal('获取验证码失败！', '您刚才请求过了，等10分钟再试一次吧~', 'error')
          }
        })
      },
      _register() {
        let params = {
          phonenumber: this.$refs.registerPhoneNumber.value,
          password: this.$refs.registerPassword.value,
          code: this.$refs.registerCode.value,
          username: this.$refs.registerUsername.value,
          sex: this.$refs.registerSex.value === '男' ? 0 : 1,
          className: this.$refs.registerClassName.value,
          school: this.$refs.registerSchool.value,
          timestamp: this.codeTime
        }
        register(params).then(res => {
          console.log(res)
          if (res.status === 0) {
            this.$swal('注册成功！', '恭喜你注册成功啦，快去登录吧~', 'success')
            this.loginPage = true
          } else {
            this.$swal('注册失败!', '请检查您的信息是否已经填写完全。', 'error')
          }
        })
      },
      _showList() {
        showList().then(res => {
          this.setPhilosopherList(res.data)
          this.selectItem(res.data[0].pid)
        })
      },
      ...mapMutations({
        setPhilosopherList: 'SET_PHILOSOPHERLIST',
        setPhilosopher: 'SET_PHILOSOPHER',
        setListRefresh: 'SET_LISTREFRESH'
      }),
      ...mapActions([
        'saveLogin'
      ])
    },
    components: {
      Star,
      Search,
      Scroll
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  @import "~common/stylus/mixin"

  .home
    display flex
    position absolute
    top 50px
    left 0
    bottom 0
    width 100%
    .left-wrapper
      flex 0 0 200px
      width 200px
      background #f3f5f7
      border-right 1px solid rgba(7, 17, 27, 0.1)
      .search-layer
        position fixed
        top 50px
        left 0
        width 200px
        height 40px
      .menu-wrapper
        position fixed
        top 90px
        left 0
        height 92%
        background #f3f5f7
        border-right 1px solid rgba(7, 17, 27, 0.1)
        overflow hidden
        .menu-item
          display table
          height 48px
          width 200px
          line-height 14px
          .text
            display table-cell
            width 56px
            vertical-align middle
            border-1px(rgba(7, 17, 27, 0.1))
            font-size 12px
            .icon
              display inline-block
              width 30px
              height 30px
              border-radius 30px
              margin-left 20px
              margin-top 2px
            .item-name
              display inline-block
              vertical-align top
              margin-top 10px
              margin-left 14px
              text-align center
              width 100px
              border-radius 5px
              background rgba(233, 233, 233, 0.4)
              font-family "Songti SC"
          &.current
            position: relative
            z-index: 10
            margin-top: -1px
            background: #fff
            font-weight: 700
            .text
              border-none()
    .login-wrapper
      flex 1
      background #f3f5f7
      .login
        display flex
        flex-direction column
        width 100%
        .login-logo
          margin 80px auto 0 auto
          width 80px
          height 80px
          bg-image('logo')
          background-size 80px 80px
          background-repeat no-repeat
        .login-username
          margin 20px auto 0 auto
          .login-username-input
            display block
            margin-top 18px
            font-family "Songti SC"
            font-size 14px
            width 150px
            height 30px
            text-align center
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
          .no-account
            display block
            margin-top 18px
            font-size 8px
            font-family "Songti SC"
            width 150px
            text-align center
            color: #999;
    .philosopher-wrapper
      flex 1
      background #f3f5f7
      .editor
        display flex
        position relative
        width 100%
        height 48px
        background-color #f3f5f7
        border-1px(rgba(7, 17, 27, 0.1))
        .add
          display inline-block
          vertical-align top
          margin 15px 5px
          margin-left 20px
          width 20px
          height 20px
          background-size 20px 20px
          background-repeat no-repeat
          bg-image('add')
        .delete
          display inline-block
          vertical-align top
          margin 15px 5px
          width 20px
          height 20px
          background-size 20px 20px
          background-repeat no-repeat
          bg-image('delete')
        .edit
          display inline-block
          vertical-align top
          margin 15px 5px
          width 20px
          height 20px
          background-size 20px 20px
          background-repeat no-repeat
          bg-image('edit')
        .comment
          position absolute
          top 12px
          right 20px
          width 40px
          height 22px
          text-align center
          padding-top 2px
          background-color rgba(65, 184, 131, 0.6)
          border-radius 4px
          font-size 12px
          line-height 19px
          color rgb(255, 255, 255)
          &:hover
            background-color #3BA170
      .philosopher
        display flex
        flex-direction column
        width 100%
        background-color #f3f5f7
        .info
          width 96%
          height 120px
          margin 20px auto
          background-color #ffffff
          border-radius 6px
          .info-avatar
            display inline-block
            margin-left 20px
            margin-top 20px
            width 80px
            height 80px
            border-radius 80px
          .info-name
            display inline-block
            flex-direction column
            vertical-align top
            height 120px
            margin-left 20px
            margin-top 34px
            .philosopher-name
              line-height 28px
              font-size 18px
              font-family "Songti SC"
          .info-content
            display inline-block
            flex-direction column
            vertical-align top
            height 120px
            margin-left 20px
            margin-top 16px
            line-height 18px
            .idea
              display block
              margin-top 8px
              font-size 12px
              font-family "Songti SC"
              color #888888
            .place
              display block
              font-size 12px
              font-family "Songti SC"
              color #888888
            .time
              display block
              font-size 12px
              font-family "Songti SC"
              color #888888
            .url
              display block
              font-size 12px
              font-family "Songti SC"
              color #888888
        .center-wrapper
          display flex
          width 96%
          margin 0 auto 20px auto
          background-color #ffffff
          border-radius 6px
          .center-content
            margin 15px 25px
            .center-title
              font-size 14px
              font-family "Songti SC"
            .center-text-wrapper
              margin-top 10px
              .center-text
                display block
                margin-top 4px
                font-size 12px
                line-height 16px
                font-family "Songti SC"
                color #666
        .content-wrapper
          display flex
          flex-direction row
          width 96%
          margin 0 auto 20px auto
          .left-content
            flex 1
            margin-right 16px
            background-color #ffffff
            border-radius 6px
            font-size 18px
            font-family "Songti SC"
            color #666
            .tab
              display flex
              margin 5px auto
              width 400px
              height 44px
              line-height 44px
              font-size 14px
              .tab-item
                flex 1
                text-align center
                .tab-link
                  padding-bottom 5px
                  color #42B983
                .tab-link-active
                  color #ffcd32
                  border-bottom 2px solid #ffcd32
            .tab-content-0
              margin 0 25px 10px 25px
              font-size 12px
              line-height 16px
            .tab-content-1
              margin-left 25px
              .work-item
                margin-bottom 10px
                font-size 12px
                line-height 12px
                .work-item-title
                  display inline-block
                .work-item-score
                  display inline-block
            .tab-content-2
              margin-left 25px
              .work-item
                margin-bottom 10px
                font-size 12px
                line-height 12px
                .work-item-title
                  display inline-block
                .work-item-score
                  display inline-block
            .tab-content-3
              margin-left 25px
              .work-item
                margin-bottom 10px
                font-size 12px
                line-height 12px
                .work-item-title
                  display inline-block
                .work-item-score
                  display inline-block
          .right-content
            flex 1
            background-color #ffffff
            border-radius 6px
            font-family "Songti SC"
            .tag-wrapper
              margin 15px 15px
              .right-content-title
                font-size 14px
                .icon-tag
                  display inline-block
                  margin-left 8px
                  width 13px
                  height 12px
                  bg-image('tag')
                  background-size 13px 12px
                  background-repeat no-repeat
              .tags
                display inline-block
                vertical-align top
                margin-top 10px
                margin-right 5px
                padding 3px
                font-size 10px
                background-color #aaa
                border-radius 4px
                .tag
                  color #fff
              .comments
                margin-top 10px
                .comment-avatar
                  width 16px
                  height 16px
                .comment-user-name
                  display inline-block
                  vertical-align top
                  margin-top 2px
                  font-size 10px
                .comment-content
                  display block
                  vertical-align top
                  margin-top 2px
                  font-size 10px
                  line-height 14px
                  color: #777;
</style>
