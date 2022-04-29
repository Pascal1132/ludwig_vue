<template>
<transition name="page">
  <div class="content" :style="cssVars">
    <template v-for="(section, i) in sections">
      <component :key="i" :is="section.component" v-bind="fieldsToProps(section.fields)" :section="section" :data-section="section.component" />
    </template>
  </div>
  </transition>
</template>

<script lang="ts">
import Vue from 'vue'
import Field from '~/modules/rubberduck/Aggregate/Field'

export default Vue.extend({
  data() {
    return {
      sections: [],
      pageable: {},
      language: '',
    }
  },
  comments: true,
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
  methods: {
    fieldsToProps(fields: Field[]) {
        let props = <any>{};
        fields.forEach((field: Field) => {
            props[field.name] = field.value;
        });
        return props;
    }
  },
})
</script>

<style lang="scss"></style>
