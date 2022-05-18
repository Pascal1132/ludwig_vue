<template>
  <section class="section RGO07 bg--alt">
    <div class="padd">
      <div class="wrap">
        <client-only>
        <slick
          class="slick--RGO07 slick--gapped slick--flex visible once fade-up row--768 slick-initialized slick-slider alive"
        >
          <div class="slick-list draggable">
            <div
              class="slick-track"
              style="
                opacity: 1;
                width: 1557px;
                transform: translate3d(0px, 0px, 0px);
              "
            >
              <div
                class="slide box bg--main resized slick-slide slick-current slick-active"
                data-slick-index="0"
                aria-hidden="false"
                tabindex="0"
                style="width: 489px; height: 663.172px"
                v-for="(card, index) in cards"
                :key="index"
                data-aos="fade-up"
                :data-aos-delay="100 * index"
              >
                <div class="resize flex flex--column justify--between h--100">
                  <a
                    href="https://ludwig.local/fr"
                    title="Bouton"
                    target="_self"
                    class="box-padd"
                    tabindex="0"
                  >
                    <div
                      class="box__image fullBG bgSetter"
                      data-backgrounds="/public/media/f1f1f9b6-417e-11eb-a500-ebf48585ff9f.png?v=1652195386,/public/media/114b0158-417b-11eb-8707-412ebc018582.png?v=1652195386,/public/media/114ac2d8-417b-11eb-a913-ef6b9f4b5c3d.png?v=1652195386"
                      data-sizes=",,"
                      data-positions=",,"
                      data-viewports="414,1024,1920"
                      v-bind="card.img_RGO07.data.backgroundDataAttributes"
                    ></div>
                    <div class="h4 margin">
                      <p>{{ card.title.value }}</p>
                    </div>
                    <div class="subtitle margin">
                      <p>{{ card.subtitle.value }}</p>
                    </div>
                    <div class="wysiwyg" v-html="card.text.value"></div>
                  </a>
                  <div class="btn-container box__btns box-padd">
                    <Button
                      type="primary"
                      v-if="card.link"
                      v-bind="card.link.attributes"
                      icon="location-arrow"
                      alternate="1"
                    >
                      {{ card.link.optionsValue.title }}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </slick>
        </client-only>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "RGO07",
  props: {
    section: null,
    pageable: null,
    index: null,
  },
  computed: {
    cards() {
      var isNext = true;
      return this.pageable.sections
        .filter((section, index) => {
          if (section.code !== "RGO07-A" && index > this.index) {
            isNext = false;
          }
          return isNext && index > this.index;
        })
        .map((section) => section.props);
    },
  },
  mounted() {
    console.log(this.cards);
  },
};
</script>

<style lang="scss" scoped>
.RGO07 {
  video {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    object-fit: contain;
    width: 100%;
    height: 100%;
  }
}
</style>
