<template>
  <section class="RGO01-A">
    <div class="">
      <h1>{{ title.value }}</h1>
      <h4>{{ subtitle.value }}</h4>
      <div class="wyswig" v-html="text.value"></div>
      <nuxt-link v-if="link" v-bind="link.attributes">{{ link.optionsValue.title  }}</nuxt-link>
      <nuxt-link v-if="link2" v-bind="link2.attributes">{{ link2.optionsValue.title }}</nuxt-link>
      <img v-if="img_RGO01A.value" v-bind="img_RGO01A.attributes" />
      <!-- video -->
      <video v-if="video.value" v-bind="video.attributes" controls></video>
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
}
</script>

<style lang="scss" scoped>
img{
  width: 100%;
  border-radius: 3px;
  margin-top: 10px;
}
</style>
