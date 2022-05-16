<template>
  <section class="section RGO02-B bg--main">
    <div class="padd">
      <div class="wrap">
        <div class="flex flex--gap wrap--1024">
          <div class="media__container flex--half flex--1024-full">
            <div class="image sticky sticky--top">
              <div
                class="inline-block relative visible once fade-down once alive"
              >
                <Picture :imageField="img_RGO02B" />
              </div>
            </div>
          </div>
          <div class="text__container flex--half flex--1024-full">
            <div class="sticky sticky--top visible once fade-up once alive">
              <div
                class="subtitle subtitle--contrast visible once slide once alive"
              data-aos="flip-down">
                <p>{{ subtitle.value }}</p>
              </div>
              <div class="h2 visible once slide once alive" data-aos="fade-up" data-aos-delay="100">
                <p>{{ title.value }}</p>
              </div>
              <div class="wysiwyg" v-html="text.value" data-aos="fade-up" data-aos-delay="200"></div>
              <div class="btn-container" data-aos="fade-up" data-aos-delay="300">
                <!-- LINK 1 -->
                <Button
                  type="primary"
                  v-if="link"
                  v-bind="link.attributes"
                  icon="location-arrow"
                  alternate="1"
                  >{{ link.optionsValue.title }}</Button
                >
                <!-- LINK 2 -->
                <Button
                  v-if="link2"
                  v-bind="link2.attributes"
                  icon="plus"
                  type="secondary"
                  alternate="1"
                  >{{ link2.optionsValue.title }}</Button
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "RGO02-B",
  props: {
    section: null,
    link: null,
    link2: null,
    text: null,
    title: null,
    subtitle: null,
    img_RGO02B: null,
    video: null,
  },
};
</script>

<style lang="scss" scoped>
.RGO02-B {
  .media__container {
    font-size: 0;

    .image {
      .video {
        display: flex;
        justify-content: center;
        position: relative;

        video {
          max-width: 100%;
          max-height: 85vh;
        }

        .video__controls {
          position: absolute;
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: flex-end;
          color: var(--main_bg, $main_bg);

          .video__btn {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 40px;
            height: 40px;
            padding: 0 20px;
            cursor: pointer;
          }

          .video__play {
            position: relative;

            .btn--on {
              position: absolute;
              opacity: 1;
            }

            .btn--off {
              position: absolute;
              opacity: 0;
            }

            &.active {
              .btn--on {
                opacity: 0;
              }

              .btn--off {
                opacity: 1;
              }
            }
          }

          .video__volume {
            position: relative;

            .btn--on {
              position: absolute;
              opacity: 1;
            }

            .btn--off {
              position: absolute;
              opacity: 0;
            }

            &.active {
              .btn--on {
                opacity: 0;
              }

              .btn--off {
                opacity: 1;
              }
            }
          }
        }
      }
    }
  }

  @media #{$tablets} {
    .alRight {
      text-align: left;
    }
  }
}
</style>
