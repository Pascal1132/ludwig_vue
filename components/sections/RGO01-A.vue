<template>
  <section class="RGO01-A">
    <div class="padd">
      <h1>{{ title }}</h1>
      <p>{{ text }}</p>
      <a v-if="link" :href="link.data.value">{{ link.data.text }}</a>
    </div>
  </section>
</template>
<script lang="js">

export default {
  name: 'RGO01-A',
  props: {
    section: null,
  },
  data() {
    return {
      title: '',
      text: '',
      link: null,
    }
  },
  fetch() {
    this.title = this.section.getField('title').getValue()
    this.text = this.section.getField('text').getValue()
    this.link = this.section.getField('link')
  },
}
</script>

<style lang="scss" scoped>
.RGO01-A {
  display: flex;
  background: $primary_color;
  margin: 16px;
  padding: 16px;
  box-shadow: 1px 1px 5px 0px rgba(0, 0, 0, 0.5);
  color: $white;
  border-radius: 5px;
  &__left {
    .title-box {
      color: var(--main_color);
    }

    .wysiwyg {
      width: 100%;

      & * {
        width: 100%;
      }

      span {
        display: block;
      }
    }

    &--btn-container {
      margin-top: 50px;
    }
  }

  // Right box
  &__right {
    &--wrapper {
      height: 100%;
      width: 100%;
      min-height: 300px;
      padding: 0 15px 15px 0;

      .media__wrapper--image {
        padding-bottom: 56.25%;
      }

      // Width
      @media screen and (max-width: 1200px) {
        height: 50%;
      }

      // Width
      @media screen and (max-width: 600px) {
        height: 100%;
        padding: 0 15px 15px 0;
      }
    }

    &--frame.anim-frame {
      right: 0;
      bottom: 0;
      top: unset;
      width: calc(100% - 15px);
      height: calc(100% - 15px);
      max-width: none;

      .anim-border {
        padding: 0;
        height: 100%;
      }

      @media screen and (max-width: 600px) {
        width: calc(100% - 15px);
        height: calc(100% - 15px);
      }
    }
  }
}
</style>
