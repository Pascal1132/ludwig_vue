<template>
  <section class="RGO01-A">
      <h1 v-if="title">{{ title.value }}</h1>
      <h4 v-if="subtitle">{{ subtitle.value }}</h4>
      <div v-if="text" class="wyswig" v-html="text.value"></div>
      
      <img v-if="img_RGO01A" v-bind="img_RGO01A.attributes" />
      <!-- video -->
      <video v-if="video" v-bind="video.attributes" controls></video>
      <div class="links">
      <nuxt-link v-if="link" v-bind="link.attributes">{{ link.optionsValue.title  }}</nuxt-link>
      <nuxt-link v-if="link2" v-bind="link2.attributes">{{ link2.optionsValue.title }}</nuxt-link>
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
img{
  width: 100%;
  max-width: 500px;
  border-radius: 3px;
  margin-top: 10px;
}
.RGO01-A{
  margin: 2em;
  padding: 2em;
  border-radius: 0px;
  display:flex;
  justify-content: space-between;
  align-items: center;
}
.links{
  display: flex;
  justify-content: space-between;
  align-items: center;
  a {
    color: $main_color;
    text-decoration: none;
    margin: 0.5em;
  }
}

</style>
