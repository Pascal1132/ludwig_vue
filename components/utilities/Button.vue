<template>
  <nuxt-link class="button" :to="to" :data-type="type" :data-alternate="alternate">
    <span class="text"> <slot></slot></span>
    <font-awesome-icon
      v-if="icon"
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
    alternate: 0, // 1, 2, 3
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
  &[data-alternate="1"] {
      // color main color
      .icon {
        color: var(--main_color, #1a1a1a);
      }
      .text {
        color: var(--main_color, #1a1a1a);
      }
    }
  &:active {
        transform: scale(0.9);
    }
}

/// OLD style
/*.btn {
  display: inline-flex;
  position: relative;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  height: 55px;
  z-index: 1;

  &.block {
    display: flex;
    width: 100%;
    text-align: center;
  }

  // Primary btn
  &--primary {
    padding: 0 20px;

    .btn {
      &__text {
        @extend .small-font;
        flex-shrink: 0;

        &:first-child {
          &:not(:last-child) {
            margin-right: 20px;
          }
        }
        &:last-child {
          &:not(:first-child) {
            margin-left: 20px;
          }
        }
      }
      &__line {
        width: 30px;
        position: relative;
        height: 100%;
        overflow: hidden;

        &:first-child {
          @include transform(scaleX(-1));
        }

        // Arrow
        &::before {
          content: "\f178";
          @extend %fal;
          font-size: 3rem;
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          transition: all $transition;
          @include transform(translateX(-100%));
          height: 100%;
          display: flex;
          align-items: center;
        }

        // Line
        &::after {
          content: "";
          position: absolute;
          top: 50%;
          left: 0;
          right: 0;
          height: 2px;
          display: flex;
          align-items: center;
          transition: all $transition;
          transition-delay: 0.3s;
        }
      }
    }

    &:hover,
    a:hover &,
    label:hover & {
      // Arrow
      .btn__line::before {
        @include transform(none);
        transition-delay: 0.15s;
      }

      // Line
      .btn__line::after {
        @include transform(translateX(100%));
        transition-delay: 0s;
      }
    }

    &.bg--primary {
      background-color: var(--primary_bg, $primary_bg);
      color: var(--primary_color, $primary_color);

      .btn__line::after {
        background-color: var(--primary_color, $primary_color);
      }
    }

    &.bg--secondary {
      background-color: var(--secondary_bg, $secondary_bg);
      color: var(--secondary_color, $secondary_color);

      .btn__line::after {
        background-color: var(--secondary_color, $secondary_color);
      }
    }

    &.bg--main {
      background-color: var(--main_bg, $main_bg);
      color: var(--main_color, $main_color);

      .btn__line::after {
        background-color: var(--main_color, $main_color);
      }
    }
  }

  &--secondary-plus {
    // padding-left: 20px;
    position: relative;

    &.btn--contrast {
      .btn__text {
        color: var(--contrast_color, $contrast_color);
      }
    }

    .btn {
      &__text {
        @extend .small-font;
        transition: color $transition;
        padding: 0 20px 0 0;
        flex-shrink: 0;
        color: var(--main_color, $main_color);
        height: 100%;
        display: flex;
        align-items: center;
        position: relative;
        // overflow: hidden;

        // &::before {
        //     content: "";
        //     transition: transform $transition, background $transition, color $transition;
        //     position: absolute;
        //     top: 0;
        //     bottom: 0;
        //     left: -20px;
        //     height: 100%;
        //     width: calc(100% + 38px);
        //     background-color: var(--secondary_bg, $secondary_bg);
        //     @include transform(scaleX(0));
        //     transform-origin: left;
        //     z-index: -1;
        // }
      }

      &__icon {
        padding: 10px;
        background-color: var(--secondary_bg, $secondary_bg);
        color: var(--secondary_color, $secondary_color);
        height: 36px;
        width: 36px;
        display: flex;
        font-size: 14px;
        align-items: center;
        justify-content: center;
        transition: all $transition;
        box-shadow: 0 0 15px rgba(0, 0, 0, 10%);
      }
    }

    &:hover,
    a:hover &,
    label:hover & {
      // .btn__text::before {
      //     @include transform(none);
      // }

      // .btn__text{
      //     color: var(--secondary_color, $secondary_color);
      // }
      .btn__icon {
        @include transform(rotate(360deg));
        transform: rotate(360deg);
      }
    }
  }

  &--tertiary {
    position: relative;
    height: auto;

    .btn__icon {
      transition: background $transition, color $transition;
      width: 24px;
      height: 24px;
      line-height: 24px;
      font-size: 14px;
      text-align: center;
      background: var(--contrast_bg, $contrast_bg);
      color: var(--contrast_color, $contrast_color);

      &:first-child {
        margin-right: 10px;
      }
      &:last-child {
        margin-left: 10px;
      }
    }
    .btn__text {
      @extend .subtitle-font;
      color: var(--main_color, $main_color);
    }

    .share-dropdown {
      transition: visibility 0s $transition_duration, opacity $transition,
        transform $transition;
      position: absolute;
      top: 100%;
      right: 50%;
      width: 150px;
      background: var(--main_bg, $main_bg);
      box-shadow: 0 0 30px rgba(0, 0, 0, 20%);
      @include transform(translateY(-10px) translateX(50%));
      opacity: 0;
      visibility: hidden;
      z-index: 1;
      text-align: center;

      button,
      a {
        transition: background $transition, color $transition;
        display: block;
        width: 100%;
        color: var(--main_color, $main_color);
        padding: 10px 15px;

        &:hover {
          background: var(--primary_bg, $primary_bg);
          color: var(--primary_color, $primary_color);
        }
      }
    }

    &:hover,
    a:hover &,
    label:hover & {
      .btn__icon {
        background: var(--primary_bg, $primary_bg);
        color: var(--primary_color, $primary_color);
      }
      .share-dropdown {
        transition: visibility 0s, opacity $transition, transform $transition;
        @include transform(translateX(50%));
        opacity: 1;
        visibility: visible;
      }
    }
  }

  &.add_to_cart {
    .btn__line {
      &::before {
        content: "\f217";
        font-size: 2.6rem;
      }
    }
    .fa-cart-plus {
      font-size: 20px;

      &::before {
        margin-left: -2px;
      }
    }
  }

  &.disabled,
  &--disabled {
    opacity: 0.5;
    cursor: not-allowed;
    pointer-events: none;
  }

  &--call-to-action {
    @extend .small-font;
    position: relative;
    border: 2px solid var(--main_bg, $main_bg);
    height: 50px;
    padding: 12px 18px;
    overflow: hidden;

    &::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      z-index: -1;
      transition: all $transition;
    }

    &-full {
      background-color: transparent;
      color: var(--contrast_bg, $contrast_bg);
      transition: all $transition;

      &::before {
        background-color: var(--main_bg, $main_bg);
        transform: translateX(0);
      }

      &:hover,
      a:hover &,
      label:hover & {
        color: var(--main_bg, $main_bg);

        &::before {
          transform: translateX(100%);
        }
      }
    }

    &-empty {
      background-color: transparent;
      color: var(--main_bg, $main_bg);
      transition: all $transition;

      &::before {
        background-color: var(--main_bg, $main_bg);
        transform: translateX(-100%);
      }

      &:hover,
      a:hover &,
      label:hover & {
        color: var(--contrast_bg, $contrast_bg);

        &::before {
          transform: translateX(0);
        }
      }
    }
  }

  &__text {
    transition: color $transition;
  }

  // Width
  @media screen and (max-width: 600px) {
    &--primary {
      min-height: 38px;
    }

    &--secondary {
      min-height: 38px;
    }
  }
}*/
</style>
