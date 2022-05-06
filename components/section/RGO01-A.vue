<template>
  <section class="RGO01-A" >
    <div class="front">
      <h1 v-if="title">{{ title.value }}</h1>
      <h4 v-if="subtitle">{{ subtitle.value }}</h4>
      <div v-if="text" class="wyswig" v-html="text.value"></div>
      <!-- video -->
      <video v-if="video.attributes.src" v-bind="video.attributes" controls></video>
      <div class="links">
        <nuxt-link v-if="link" v-bind="link.attributes">{{
          link.optionsValue.title
        }}</nuxt-link>
        <nuxt-link v-if="link2" v-bind="link2.attributes">{{
          link2.optionsValue.title
        }}</nuxt-link>
      </div>
    </div>
    <div class="back" v-rellax="{speed: -13, center:false}" >
      <img v-if="img_RGO01A" v-bind="img_RGO01A.attributes" />
    </div>
  </section>
</template>
<script lang="js">
export default {
  name: 'RGO01-A',
  props: {
    section: null,
    link: null,
    link2: null,
    text: null,
    title: null,
    subtitle: null,
    img_RGO01A: null,
    video: null,
  },
  mounted() {
  },
}
</script>

<style lang="scss" scoped>
.RGO01-A {
  height: 100vh;
  img{
    width: 100%;
  }
  // put .front at the front
  .front {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: #fff;
  }
  .back{
    // size of the front div
    width: 100%;
    height: 100%;
    background-color: #000;
    top: 0;
    left: 0;
    z-index: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: #fff;

  }
}
</style>
