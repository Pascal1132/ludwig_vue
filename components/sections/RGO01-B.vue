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
    v-bind="img_RGO01B.data.backgroundDataAttributes"
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
              <h1>{{title.value}}</h1>
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
.RGO01-B {
    position: relative;

    &::after{
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

    &:first-child{
        &::before{
            content: none;
        }
    }

    &__right{
        max-width: 480px;
    }

    &__box{
        // padding-left: var(--wrap, $wrap-width);
        padding: 60px 40px 120px;
        margin-left: auto;
        max-width: calc(100% - 80px);

        &.no-video{
            padding-bottom: 60px;
        }

        .h5 > *{
            line-height: 1.7;
        }
    }
    
    .video{
        &__controls{
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
        &_-bg{
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
    .h1{
        text-shadow: 0 0 5px rgba(0,0,0, .2);
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
            background: rgba(255, 255, 255, .5);
            visibility: hidden;
        }
    }

    video{
        transition: opacity $transition;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
        opacity: 0;

        &.active{
            opacity: 1;
            & + div.info {
                display: none;
            }
        }
    }

    @media screen and (max-width: 1024px) {
        .RGO01-B{
            min-height: 600px;
        }

        &__right{
            max-width: none;
        }
    }
    @media #{$small_phones}{
        &__box{
            max-width: none;
            padding: 40px var(--wrap, $wrap-width);
        }
        video, .video__controls{
            display: none;
        }
    }
}

</style>
