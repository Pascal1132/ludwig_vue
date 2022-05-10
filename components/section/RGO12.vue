<template>
  <!--
  <section class="RGO12">
    <div class="breadcrumb" v-if="breadcrumb">
      <div>
        <nuxt-link v-if="backUrl" :to="backUrl">Retour</nuxt-link>
      </div>
      <div>
        <span v-for="(page, i) in breadcrumb.data" :key="i">
          <nuxt-link v-if="page.url" :to="page.url">
            {{ page.title }} /
          </nuxt-link>
          <span class="current" v-else>
            {{ page.title }}
          </span>
        </span>
      </div>
    </div>
  </section>-->
  <div class="section RGO12 bg--main overflow">
    <div class="relative">
      <div class="wrap--half">
        <div
          class="flex flex--wrap flex--gap flex--forever justify--between align--center"
        >
          <nuxt-link
            to="https://ludwig2.rubberduckcms.com/fr"
            title="Retour"
            class="btn--back"
          >
            <font-awesome-icon class="btn__icon" icon="caret-left"></font-awesome-icon>
            <span class="btn__text caps">Retour</span>
          </nuxt-link>

          <div class="breadcrumb">
            <ul class="flex flex--wrap">
              <li v-for="(page, i) in breadcrumb.data" :key="i">
                <nuxt-link v-if="page.url" :to="page.url">
                  {{ page.title }} /
                </nuxt-link>
                <span class="current" v-else>
                  {{ page.title }}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "RGO12",
  props: {
    section: null,
    breadcrumb: null,
  },
  computed: {
    backUrl() {
      let len = this.breadcrumb?.data?.length || 0;
      return len > 1 ? this.breadcrumb.data[len - 2].url : null;
    },
  },
};
</script>

<style lang="scss" scoped>
.RGO12 {
  & > div {
    padding: 35px 0;
  }

  .btn--back {
    transition: color $transition;
    color: var(--main_color, $main_color);

    &:hover {
      color: var(--primary_bg, $primary_bg);

      .btn__icon {
        background: var(--secondary_bg, $secondary_bg);
        color: var(--secondary_color, $secondary_color);
      }
    }

    .btn__icon {
      transition: color $transition, background $transition;
      transition-delay: 0.12s;
      background: var(--primary_bg, $primary_bg);
      color: var(--primary_color, $primary_color);
      width: 24px;
      height: 24px;
      line-height: 24px;
      text-align: center;
      margin-right: 5px;
    }
    .btn__text {
      @extend .subtitle-font;
      text-transform: uppercase;
    }

    span {
      display: inline-block;
      vertical-align: middle;
    }
  }

  li {
    @extend .input-font;
    font-size: 11px;

    &:not(:last-child) {
      &::after {
        content: "\00a0/\00a0";
      }
    }

    a {
      transition: color $transition;

      &:hover {
        color: var(--primary_bg, $primary_bg);
      }
    }
  }
}
</style>
