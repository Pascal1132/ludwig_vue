<template>
  <!--<section class="RGO01-B">
    <h1 v-if="title">{{ title.value }}</h1>
    <h4 v-if="subtitle">{{ subtitle.value }}</h4>
    <div v-if="text" class="wyswig" v-html="text.value"></div>
    <nuxt-link v-if="link" v-bind="link.attributes">
      {{ link.optionsValue.title }}
    </nuxt-link>
    <nuxt-link v-if="link2" v-bind="link2.attributes">
      {{ link2.optionsValue.title }}
    </nuxt-link>
  </section>-->
  <section
    class="section RGO01-B fullBGfix bgSetter bg--nav color--header flex align--center visible once fade alive"
    data-backgrounds="/public/media/27b253b4-576a-11ec-8b5d-7de12cfcd65e.jpg?v=1638887905,/public/media/27b24450-576a-11ec-aa71-cbbdabb9baf9.jpg?v=1638887905,/public/media/27b23262-576a-11ec-869b-4babe8b133c7.jpg?v=1638887905"
    data-sizes=",,"
    data-positions=",,"
    data-viewports="414,1024,1920"
    style="
      background-image: url('/public/media/27b23262-576a-11ec-869b-4babe8b133c7.jpg?v=1638887905');
    "
  >
    <!-- Preload -->
    <link
      rel="prefetch"
      href="/public/media/27b23262-576a-11ec-869b-4babe8b133c7.jpg"
    />
    <div class="padd flex--full relative z-index">
      <div class="wrap">
        <div class="flex flex--gap wrap--1024 align--center justify--between">
          <div
            class="flex--3-fifth flex--1024-full visible once fade-left alive"
          >
            <div class="h1 visible once slide alive">
              <h1>Blogue &amp; Nouvelles</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "RGO01-A",
  props: {
    section: null,
    link: null,
    link2: null,
    text: null,
    title: null,
    subtitle: null,
    video: null,
    img_RGO01B: null,
  },
};
</script>

<style lang="scss" scoped>
section {
  border-radius: 0;
}
</style>
