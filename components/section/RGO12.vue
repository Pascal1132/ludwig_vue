<template>
  <section class="RGO12">
    <div class="breadcrumb" v-if="breadcrumb">
      <div>
        <nuxt-link v-if="backUrl" :to="backUrl">Retour</nuxt-link>
      </div>
      <div>
        <span v-for="(page, i) in breadcrumb.data" :key="i">
          <nuxt-link v-if="page.url" :to="page.url">
            {{ page.title }} /
          </nuxt-link>
          <span class="current" v-else>
            {{ page.title }}
          </span>
        </span>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'RGO12',
  props: {
    section: null,
    breadcrumb: null,
  },
  computed: {
    backUrl() {
      let len = this.breadcrumb?.data?.length || 0
      return len > 1 ? this.breadcrumb.data[len - 2].url : null
    },
  },
}
</script>

<style lang="scss" scoped>
.RGO12 {
  background-color: $main_bg;
  padding: 0 1.5em;
  margin: 0;
  border-radius: 0;
  position: relative;
  z-index: 1;
  .breadcrumb {
    margin: 1em;
    padding: 0.7rem;
    display: flex;
    justify-content: space-between;
    border-radius: 0;
    border: 0;
    box-shadow: 0 0 0 0;
    position: relative;
    font-size: 1.5rem;
    z-index: 1;
    a {
      color: $primary_bg;
      vertical-align: middle;
    }
    .current {
      color: $secondary_bg;
      font-weight: bold;
      vertical-align: middle;
    }

    .back {
      color: $secondary_bg;
      font-weight: bold;
      text-decoration: none;
      padding: 0.5rem 1rem;
      border: 0;
      border-radius: 0;
      box-shadow: 0 0 0 0;
      position: relative;
      cursor: pointer;
      &:hover {
        color: $primary_bg;
      }
    }
  }
}
</style>
