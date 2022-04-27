<template>
  <div class="content transition-fade swup" :style="cssVars">
    <!-- page -->
    <template v-for="(section, i) in sections">
      <component :key="i" :is="section.component" :section="section" />
    </template>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      sections: [],
      pageable: {},
      language: '',
    }
  },
  loading: false,
  fetch: async function () {
    let pageable = await this.$store.getters.pageable
    let sections = pageable?.sections ?? []
    let language = this.$route.params.lang
    this.sections = sections
    this.language = language
    this.pageable = pageable
  },
  layout({ store, route }) {
    return store.getters.pageable.layout
  },
  head() {
    return {
      title: this.$store.getters.pageable.title,
      htmlAttrs: {
        class: '',
      },
    }
  },
  computed: {
    cssVars() {
      let colors = this.$store.getters.configuration.colors
      return {
        '--primary': colors.primary,
        '--secondary': colors.secondary,
        '--dark': colors.dark,
        '--light': colors.light,
      }
    },
  },
  beforeMount() {
    console.log('mounted')
  },
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.finish()
    })
  },
})
</script>

<style lang="scss"></style>
