<template>
  <transition name="slide">
    <div class="notification fixed" v-if="myShow">
      <div class="delete" @click="close()"></div>
      <div class="content">
        {{ myOptions.content }}
      </div>
    </div>
</transition>
</template>

<script>
export default {
  props: {
    options: {
      type: Object,
      default: () => {
        return {};
      }
    },
    show: {
      type: Boolean,
      default: false
    }
  },
  // props: ['options', 'show'],
  data() {
    return {
      myShow: this.show,
      myOptions: this.options,
      timers: []
    };
  },
  methods: {
    close() {
      this.myShow = false;
      this.myOptions = {};
    },
    countdown() {
      if (this.myOptions.autoClose) {
        const t = setTimeout(() => {
          this.close();
        }, this.myOptions.showTime || 3000);
        this.timers.push(t);
      }
    }
  },
  watch: {
    show: function(val, oldVal) {
      this.myShow = val;
    },
    myShow(val) {
      this.$emit('refrs', val);
    },
    options: function(val, oldVal) {
      this.myOptions = val;
    },
    myOptions(val) {
      // 这个做法，主要是为了避免一个计时器还没有结束时，又开始一个新的提示所引发的提示被提前关闭的清空。
      this.timers.forEach((timer) => {
        window.clearTimeout(timer);
      });
      this.timers = [];
      this.countdown();

      this.$emit('refrsoptions', val);
    }
  },
  created() {
    console.dir(this.myOptions);
    console.log(this.myOptions.content);
  },
  computed: {
    // 只要在options中一并传入textColor和backgroundColor两个属性，就可以轻松自定义提示样式了。
    setStyle() {
      return {
        color: this.myOptions.textColor || '#fff',
        background: this.myOptions.backgroundColor || '#21e7b6'
      };
    }
  }
};
</script>

<style scoped lang="sass">
  .slide-transition
    transition: all .3s ease
    transform: translate3d(0, 0, 0)
  .slide-enter,
  .slide-leave
    transform: translate3d(0, -100%, 0)
  .delete
    -moz-appearance: none
    -webkit-appearance: none
    background: rgba(51,51,51,0.2)
    cursor: pointer
    display: inline-block
    height: 24px
    position: relative
    vertical-align: top
    width: 24px
    float: right
    &:before,
    &:after
      background: #fff
      content: ""
      display: block
      height: 2px
      left: 50%
      margin-left: -25%
      margin-top: -1px
      position: absolute
      top: 50%
      width: 50%
    &:before
      transform: rotate(45deg)
    &:after
      transform: rotate(-45deg)
    &:hover
      background: rgba(51,51,51,0.5)
  .notification
    width: 100%
    line-height: 2
    z-index: 3
    position: fixed
    top: 0
    left: 0
    .content
      padding: 5px 10px
      background: #aaa
</style>
