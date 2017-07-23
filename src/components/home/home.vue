<template>
  <div class="home">
    <div class="left-wrapper">
      <search class="search-layer" ref="layer"></search>
      <scroll @scroll="scroll"
              :listen-scroll="listenScroll"
              :probe-type="probeType"
              class="menu-wrapper"
              ref="list"
              :data="philosopherList">
        <div>
          <div v-for="item in philosopherList" class="menu-item">
          <span class="text border-1px">
            <img class="icon" :src="item.image">
            <span class="item-name">{{item.name}}</span>
          </span>
          </div>
        </div>
      </scroll>
    </div>
    <div v-show="this.token.length !== 0" class="philosopher-wrapper">
      <div ref="editor" class="editor">
        <span class="add"></span>
        <span class="delete"></span>
        <span class="edit"></span>
        <span class="comment">评论</span>
      </div>
      <div class="philosopher">
        <div class="info">
          <img class="info-avatar"
               src="https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1500621920&di=3527054be43117fe88831fb8f7878aa7&src=http://a3.att.hudong.com/26/10/300000894425128082107120916_950.jpg">
          <div class="info-name">
            <h2 class="philosopher-name">孔子</h2>
            <h2 class="philosopher-name">Confucius</h2>
          </div>
          <div class="info-content">
            <span class="idea">主要思想：儒学</span>
            <span class="place">地区：中国</span>
            <span class="time">时代：鲁襄公廿一年~鲁哀公十六年</span>
            <span class="url">维基百科：<a href="https://www.wiki.com/kongzi">https://www.wiki.com/Confucius</a></span>
          </div>
        </div>
        <div class="center-wrapper">
          <div class="center-content">
            <h3 class="center-title">哲学主张</h3>
            <div class="center-text-wrapper">
              <span class="center-text">子曰："恭而无礼则劳，慎而无礼则葸，勇而无礼则乱，直而无礼则绞。" （《论语·泰伯》）</span>
              <span class="center-text">颜渊问仁。子曰："克己复礼为仁。一日克己复礼，天下归仁焉。为仁由己，而由人乎哉？"颜渊曰："请问其目。"子曰："非礼勿视，非礼勿听，非礼勿言，非礼勿动。"颜渊曰："回虽不敏，请事斯语矣。"（《论语·颜渊》）</span>
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
              孔丘（约前551年－约前479年），子姓后裔，孔氏，名丘，字仲尼，后代敬称孔子或孔夫子。生于鲁国陬邑，祖先为宋国人，东周春秋末期鲁国的教育家与哲学家，曾在鲁国担任官府要职。为儒家的创始人。而孔子儒家的德性论五行思想（仁义礼智信）对邻近地区，如：朝鲜半岛、琉球、日本、越南、东南亚等地区有着深远的影响，这些地区也被称为儒家文化圈；孔子儒家的太极、理、气和人文思想对西方也产生了深刻影响。
            </div>
            <div v-show="this.tabNow === 1" class="tab-content-1">
              <ul>
                <li class="work-item">
                  <a href="" class="work-item-title">《论语》</a>
                  <star class="work-item-score" :size="24" :score="4.5"></star>
                </li>
                <li class="work-item">
                  <a href="" class="work-item-title">《论语》</a>
                  <star class="work-item-score" :size="24" :score="4.5"></star>
                </li>
                <li class="work-item">
                  <a href="" class="work-item-title">《论语》</a>
                  <star class="work-item-score" :size="24" :score="4.5"></star>
                </li>
                <li class="work-item">
                  <a href="" class="work-item-title">《论语》</a>
                  <star class="work-item-score" :size="24" :score="4.5"></star>
                </li>
                <li class="work-item">
                  <a href="" class="work-item-title">《论语》</a>
                  <star class="work-item-score" :size="24" :score="4.5"></star>
                </li>
              </ul>
            </div>
            <div v-show="this.tabNow === 2" class="tab-content-2">
              <ul>
                <li class="work-item">
                  <a href="" class="work-item-title">“仁义礼智信”:儒家道德教化思想的现代价值</a>
                  <star class="work-item-score" :size="24" :score="5"></star>
                </li>
                <li class="work-item">
                  <a href="" class="work-item-title">“恭宽信敏惠”:儒家治国理政思想的现代启示</a>
                  <star class="work-item-score" :size="24" :score="4.5"></star>
                </li>
                <li class="work-item">
                  <a href="" class="work-item-title">“天地君亲师”:儒家精神信仰思想的现代转化</a>
                  <star class="work-item-score" :size="24" :score="4.5"></star>
                </li>
                <li class="work-item">
                  <a href="" class="work-item-title">“中庸”本义及其管理哲学价值</a>
                  <star class="work-item-score" :size="24" :score="4"></star>
                </li>
                <li class="work-item">
                  <a href="" class="work-item-title">“仁义礼智信”:儒家道德教化思想的现代价值</a>
                  <star class="work-item-score" :size="24" :score="5"></star>
                </li>
                <li class="work-item">
                  <a href="" class="work-item-title">“恭宽信敏惠”:儒家治国理政思想的现代启示</a>
                  <star class="work-item-score" :size="24" :score="4.5"></star>
                </li>
                <li class="work-item">
                  <a href="" class="work-item-title">“天地君亲师”:儒家精神信仰思想的现代转化</a>
                  <star class="work-item-score" :size="24" :score="4.5"></star>
                </li>
                <li class="work-item">
                  <a href="" class="work-item-title">“中庸”本义及其管理哲学价值</a>
                  <star class="work-item-score" :size="24" :score="4"></star>
                </li>
                <li class="work-item">
                  <a href="" class="work-item-title">“仁义礼智信”:儒家道德教化思想的现代价值</a>
                  <star class="work-item-score" :size="24" :score="5"></star>
                </li>
                <li class="work-item">
                  <a href="" class="work-item-title">“恭宽信敏惠”:儒家治国理政思想的现代启示</a>
                  <star class="work-item-score" :size="24" :score="4.5"></star>
                </li>
                <li class="work-item">
                  <a href="" class="work-item-title">“天地君亲师”:儒家精神信仰思想的现代转化</a>
                  <star class="work-item-score" :size="24" :score="4.5"></star>
                </li>
                <li class="work-item">
                  <a href="" class="work-item-title">“中庸”本义及其管理哲学价值</a>
                  <star class="work-item-score" :size="24" :score="4"></star>
                </li>
                <li class="work-item">
                  <a href="" class="work-item-title">“仁义礼智信”:儒家道德教化思想的现代价值</a>
                  <star class="work-item-score" :size="24" :score="5"></star>
                </li>
                <li class="work-item">
                  <a href="" class="work-item-title">“恭宽信敏惠”:儒家治国理政思想的现代启示</a>
                  <star class="work-item-score" :size="24" :score="4.5"></star>
                </li>
                <li class="work-item">
                  <a href="" class="work-item-title">“天地君亲师”:儒家精神信仰思想的现代转化</a>
                  <star class="work-item-score" :size="24" :score="4.5"></star>
                </li>
                <li class="work-item">
                  <a href="" class="work-item-title">“中庸”本义及其管理哲学价值</a>
                  <star class="work-item-score" :size="24" :score="4"></star>
                </li>
                <li class="work-item">
                  <a href="" class="work-item-title">“仁义礼智信”:儒家道德教化思想的现代价值</a>
                  <star class="work-item-score" :size="24" :score="5"></star>
                </li>
                <li class="work-item">
                  <a href="" class="work-item-title">“恭宽信敏惠”:儒家治国理政思想的现代启示</a>
                  <star class="work-item-score" :size="24" :score="4.5"></star>
                </li>
                <li class="work-item">
                  <a href="" class="work-item-title">“天地君亲师”:儒家精神信仰思想的现代转化</a>
                  <star class="work-item-score" :size="24" :score="4.5"></star>
                </li>
                <li class="work-item">
                  <a href="" class="work-item-title">“中庸”本义及其管理哲学价值</a>
                  <star class="work-item-score" :size="24" :score="4"></star>
                </li>
                <li class="work-item">
                  <a href="" class="work-item-title">“仁义礼智信”:儒家道德教化思想的现代价值</a>
                  <star class="work-item-score" :size="24" :score="5"></star>
                </li>
                <li class="work-item">
                  <a href="" class="work-item-title">“恭宽信敏惠”:儒家治国理政思想的现代启示</a>
                  <star class="work-item-score" :size="24" :score="4.5"></star>
                </li>
                <li class="work-item">
                  <a href="" class="work-item-title">“天地君亲师”:儒家精神信仰思想的现代转化</a>
                  <star class="work-item-score" :size="24" :score="4.5"></star>
                </li>
                <li class="work-item">
                  <a href="" class="work-item-title">“中庸”本义及其管理哲学价值</a>
                  <star class="work-item-score" :size="24" :score="4"></star>
                </li>
              </ul>
            </div>
            <div v-show="this.tabNow === 3" class="tab-content-3">
              1
            </div>
          </div>
          <div class="right-content">
            <div class="tag-wrapper">
              <h3 class="right-content-title">标签</h3>
              <ul>
                <li class="tags">
                  <span><a class="tag" href="">儒学</a></span>
                </li>
                <li class="tags">
                  <span><a class="tag" href="">伦理学</a></span>
                </li>
                <li class="tags">
                  <span><a class="tag" href="">社会哲学</a></span>
                </li>
              </ul>
            </div>
            <div class="tag-wrapper">
              <h3 class="right-content-title">评论</h3>
              <ul>
                <li class="comments">
                  <span class="comment">
                    <img class="comment-avatar" src="http://blog.ursb.me/img/face.png"/>
                    <span class="comment-user-name">邓国雄 · 17 中哲</span>
                    <span class="comment-content">孔子的伟大之处，他不仅把外王——追求理想社会看成是崇高目标，而且同时把内圣——追求理想的人格作为崇高目标，由于理想社会取决于时命，因此成就理想人格甚至有更优先的意义。 </span>
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
          <span class="button">发送验证码</span>
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
  import { mapGetters, mapActions } from 'vuex'
  import { login, register } from 'api/user'
  import sha1 from 'sha1'

  export default {
    data() {
      return {
        tabNow: 0,
        scrollY: 0,
        philosopherList: [
          {
            image: 'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1500621920&di=3527054be43117fe88831fb8f7878aa7&src=http://a3.att.hudong.com/26/10/300000894425128082107120916_950.jpg',
            name: '孔子'
          },
          {
            image: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2197293396,2805254920&fm=117&gp=0.jpg',
            name: '老子'
          },
          {
            image: 'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=2046229040,1880117538&fm=58&u_exp_0=1479195425,1546812128&fm_exp_0=86&bpow=300&bpoh=441',
            name: '墨子'
          },
          {
            image: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=261843919,3656027470&fm=58',
            name: '庄子'
          },
          {
            image: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=261843919,3656027470&fm=58',
            name: '庄子'
          },
          {
            image: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=261843919,3656027470&fm=58',
            name: '庄子'
          },
          {
            image: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=261843919,3656027470&fm=58',
            name: '庄子'
          },
          {
            image: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=261843919,3656027470&fm=58',
            name: '庄子'
          },
          {
            image: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=261843919,3656027470&fm=58',
            name: '庄子'
          },
          {
            image: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=261843919,3656027470&fm=58',
            name: '庄子'
          },
          {
            image: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=261843919,3656027470&fm=58',
            name: '庄子'
          },
          {
            image: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=261843919,3656027470&fm=58',
            name: '庄子'
          },
          {
            image: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=261843919,3656027470&fm=58',
            name: '庄子'
          },
          {
            image: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=261843919,3656027470&fm=58',
            name: '庄子'
          },
          {
            image: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=261843919,3656027470&fm=58',
            name: '庄子'
          }
        ],
        loginPage: true
      }
    },
    created() {
      this.probeType = 3
      this.listenScroll = true
    },
    mounted() {
      this.tab(this.tabNow)
    },
    computed: {
      ...mapGetters([
        'token',
        'timestamp',
        'uid'
      ])
    },
    watch: {
      scrollY(newY) {
        this.$refs.layer.$el.style['transform'] = `translate3d(0, ${newY}px, 0)`
        this.$refs.layer.$el.style['webkitTransform'] = `translate3d(0, ${newY}px, 0)`
        if (newY > -40) {
          this.$refs.list.$el.style.top = 90 + newY + 'px'
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
        this.$refs.login.style.height = '667px'
      },
      selectLogin() {
        this.loginPage = !this.loginPage
        this.$refs.login.style.height = '541px'
      },
      _login() {
        if (this.$refs.loginPhoneNumber.value === '' || this.$refs.loginPassword.value === '') {
          this.$swal('登录失败!', '请输入账号和密码！', 'warning')
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
            this.$swal('登录失败!', '用户名或密码错误！', 'warning')
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
          school: this.$refs.registerSchool.value
        }
        register(params).then(res => {
          console.log(res)
          if (res.status === 0) {
            this.$swal('注册成功！', '恭喜你注册成功啦，快去登录吧~', 'success')
            this.loginPage = true
          } else {
            this.$swal('注册失败!', '请检查您的信息是否已经填写完全。', 'warning')
          }
        })
      },
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
                  display inline-block
                  vertical-align top
                  margin-top 2px
                  font-size 10px
                  line-height 14px
                  color: #777;
</style>
