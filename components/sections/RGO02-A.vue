<template>
  <section class="section RGO02-A bg--main" data-aos="fade-right">
    <div class="padd">
      <div class="wrap">
        <div class="flex flex--gap flex--reverse-row wrap--1024">
          <!-- IMG -->
          <div class="media__container flex--half flex--1024-full" data-aos="fade-left">
            <div class="image alRight sticky sticky--top">
              <div
                class="inline-block relative visible once fade-up once overflow alive"
              >
                <!--<picture>
                  <source
                    media="(min-width: 1024px)"
                    data-viewport="1024"
                    srcset="
                      /public/media/f5dd3306-4ba0-11ec-bcad-69e99d612afa.jpg?v=1649706632
                    "
                    width="531"
                    height="607"
                    intrinsicsize="531 x 607"
                    type="image/jpeg"
                    align=""
                  />
                  <source
                    media="(min-width: 414px)"
                    data-viewport="414"
                    srcset="
                      /public/media/f5dd46de-4ba0-11ec-86ac-958f86b4e63d.jpg?v=1649706632
                    "
                    width="531"
                    height="607"
                    intrinsicsize="531 x 607"
                    type="image/jpeg"
                    align=""
                  />
                  <img
                    class="img_in_picture"
                    loading="lazy"
                    srcset="
                      /public/media/f5dd53cc-4ba0-11ec-87b9-41826ccbf795.jpg
                    "
                    src="/public/media/f5dd53cc-4ba0-11ec-87b9-41826ccbf795.jpg?v=1649706632"
                    alt=""
                    data-width="414"
                    data-height="473"
                    data-intrinsicsize="414 x 473"
                    type="image/jpeg"
                    align=""
                    width="531"
                    height="607"
                    intrinsicsize="531 x 607"
                  />
                </picture>-->
                <Picture :imageField="img_RGO02A" />
              </div>
            </div>
          </div>

          <!-- TEXT -->
          <div class="text__container flex--half flex--1024-full" data-aos="fade-right">
            <div
              class="sticky sticky--top sticky--bottom visible once fade-down once alive"
            >
              <!-- SOUS TITRE -->
              <div
                class="subtitle subtitle--contrast visible once slide once alive"
              >
                <p>{{subtitle.value}}</p>
              </div>
              <!-- TITRE -->
              <div class="h2 visible once slide once alive">
                <p>{{title.value}}</p>
              </div>
              <!-- TEXT -->
              <div class="wysiwyg" v-html="text.value"></div>
              <div class="btn-container">
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
  name: "RGO02-A",
  props: {
    section: null,
    link: null,
    link2: null,
    text: null,
    title: null,
    subtitle: null,
    video: null,
    img_RGO02A: null,
  },
};
</script>

<style lang="scss" scoped>
.RGO02-A,
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
