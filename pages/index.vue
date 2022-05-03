<template>
<transition >
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
    /*this.$nuxt.hook('page:start', ()=>{
      console.log('page:start');
    })
    this.$nuxt.hook('page:finish', ()=>{
      console.log('page:end');
    })*/
  },
  methods: {
    fieldsToProps(fields: Field[]) {
        let props = <any>{};
        fields.forEach((field: Field) => {
          // replace the - char in field name
          if (field.name) {
          let name = field.name.replace(/-/g, '')
            props[name] = field;
          }
        });
        return props;
    }
  },
})
</script>

<style lang="scss">
.loader {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999;
}

</style>
