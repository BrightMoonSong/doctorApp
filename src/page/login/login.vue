<template>
<div class="login_page fillcontain">
  <transition name="form-fade" mode="in-out">
    <section class="form_contianer" v-show="showLogin">
      <div class="manage_tip">
        <p>后台管理系统</p>
      </div>
      <el-form :model="loginForm" :rules="rules" ref="loginForm">
        <el-form-item prop="username">
          <el-input v-model="loginForm.username" placeholder="用户名"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input type="password" placeholder="密码" v-model="loginForm.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('loginForm')" class="submit_btn">登陆</el-button>
        </el-form-item>
      </el-form>
      <p class="tip"><span>{{fourMoney | money('元')}}</span>温馨提示：<span>{{fourMoney | mymoneyFilter('元')}}</span></p>
      <p class="tip">未登录过的新用户，自动注册</p>
      <p class="tip">注册过的用户可凭账号密码登录</p>
    </section>
  </transition>
</div>
</template>

<script>
// import { login} from '@/api/getData';
import {
  setStore,
  removeStore
} from '@/config/mUtils';

export default {
  data() {
    return {
      fourMoney: 3,
      loginForm: {
        username: '17301088769',
        password: '123456'
      },
      rules: {
        username: [{
          required: true,
          message: '请输入用户名',
          trigger: 'blur'
        }],
        password: [{
          required: true,
          message: '请输入密码',
          trigger: 'blur'
        }]
      },
      showLogin: false
    };
  },
  // 局部过滤器
  filters: {
    mymoneyFilter: (val, name) => '￥' + val.toFixed(2) + name
  },
  mounted() {
    this.showLogin = true;
    // if (!this.adminInfo.id) {
    if (!this.adminInfo) {
      // this.getAdminData();
    }
  },
  methods: {
    async submitForm(formName) {
      this.$refs[formName].validate(async (valid) => {
        if (valid) {
          // const res = await login({
          //   user_name: this.loginForm.username,
          //   password: this.loginForm.password
          // });
          const res = await this.$http.post('/mapi/shiro/login?phone=' + this.loginForm.username + '&password=' + this.loginForm.password).then((response) => {
            response = response.body;
            return response;
          });
          if (res.code === 0) {
            removeStore('userToken');
            removeStore('userId');
            setStore('userToken', res.data.userToken);
            setStore('userId', res.data.userId);
            setStore('userName', res.data.userName);
            setStore('realName', res.data.realName);
            this.$message({
              type: 'success',
              message: '登录成功'
            });
            this.$router.push('home');
          } else {
            this.$message({
              type: 'error',
              message: res.data
            });
          }
        } else {
          this.$notify.error({
            title: '错误',
            message: '请输入正确的用户名密码',
            offset: 100
          });
          return false;
        }
      });
    }
  },
  watch: {
    adminInfo: function(newValue) {
      if (newValue.id) {
        this.$message({
          type: 'success',
          message: '检测到您之前登录过，将自动登录'
        });
        this.$router.push('manage');
      }
    }
  }
};
</script>

<style lang="less" scoped>
@import '../style/mixin';
.fillcontain {
    height: 100%;
    width: 100%;
}
.login_page {
    background-color: #324057;
}
.manage_tip {
    position: absolute;
    width: 100%;
    top: -100px;
    left: 0;
    p {
        font-size: 34px;
        color: #fff;
    }
}
.form_contianer {
    .wh(320px, 270px);
    .ctp(320px, 270px);
    padding: 25px;
    border-radius: 5px;
    text-align: center;
    background-color: #fff;
    .submit_btn {
        width: 100%;
        font-size: 16px;
    }
}
.tip {
    font-size: 12px;
    color: red;
}
.form-fade-enter-active,
.form-fade-leave-active {
    transition: all 1s;
}
.form-fade-enter,
.form-fade-leave-active {
    transform: translate3d(0, -50px, 0);
    opacity: 0;
}
</style>
