<template>
  <nuxt-link class="button" :to="to" :data-type="type">
    <span class="text"> <slot></slot></span>
    <font-awesome-icon
      v-if=""
      class="icon"
      :icon="['fas', icon]"
    ></font-awesome-icon>
  </nuxt-link>
</template>
<script>
export default {
  name: "Button",
  props: {
    to: null,
    target: null,
    text: null,
    icon: null,
    type: null, // primary, secondary
  },
  mounted() {},
};
</script>
<style lang="scss" scoped>
.button {
  display: inline-flex;
  position: relative;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  height: 55px;
  padding: 0.5em;
  z-index: 1;
  transition: all 0.1s cubic-bezier(0.68, 0.16, 0.39, 0.98);

  .text {
    transition: color 0.35s cubic-bezier(0.68, 0.16, 0.39, 0.98);
    padding: 0 20px 0 0;
    flex-shrink: 0;
    color: var(--main_color, #1a1a1a);
    height: 100%;
    display: flex;
    align-items: center;
    font-size: var(--small-font_fontSize);
    position: relative;
    color: var(--contrast_color, #ffffff);
  }
  &[data-type="secondary"] {
    flex-direction: row;
    justify-content: center;
    align-items: center;

    .icon {
        background-color: var(--secondary_bg, #f5f5f5);
        color: var(--secondary_color, #1a1a1a);
        width: 25px;
        height: 25px;
        padding: 3px;
        position: relative;
        transition: all 0.35s cubic-bezier(0.68, 0.16, 0.39, 0.98),  color 0.1s linear;
    }
    &:hover {
      .icon {
        -webkit-transform: rotate(360deg);
        -ms-transform: rotate(360deg);
        transform: rotate(360deg);
        transform: rotate(360deg);
      }
    }
  }
  &[data-type="primary"] {
    background-color: var(--secondary_bg, #f5f5f5);
    padding: 0 20px;
    :first-child:not(:last-child) {
      margin-right: 20px;
    }
    .icon {
      width: 20px;
      position: relative;
      height: 100%;
      overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.35s cubic-bezier(0.68, 0.16, 0.39, 0.98),  color 0.1s linear;
    }
    // nice hover animation
    &:hover {
        .icon {
          // rotate like 45 degrees
            -webkit-transform: rotate(45deg);
            -ms-transform: rotate(45deg);
            transform: rotate(45deg);
            transform: rotate(45deg);
            
        }
    }

    
  }
  &:active {
        transform: scale(0.9);
    }
}
</style>
