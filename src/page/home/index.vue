<template lang="html">
<div class="box">
  <div class="line3"></div>
  <img src="../../assets/lingdang.png" class="remind" alt="..." />
  <img src="../../assets/1.jpg" class="headerPhoto" alt="">
</div>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "../../common/scss/mixin.scss";
.box {
    width: 100%;
    height: 260px;
    padding-top: 1px;
    background: linear-gradient(38deg, #29AFFF 0%, #59CFFF 100%);
    .line3{
      margin: 0 10px;
      display: inline-block;
      @include three-line(#fff);
    }
    .remind{
      float: right;
      margin: 5px 10px;
    }
    .headerPhoto{
      width: 22%;
    }
}
</style>
