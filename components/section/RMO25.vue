<template>
  <!--<section class="RMO25">
    <div v-if="objects">
      <div class="card" v-for="(object, i) in objects" :key="i">
        <div class="card-header">
          <h3 class="card-title">{{ object.title }}</h3>
        </div>
        <div class="card-body">
          <img :src="object.previewImage.url" />
        </div>
        <div class="footer">
          <span>
            {{ object.author.firstName + ' ' + object.author.lastName }}
          </span>
        </div>
      </div>
    </div>
    <div v-if="objects == null">
      Loading...
    </div>
  </section>-->
  <section class="section RMO25 bg--alt">
    <div class="padd">
      <div class="wrap">
        <!-- FILTERS -->
        <div class="hide pagination_filters"></div>
        <div
          class="articles flex flex--gap flex--wrap mixitup-container"
          id="MixItUp2E2BBC"
        >
          <nuxt-link
            to="https://ludwig2.rubberduckcms.com/fr/article-1"
            title="Article 1"
            class="mixitup__item article flex--third flex--1600-half flex--768-full"
            data-cat=""
            style="display: inline-block"
            data-bound=""
          >
            <div
              class="article__image box-padd fullBG flex align--end bg--5 visible once fade-down alive"
              data-backgrounds="/public/media/7d4ccad8-576b-11ec-a5d7-f1ae0f18bf38.jpg?v=1638888144"
              data-sizes=""
              data-positions=""
              style="
                background-image: url('/public/media/7d4ccad8-576b-11ec-a5d7-f1ae0f18bf38.jpg?v=1638888144');
              "
            >
              <div
                class="article__box flex--full box--bordered bg--main color--main visible once fade-up delay--2 alive"
              >
                <div class="box-padd--smol">
                  <div
                    class="article__info flex flex--gap justify--between wrap--600"
                  >
                    <time
                      class="subtitle-font"
                      pubdate=""
                      datetime="12/31/69"
                      title="Wed Dec 31 19:00:00 1969"
                    >
                      31 décembre 1970
                    </time>
                    <div class="categs alRight">
                      <span class="categ subtitle-font"> </span>
                    </div>
                  </div>
                  <div class="subtitle-font article__author color--paragraph">
                    <span>Kevin Dubreuil</span>
                  </div>

                  <div class="article__title h5">
                    <h3>Article 1</h3>
                  </div>

                  <div class="wysiwyg line-clamp">
                    <p></p>
                  </div>
                </div>
                <div class="btn-container box__btns box-padd--smol alRight">
                  <span class="btn btn--secondary-plus">
                    <span class="btn__icon far fa-plus"></span>
                  </span>
                </div>
              </div>
            </div>
          </nuxt-link>
        </div>

        <!-- PAGINATION -->
        <input
          type="hidden"
          id="reference_id"
          value="eba26f50-cc35-11ea-8985-7bdb57a7e804"
        />
      </div>
    </div>
  </section>
</template>
<script>
import { mapActions } from "vuex";
export default {
  name: "RMO25",
  props: {
    section: null,
    articles: null,
    objects: null,
  },
  /*data: () => ({
    objects: null,
  }),
  async fetch() {
    this.objects = await this.fetchObjects({
      name: 'blog_articles',
      ids: Object.values(this.articles.value),
    })
  },
  methods: {
    //...mapActions(['fetchObjects']),
  },*/
};
</script>

<style lang="scss" scoped>
.RMO25 {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  box-shadow: none;
  background: transparent;
  margin-bottom: 50px;
  color: $primary_color;

  .card {
    margin-bottom: 1rem;
    width: 100%;
    max-width: 300px;
    display: flex;
    border-radius: 0.5rem;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    background-color: $primary_bg;
    color: $primary_color;
    transition: all 0.1s;
    cursor: pointer;
    box-shadow: none;
    &:hover {
      box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.5);
    }

    .card-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0.5rem;
      .card-title {
        font-size: 1.5rem;
        font-weight: bold;
      }
    }
    .card-body {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0.5rem;
      img {
        width: 100%;
      }
    }
    .footer {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0.5rem;
      span {
        font-size: 1.5rem;
        font-weight: bold;
      }
    }
  }
}
</style>
