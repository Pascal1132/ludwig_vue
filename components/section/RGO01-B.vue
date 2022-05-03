<template>
  <section class="RGO01-B">
    <h1>{{ title.value }}</h1>
    <h4>{{ subtitle.value }}</h4>
    <div class="wyswig" v-html="text.value"></div>
    <nuxt-link v-if="link" v-bind="link.attributes">
      {{ link.optionsValue.title }}
    </nuxt-link>
    <nuxt-link v-if="link2" v-bind="link2.attributes">
      {{ link2.optionsValue.title }}
    </nuxt-link>
  </section>
</template>
<script>
export default {
  name: 'RGO01-A',
  props: {
    section: null,
    link: null,
    link2: null,
    text: null,
    title: null,
    subtitle: null,
  },
}
</script>

<style lang="scss" scoped></style>
