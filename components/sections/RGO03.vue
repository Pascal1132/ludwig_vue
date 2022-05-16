<template>
  <section
    class="section RGO03 fullBGfix overflow bgSetter bg--main"
    data-backgrounds="/public/media/99521696-417f-11eb-860a-df93e66311b1.png?v=1651861384,/public/media/9951fb2a-417f-11eb-a618-d5ee6a8c88cd.png?v=1651861384,/public/media/9951db72-417f-11eb-8085-1b0df3ee33a6.png?v=1651861384"
    data-sizes=",,"
    data-positions=",,"
    data-viewports="414,1024,1920"
    v-bind="img_RGO03.data.backgroundDataAttributes"
  >
    <div class="padd padd--small">
      <div class="wrap">
        <div class="container">
          <div
            class="text__box padd bg--contrast color--contrast"
          >
            <div class="wrap">
              <div class="subtitle subtitle--primary visible once " data-aos-delay="100" data-aos="fade-left">
                <p>{{ subtitle.value }}</p>
              </div>
              <div class="h3 visible once " data-aos="fade-left" data-aos-delay="200" >
                <p>{{ title.value }}</p>
              </div>
              <div class="wysiwyg"  data-aos="fade-left" data-aos-delay="300">
                <span v-html="text.value"></span>
              </div>
              <div class="btn-container" v-if="(link.isFilled || link2.isFilled)" data-aos="fade-left" data-aos-delay="400">
                <Button
                  type="primary"
                  v-if="link.isFilled"
                  v-bind="link.attributes"
                  icon="location-arrow"
                  >{{ link.optionsValue.title }}</Button
                >
                <Button
                  v-if="link2.isFilled"
                  v-bind="link2.attributes"
                  icon="plus"
                  type="secondary"
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
  name: "RGO03",
  props: {
    section: null,
    link: null,
    link2: null,
    text: null,
    title: null,
    subtitle: null,
    img_RGO03: null,
  },
};
</script>

<style lang="scss" scoped>
.RGO03 {
  .container {
    display: flex;
    justify-content: flex-end;
  }
  .text__box {
    background-color: var(--contrast_bg, $contrast_bg);
    width: 60%;
    min-width: 700px;

    .wrap {
      padding: 0 100px;
    }
  }

  @media #{$tablets} {
    .text__box {
      min-width: 0;
      width: 100%;
    }
  }

  @media #{$phones} {
    & > .padd > .wrap {
      padding-right: 0;
    }
    .container {
      justify-content: center;
    }
    .text__box .wrap {
      padding: 0 var(--wrap, $wrap-width);
    }
  }
}
</style>
