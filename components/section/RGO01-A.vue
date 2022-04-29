<template>
  <section class="RGO01-A">
    <div class="">
      <h1>{{ title }}</h1>
      <h4>{{ subtitle }}</h4>
      <div class="wyswig" v-html="text"></div>
      <a v-if="link" :href="link.value">{{ link.value }}</a>
      <a v-if="link2" :href="link2.value">{{ link2.value }}</a>
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
  }
  }
</script>

<style lang="scss" scoped>
/*.RGO01-A {
  display: flex;
  background: $primary_bg;
  margin: 16px;
  padding: 16px;
  box-shadow: 1px 1px 5px 0px rgba(0, 0, 0, 0.5);
  color: $paragraph_color;
  border-radius: 5px;
  &:first-child {
    margin-top: $nav-height;
  }
}*/
</style>
