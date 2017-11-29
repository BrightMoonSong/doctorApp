<template lang="html">
  <baidu-map class="map" :center="{lng: 116.404, lat: 39.915}" :zoom="15">
    <bm-info-window :position="{lng: 116.404, lat: 39.915}" title="Info Window Title" :show="infoWindow.show" @close="infoWindowClose" @open="infoWindowOpen">
      <p v-text="infoWindow.contents"></p>
      <button @click="clear">Clear</button>
      <div class="box">
        <ul>
          <li @click="nav(1)">123</li>
          <li @click="nav(2)">456</li>
          <li @click="nav(3)">789</li>
        </ul>
        <div v-show="navShow.one" class="">
          123diasdjfi
        </div>
        <div v-show="navShow.two" class="">
          456ewqew
        </div>
        <div v-show="navShow.three" class="">
          789weewe
        </div>
      </div>
    </bm-info-window>
    <button @click="infoWindowOpen">infoWindowOpen</button>
  </baidu-map>
</template>

<script>
export default {
  data() {
    return {
      navShow: {
        one: true,
        two: false,
        three: false
      },
      infoWindow: {
        show: true,
        contents: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      }
    };
  },
  methods: {
    infoWindowClose(e) {
      this.infoWindow.show = false;
    },
    infoWindowOpen(e) {
      this.infoWindow.show = true;
    },
    clear() {
      this.infoWindow.contents = '';
    },
    nav(index) {
      switch (index) {
        case 1:
          this.navShow.one = true;
          this.navShow.two = false;
          this.navShow.three = false;
          break;
        case 2:
          this.navShow.one = false;
          this.navShow.two = true;
          this.navShow.three = false;
          break;
        case 3:
          this.navShow.one = false;
          this.navShow.two = false;
          this.navShow.three = true;
          break;
        default:
          this.navShow.one = false;
          this.navShow.two = false;
          this.navShow.three = false;
      }
    }
  }
};
</script>

<style lang="css">
  .map{
    width: 100%;
    height: 600px;
  }
  /* 去掉地图左下角的百度LOGO */
  .anchorBL {
    display:none
  }
</style>
