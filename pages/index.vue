<template>
  <transition>
    <div class="content" :style="cssVars">
      <template v-for="(section, i) in sections">
        <component
          :key="i"
          :is="section.component"
          v-bind="section.props"
          :section="section"
          :data-section="section.component"
        />
      </template>
    </div>
  </transition>
</template>

<script lang="ts">
import Vue from 'vue'
import { Store } from 'vuex/types/index'
import Field from '~/modules/rubberduck/Aggregate/Field'
import Section from '~/modules/rubberduck/Aggregate/Section'
import fieldObjects from '~/storage/fieldObjects.js'

const fetchObjectsFromSectionCode = async (
  sectionCode: string,
  props: any,
  store: Store<any>,
) => {
  // get the object where the section code is the key of fieldObjects
  let sectionObjects =
    fieldObjects[sectionCode as keyof typeof fieldObjects] ?? null
  if (sectionObjects) {
    // foreach key of the object, fetchObjects
    let result = <any>{}
    for (let key in sectionObjects) {
      let object = sectionObjects[key as keyof typeof sectionObjects]
      // get the props that has the same name of the object.field
      let field = props[object.field]
      if (field) {
        // fetch the object from store
        result[key] = await store.dispatch('fetchObjects', {
          name: object.name,
          ids: Object.values(field.value),
        })
      }
    }
    return { ...props, ...result }
  }
  return props
}

const fieldsToProps = async function (
  fields: Field[],
  sectionCode: string,
  store: Store<any>,
) {
  let props = <any>{}
  fields.forEach((field: Field) => {
    // replace the - char in field name
    if (field.name) {
      let name = field.name.replace(/-/g, '')
      props[name] = field
    }
  })
  props = await fetchObjectsFromSectionCode(sectionCode, props, store)
  return props
}

export default Vue.extend({
  data() {
    return {
      sections: [],
      pageable: {},
      language: '',
    }
  },
  asyncData: async function ({ store, route }) {
    let pageable = await store.getters.pageable
    let sections = pageable?.sections ?? []
    let language = route.params.lang
    for (let section of sections) {
      section.props = await fieldsToProps(section.fields, section.code, store)
    }
    return { sections, language, pageable }
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
  beforeMount() {},
  mounted() {},
  methods: {},
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
