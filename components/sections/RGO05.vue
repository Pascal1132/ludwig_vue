<template>
  <section class="RGO05">
    <nuxt-link v-if="link" v-bind="link.attributes">{{
      link.optionsValue.title
    }}</nuxt-link>
    <nuxt-link v-if="link2" v-bind="link2.attributes">{{
      link2.optionsValue.title
    }}</nuxt-link>
  </section>
</template>
<script>
export default {
  name: "RGO05",
  props: {
    section: null,
    link: null,
    link2: null,
  },
};
</script>

<style lang="scss" scoped></style>
