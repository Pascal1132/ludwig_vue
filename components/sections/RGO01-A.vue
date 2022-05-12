<template>
  <!--<section class="RGO01-A" >
    <div class="front" v-bind="img_RGO01A.data.backgroundDataAttributes">
      <div class="left-content">
      <h4 class="subtitle" v-if="subtitle">{{ subtitle.value }}</h4>
		  <h1 v-if="title">{{ title.value }}</h1>
		
		
		<video v-if="video.attributes.src" v-bind="video.attributes" controls></video>
		<div class="links">
			<Button type="primary" v-if="link" v-bind="link.attributes" icon="location-arrow">{{
			link.optionsValue.title
			}}</Button>
			<Button v-if="link2" v-bind="link2.attributes" icon="plus" type="secondary">{{
			link2.optionsValue.title
			}}</Button>

		</div>
		</div>
      <div v-if="text" class="box" v-html="text.value"></div>
      </div>
      
    
  </section>-->
  <section
    class="section RGO01-A fullBGfix bgSetter bg--nav color--header flex align--center visible once fade alive"
    v-bind="img_RGO01A.data.backgroundDataAttributes"
  >
    <div class="padd flex--full relative z-index">
      <div class="wrap">
        <div class="flex flex--gap wrap--1024 align--center justify--between">
          <div
            class="flex--3-fifth flex--1024-full visible once fade-left alive"
          >
            <div class="subtitle subtitle--contrast visible once slide alive">
              <p>{{subtitle.value}}</p>
            </div>
            <div class="h1 visible once slide alive">
              <p>{{title.value}}</p>
            </div>
          </div>
          <div
            class="flex--half flex--1024-full RGO01-A__right visible once fade-down delay--4 alive"
          >
            <div class="RGO01-A__box bg--primary color--primary no-video">
              <div class="h5 visible slide once delay--4 alive" v-html="text.value">
              </div>
            </div>
          </div>
        </div>
        <div class="btn-container visible once fade-up delay--2 alive">
          <Button
            type="primary"
            v-if="link"
            v-bind="link.attributes"
            icon="location-arrow"
            >{{ link.optionsValue.title }}</Button
          >
          <Button
            v-if="link2"
            v-bind="link2.attributes"
            icon="plus"
            type="secondary"
            >{{ link2.optionsValue.title }}</Button
          >
        </div>
      </div>
    </div>
  </section>
</template>
<script lang="js">
export default {
  name: 'RGO01-A',
  props: {
    section: null,
    link: null,
    link2: null,
    text: null,
    title: null,
    subtitle: null,
    img_RGO01A: null,
    video: null,
  },
  mounted() {
  },
}
</script>

<style lang="scss" scoped>
.RGO01-A {
  min-height: 100vh;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(#{var(--nav_bg-rgb)}, 10%);
    mix-blend-mode: multiply;
    pointer-events: none;
  }

  &:first-child {
    &::before {
      content: none;
    }
  }

  &__right {
    max-width: 480px;
  }

  &__box {
    // padding-left: var(--wrap, $wrap-width);
    padding: 60px 40px 120px;
    margin-left: auto;
    max-width: calc(100% - 80px);

    &.no-video {
      padding-bottom: 60px;
    }

    
  }

  .video {
    &__controls {
      position: relative;
      margin-top: -65px;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 120px;
      height: 120px;
      text-align: center;

      .video__btn span::before {
        -webkit-text-stroke: 0.5px var(--contrast_bg);
      }
    }
    &_-bg {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      mix-blend-mode: overlay;
      background-size: 115vw;
      -webkit-filter: grayscale(1);
      filter: grayscale(1);
    }
  }
  .h1 {
    text-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  }

  .info {
    position: absolute;
    left: 50px;
    bottom: 50px;
    z-index: 10;

    &__icon {
      align-self: center;

      &:hover + .info__hover {
        visibility: visible;
      }
    }
    &__hover {
      flex-direction: column;
      margin-left: 10px;
      padding: 15px;
      color: $black;
      background: rgba(255, 255, 255, 0.5);
      visibility: hidden;
    }
  }

  video {
    transition: opacity $transition;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    opacity: 0;

    &.active {
      opacity: 1;
      & + div {
        display: none;
      }
    }
  }

  @media screen and (max-width: 1024px) {
    &__right {
      max-width: none;
    }
  }
  @media #{$small_phones} {
    &__box {
      max-width: none;
      padding: 40px var(--wrap, $wrap-width);
    }
    video,
    .video__controls {
      display: none;
    }
  }
}
</style>
<style lang="scss">
// no scoped style
.RGO01-A {
  &__box {
    .h5 > * {
      line-height: 1.7;
    }
  }
}
</style>
