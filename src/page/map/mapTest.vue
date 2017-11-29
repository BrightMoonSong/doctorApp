<template>
  <baidu-map class="map" :center="{lng: 116.404, lat: 39.915}" :zoom="15">
    <my-overlay
      :position="{lng: 116.404, lat: 39.915}"
      text="点击我"
      :active="active"
      @mouseover.native="active = true"
      @mouseleave.native="active = false">
    </my-overlay>
  </baidu-map>
</template>

<script>
import MyOverlay from './MyOverlay';
export default {
  data () {
    return {
      active: false
    };
  },
  components: {
    MyOverlay
  }
};
</script>

<style lang="css">
.map{
  width: 100%;
  height: 400px;
}
</style>
