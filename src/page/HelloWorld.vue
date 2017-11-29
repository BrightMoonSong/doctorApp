<template>
<div class="hello">
  <h1>{{ msg }}</h1>
  <h2>Essential Links</h2>
  <div class="big-box">
    <div class="threeLine"></div>
  </div>
  <ul>
    <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
    <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
    <li><a href="https://chat.vuejs.org" target="_blank">Community Chat</a></li>
    <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
    <br>
    <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>
  </ul>
  <h2>Ecosystem</h2>
  <ul>
    <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
    <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
    <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
    <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
  </ul>
  <div class="scss-kiko">
    <!--全屏-->
    <p v-kiko-loading.fullscreen="loadingFullscreen">
      <button class="btn btn-info" style="position: relative" @click="loadingFullFun()">loadingFullscreen</button>
    </p>

    <!--指定位置按需渲染-->
    <p>
      <button class="btn btn-info" style="position: relative" @click="loading = !loading">loading</button>
    </p>
    <p v-kiko-loading="loading" style="position: relative">
      <pre>
        假如爱情可以解释
        誓言可以修改
        假如
        你我的相遇 可以重新安排
        那么 生活就会比较容易
        假如
        有一天 我终于能将你忘记
        然而 这不是 随便传说的故事
        也不是明天才要 上演的戏剧
        我无法找出原稿
        然后将你 将你一笔抹去
      </pre>
    </p>

    <!-- <Button type="primary" @click="open(false)">Open notice</Button>
    <Button @click="open(true)">Open notice(only title)</Button> -->
    <button @click="notifFun()">notifnotif</button>
    <notif :options="options" :show="ifShowNotif" v-on:refrs="onResultChange" v-on:refrsoptions="onResultChangeoptions" />
    <button class="btn btn-info" style="position: relative" @click="messageKiko($event)">message-kiko</button>
    <button class="btn btn-info" style="position: relative" @click="kikoTooltip($event)">kiko_tooltip</button>
    <button class="btn btn-info" style="position: relative" @click="confirm()">confirm</button>
    <kiko-confirm width="500px" title="信息" :visible.sync="confirmVisible" :close-visible="true">
      <h1>谁的青春不迷茫</h1>
      <div class="kiko-footer" slot="footer">
        <a href="javscript:void(0)" class="kiko-btn make-sure" @click="confirmMakeSure">确定</a>
        <a href="javscript:void(0)" class="kiko-btn cancel" @click="confirmVisible = false">取消</a>
      </div>
    </kiko-confirm>
    <div class="dakuang">
      <div class="kuang">

      </div>
    </div>
    <div class="echarts-div">
      <visitor-pie :pieData="pieData"></visitor-pie>
    </div>
    <div class="echarts-div">
      <tendency :sevenDate='sevenDate' :sevenDay='sevenDay'></tendency>
    </div>
  </div>
</div>
</template>

<script>
// import axios from 'axios';
// import info from '../common/notification/notificationInit';
import notif from '../common/notif';
// import relnotf from '../common/Notification';
import visitorPie from '../common/echarts/visitorPie';
import tendency from '../common/echarts/tendency';

export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      loading: false,
      loadingFullscreen: false,
      confirmVisible: false,
      options: {
        'content': 'content content content '
      },
      ifShowNotif: false,
      loginForm: {
        username: '17301088769',
        password: '123456'
      },
      pieData: {
        beijing: 50,
        shanghai: 59,
        shenzhen: 54,
        hangzhou: 51,
        qita: 75
      },
      sevenDate: [
        [3, 5, 6, 9, 12, 78, 12],
        [13, 5, 2, 68, 9, 72, 12],
        [3, 15, 9, 38, 9, 32, 12]
      ],
      sevenDay: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
    };
  },
  created() {
    // console.log(info);
    // info.success({
    //   title: 'Notification title',
    //   desc: 'Here is the notification description. Here is the notification description. '
    // });
    // info.success('Here is the notification description.');

    // axios.post('/mapi/shiro/login?phone=' + this.loginForm.username + '&password=' + this.loginForm.password)
    //   .then(function(response) {
    //     console.log('response');
    //     console.log(response);
    //   })
    //   .catch(function(error) {
    //     console.log('error');
    //     console.log(error);
    //   });
  },
  components: {
    notif,
    visitorPie,
    tendency
  },
  methods: {
    loadingFullFun() {
      this.loadingFullscreen = !this.loadingFullscreen;
      let self = this;
      // _isDestroyed这个属性表示的是当前这个组件是否有被销毁，true表示当前的组件已经被销毁，
      // 通过上面这个判断，我们就不需要自己手动的去用ID来清除了，这个就相当于递归嘛，有了一个结束判断，避免了死循环咯~~
      if (self && !self._isDestroyed) {
        setTimeout(() => {
          if (self && !self._isDestroyed) {
            this.loadingFullscreen = !this.loadingFullscreen;
          }
        }, 2000);
      }
    },
    confirm() {
      this.confirmVisible = !this.confirmVisible;
    },
    confirmMakeSure($event) {
      console.log('sure');
    },
    kikoTooltip($event) {
      // direction string toolTip显示的方向(top、right、bottom、left)
      this.$kiko_tooltip($event, {
        content: '这是一个toolTip',
        direction: 'top',
        background: '#13CE66',
        color: '#fff',
        time: 3000
      });
    },
    messageKiko() {
      // this.$kiko_message('这是一个message')
      // 若想改变消失时间
      this.$kiko_message({
        message: '这是一个message',
        time: 3000
      });
    },
    notifFun() {
      this.ifShowNotif = !this.ifShowNotif;
    },
    onResultChange(val) {
      this.ifShowNotif = val;
    },
    onResultChangeoptions(val) {
      this.options = val;
    }
    // open(nodesc) {
    //   this.$Notice.open({
    //     title: 'Notification title',
    //     desc: nodesc ? '' : 'Here is the notification description. Here is the notification description. '
    //   });
    // }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
h1,
h2 {
    font-weight: normal;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: #42b983;
}
.echarts-div {
    width: 100%;
    border: 2px solid #eee;
}
.big-box {
    width: 100%;
    height: 400px;
    padding: 100px;
    .threeLine {
        border-top: 2px solid #000;
        width: 10px;
        position: relative;
        &:before {
            position: absolute;
            top: 5px;
            content: " ";
            border-top: 2px solid #000;
            width: 7px;
        }
        &:after {
            position: absolute;
            bottom: 5px;
            content: " ";
            border-top: 2px solid #000;
            width: 8px;
        }
    }
}
.dakuang {
    width: 100%;
    height: 130px;
    padding: 10px;
    .kuang {
        margin: 0 auto;
        border: 4px solid #e7f607bd;
        width: 100px;
        height: 100px;
        border-radius: 100px;
        animation: mymove 2s infinite;
    }
    @keyframes mymove {
        from {
            width: 100px;
            height: 100px;
            margin-top: 0;
        }
        to {
            width: 1px;
            height: 1px;
            margin-top: 49px;
        }
    }
}
</style>
