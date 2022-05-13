<template>
  <div>
    <div class="nav__background"></div>
    <div class="nav">
      <div class="top-bar flex justify--between align--center">
        <div class="top__coords flex align--center">
          <div class="top__coord flex align--center">
            <span class="top__icon fas fa-phone-alt"></span>
            <span class="subtitle-font top__phone">
              <nuxt-link
                to="tel:18449713825"
                title="Appeler maintenant"
                data-no-swup=""
                >1-844-971-3825</nuxt-link
              >
            </span>
          </div>
          <div class="top__coord top__address flex align--center">
            <span class="top__icon fas fa-map-marker-alt"></span>
            <span class="subtitle-font top__address ellipsis">
              <nuxt-link
                to="https://www.google.com/maps/place/444+rue+RubberDuck+Quacktown+Qu%C3%A9bec+H4H+4H4+Canada"
                title="Voir sur Google Maps"
                >444, rue RubberDuck Quacktown (Québec) H4H 4H4 Canada</nuxt-link
              >
            </span>
          </div>
        </div>
        <div class="top__links flex align--center">
          <span class="top__cart top__link">
            <span class="fas fa-shopping-bag"></span>
            <span class="cart__current subtitle-font items_subtotal"
              >0.00 €</span
            >
          </span>
          <div class="top__currency top__link dropdown">
            <span class="dropdown__current subtitle-font">EUR</span>

            <ul class="dropdown__items">
              <li>
                <button
                  type="button"
                  data-currency="bcbcd6bd-d1a9-11ea-8b80-00505691f34d"
                  class="set_currency subtitle-font"
                >
                  CAD
                </button>
              </li>
            </ul>
          </div>
          <div class="top__lang top__link dropdown" data-swup="2">
            <span class="dropdown__current subtitle-font">fr</span>
            <ul class="dropdown__items">
              <li>
                <nuxt-link
                  to="/en"
                  class="subtitle-font"
                  data-no-swup=""
                  title="en"
                  >en</nuxt-link
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="nav__bottom">
        <nav class="nav__main">
          <div class="flex justify--end align--center">
            <div
              class="nav__highlights list-item flex justify--between align--center"
            >
              <div class="nav__sublinks-background"></div>
              <header class="nav__logo">
                <nuxt-link to="/fr" title="Daffy" class="active">
                  <img
                    src="/public/media/d189238a-301b-11eb-8e06-c3b592aaef0d.svg"
                    alt=""
                    loading="lazy"
                  />
                </nuxt-link>
              </header>
              <ul
                class="flex justify--between align--center flex-grow bottom__links"
              >
                <li class="nav__not-menu link" v-for="(link, i) in menuLinks" :key="i">
                  <nuxt-link
                    class="nav__link no-sublink"
                    :to="link.url"
                    :title="link.title"
                  >
                    {{ link.title }}
                  </nuxt-link>
                </li>
                <li class="styled_nav">
                  <ul
                    class="styled_nav-buttons flex justify--end align--center"
                  >
                    <li class="">
                      <nuxt-link
                        class="nav__styled-btn nav__styled-btn--even"
                        to="/fr/nous-joindre"
                        title="Contactez-nous"
                      >
                        <span class="nav__styled-btn--even__text">
                          Contactez-nous
                        </span>
                      </nuxt-link>
                    </li>
                    <li class="">
                      <nuxt-link
                        class="nav__styled-btn nav__styled-btn--odd"
                        to="tel:450-657-8714"
                        title="450-657-8714"
                      >
                        <span class="nav__styled-btn--odd__text">
                          450-657-8714
                        </span>
                      </nuxt-link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div class="nav__burger">
              <button class="hamburger hamburger--spin-r">
                <span class="hamburger-box">
                  <span class="hamburger-inner"></span>
                </span>
              </button>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Header",
  data() {
    return {
      title: "Header",
      mainMenu: {
        urls: [],
      },
      language: "en",
      opened: null,
    };
  },
  methods: {
    open(key) {
      if (this.opened == key) {
        this.opened = null;
      } else {
        this.opened = key;
      }
    },
  },
  fetch() {
    this.title = this.$store.getters.pageable.title;
    this.mainMenu = this.$store.getters.getMenu("main_menu");

    this.language = this.$store.getters.language;
  },
  computed: {
    menuLinks() {
      // foreach (urls in mainMenu) { url[0].title['']
      return this.mainMenu.urls.map((url) => {
        return {
          'title': url?.title[this.language],
          'url': url?.url[this.language] ?? '#',
        };
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.nav {
  transition: opacity $transition, transform $transition;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding-left: calc(#{var(--wrap)} / 2);
  color: var(--nav_color, $nav_color);
  z-index: 888;

  .menu--shown &,
  .cart--shown & {
    .nav__bottom {
      min-height: 0;
    }

    &__main .nav__highlights {
      transition: visibility 0s $transition_duration, opacity $transition,
        height $transition, padding $transition;
      opacity: 0;
      visibility: hidden;
    }
    .top__coords {
      @include transform(translateX(-100vw));
    }
  }
  // Scrolled state
  body.scroll:not(.menu--shown):not(.cart--shown) & {
    transform: translateY(-$top-bar-height);

    &__bottom {
      .nav__main {
        .nav__highlights {
          height: var(--nav-height, $nav-height);
        }
      }

      .nav__burger {
        max-width: var(--nav-height, $nav-height);
        max-height: var(--nav-height, $nav-height);
      }
    }

    &__background {
      opacity: 1;
      @include transform(none);
      box-shadow: 0 0 50px rgba(#{var(--main_bg-rgb), 5%});
    }
  }
  // Hide the nav when changing page
  .is-animating & {
    @include transform(translateY(-100%));
    opacity: 0;
  }
  // Completely hide the menu on a landing page
  .is-landing-page & {
    &,
    &__background,
    a {
      display: none;
    }
  }

  html:not(.has-desktop-menu) &__burger {
    display: none;
  }

  // Scrolled background
  &__background {
    transition: all $transition;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: var(--nav-height, $nav-height);
    background-color: #{"rgba(var(--nav_bg-rgb), 0.8)"};
    opacity: 0;
    z-index: 99;
    @include transform(scaleY(0));
  }

  // Logo box
  &__logo {
    width: 220px;
    padding-right: 2.5vw;
    flex-shrink: 0;

    a {
      display: inline-block;
    }

    img {
      transition: max-height $transition;
      max-height: calc(#{var(--nav-height)} - 20px);
      width: 100%;
      object-fit: contain;
      object-position: left;
    }
  }

  &__main {
    // General main nav ul
    ul:not(.dropdown__items) {
      width: 100%;
      height: 100%;
    }

    // General main nav li
    .list-item {
      height: 100%;
    }

    // General main nav a
    .nav__link:not(.nav__styled-btn) {
      @extend .subtitle-font;
      color: var(--nav_color, $nav_color);
      text-transform: uppercase;
      cursor: pointer;
    }

    // Main nav highlights box
    .nav__highlights {
      transition: visibility 0s, opacity $transition_duration 0.25s ease-in,
        height $transition, padding $transition;
      position: relative;
      height: var(--nav-height, $nav-height);
      padding-right: calc(#{var(--nav-height)} + 40px);
      flex-grow: 1;

      .nav__sublinks-background {
        position: absolute;
        width: 100%;
        top: 100%;
        background-color: var(--main_bg, $main_bg);
        padding: 90px 0;
        transform: scaleY(0);
        transform-origin: top;
        transition: all $transition;
      }

      ul {
        &.justify--end {
          .nav__not-menu {
            padding: 0 20px;
          }
        }

        .nav__not-menu:not(.has-sublink) {
          position: relative;
        }

        .nav__not-menu {
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          padding: 0 10px;

          // a:not(.nav__styled-btn) {
          a.no-sublink {
            position: relative;
            padding: 5px;

            &::before {
              content: "";
              position: absolute;
              background-color: var(--main_bg, $main_bg);
              width: 100%;
              height: 1px;
              left: 0;
              bottom: 0;
              @include transform(scaleX(0));
              transform-origin: left;
              transition: all $transition;
            }

            &:hover::before {
              @include transform(none);
            }
          }
        }
      }

      @media (max-width: 1100px) {
        .bottom__links {
          justify-content: flex-end;

          .link {
            display: none;
          }
        }
      }

      @media (max-width: 540px) {
        .bottom__links {
          display: none;
        }
      }
    }

    // Dropdown main nav
    .dropdown {
      text-align: center;
      text-transform: uppercase;

      // Hover main nav
      &:hover {
        .dropdown {
          &__parent::after {
            transform: rotate(180deg);
            color: var(--nav_color_hover, $nav_color_hover);
          }

          &__items {
            background-color: var(--main_bg, $main_bg);
            transform: scaleY(1);
          }
        }
      }

      // Main nav dropdown btn
      &__parent {
        display: block;
        position: relative;
        white-space: nowrap;

        // Main nav dropdown btn ::after elmts
        &::after {
          @extend %fas;
          display: inline-block;
          transition: transform $transition, color $transition;
          content: "\f0d7";
          margin-left: 5px;
          color: var(--nav_color, $nav_color);
        }
      }

      // Main nav dropdown ul
      &__navlink {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 89px 0;
      }

      &__items {
        transition: transform $transition;
        position: absolute;
        top: 100%;
        min-width: 150px;
        height: auto;
        background-color: var(--main_bg, $main_bg);
        box-shadow: -50px 0 0 var(--main_bg, $main_bg),
          50px 0 0 var(--main_bg, $main_bg);
        transform: scaleY(0);
        transform-origin: top;

        // Main nav dropdown single items
        li {
          position: relative;
          display: block;
          padding: 0;

          // Main nav dropdown single items link
          a {
            display: block;
            padding: 10px 0;
            margin: 5px 0;
            height: 100%;
            color: var(--main_color, $main_color);
            position: relative;
            overflow: hidden;

            &::before {
              content: "";
              position: absolute;
              width: 100%;
              height: 1px;
              bottom: 0;
              left: 0;
              transform: translateX(-100%);
              transition: all $transition;
              background-color: var(--primary_bg, $primary_bg);
            }

            &.active {
              color: var(--primary_bg, $primary_bg);
            }
            &:hover {
              &::before {
                transform: translateX(0);
              }
            }
          }
        }
      }
    }
  }

  &__link {
    transition: color $transition;
    text-align: center;
  }

  // Main nav CTAs
  .styled_nav {
    padding: 0;
  }
  &__styled-btn {
    @extend .small-font;
    display: flex;
    align-items: center;
    border: 2px solid var(--nav_color, $nav_color);
    position: relative;
    white-space: nowrap;
    cursor: pointer;
    height: 50px;
    padding: 12px 18px;
    margin-left: 15px;
    transition: all $transition;

    &::before {
      content: "";
      position: absolute;
      background-color: var(--nav_color, $nav_color);
      top: -1px;
      left: -1px;
      right: -1px;
      bottom: -1px;
      transition: all $transition;
    }

    &--even {
      color: var(--nav_bg, $nav_bg);

      &::before {
        @include transform(none);
        transform-origin: right;
      }

      &:hover {
        color: var(--nav_color, $nav_color);

        &::before {
          @include transform(scaleX(0));
        }
      }
    }

    &--odd {
      color: var(--nav_color, $nav_color);

      &::before {
        @include transform(scaleX(0));
        transform-origin: left;
      }

      &:hover {
        color: var(--nav_bg, $nav_bg);

        &::before {
          @include transform(none);
        }
      }
    }

    span {
      position: relative;
    }
  }

  // Main nav hamburger btn
  &__burger {
    transition: all $transition;
    position: absolute;
    width: 100%;
    height: 100%;
    max-width: var(--nav-height, $nav-height);
    max-height: var(--nav-height, $nav-height);
    top: var(--topbar-height, $top-bar-height);
    right: 0;
    background-color: var(--main_bg, $main_bg);
    box-shadow: 0 0 30px rgba(0, 0, 0, 10%);
    z-index: 1;
  }

  // Width
  @media screen and (max-width: 1200px) {
    &__main {
      border: none;
    }

    .nav_not-menu {
      display: none;
    }

    .top-bar {
      justify-content: flex-end;
    }

    html:not(.has-mobile-menu) & {
      .top-bar {
        margin-right: calc(#{var(--wrap, $wrap-width)} / 2);
      }
      &__main .nav__highlights {
        padding-right: calc(#{var(--wrap, $wrap-width)} / 2);
      }
      &__burger {
        display: none;
      }
    }
    html:not(.has-mobile-menu) &__burger {
      display: none;
    }
    html.has-mobile-menu &__burger {
      display: block;
    }
  }

  @media screen and (max-width: 665px) {
    &__logo {
      flex-shrink: 1;
    }
    .hamburger-inner,
    .hamburger-inner::before,
    .hamburger-inner::after {
      width: 20px;
    }

    &__logo {
      img {
        height: 75px;
      }
    }
  }

  @media screen and (max-width: 370px) {
    .hamburger-inner,
    .hamburger-inner::before,
    .hamburger-inner::after {
      width: 15px;
    }

    .hamburger-inner::before {
      top: 5px;
    }

    .hamburger-inner::after {
      bottom: 5px;
    }
  }
}

// Top bar
.top-bar {
  transition: visibility 0s $transition, opacity $transition,
    transform $transition_duration $transition_duration $bezier,
    margin $transition;
  position: relative;
  white-space: nowrap;
  color: var(--nav_color, $nav_color);
  border-bottom: 1px solid var(--main_bg, $main_bg);
  transform: translateY(0);
  height: var(--topbar-height, $top-bar-height);
  margin-right: calc(#{var(--nav-height)} + 40px);
  z-index: 1;

  .menu--shown &,
  .cart--shown & {
    transition: visibility 0s $transition, opacity $transition,
      transform $transition;
    border-bottom: none;
  }

  .scroll &,
  .menu--shown &,
  .cart--shown & {
    opacity: 0;
    overflow: hidden;
    transform: translateY(-100%);
  }

  .top {
    &__coord {
      & + .top__coord {
        margin-left: 30px;
      }
    }
    &__phone {
      max-width: 160px;
    }
    &__address {
      max-width: 450px;
      max-width: clamp(400px, 38vw, 600px);
    }
    &__icon {
      margin-right: 10px;
    }
    &__link {
      margin-left: 30px;
    }
    &__cart {
      transition: color $transition;
      cursor: pointer;

      &:hover {
        color: var(--nav_color_hover, $nav_color_hover);
      }
    }
  }
  .dropdown {
    position: relative;

    &:hover,
    &:focus-within {
      .dropdown {
        &__items {
          transition: visibility 0s, transform $transition;
          @include transform(none);
          visibility: visible;
        }
      }
    }

    &__current {
      text-transform: uppercase;
    }
    &__items {
      transition: visibility 0s $transition, transform $transition;
      position: absolute;
      top: 100%;
      left: -10px;
      right: -10px;
      transform-origin: top;
      @include transform(scaleY(0));
      background: var(--nav_bg, $nav_bg);
      color: var(--nav_color, $nav_color);
      visibility: hidden;

      a,
      button,
      span {
        transition: color $transition;
        text-transform: uppercase;
        display: block;
        width: 100%;
        padding: 5px;
        text-align: center;
        color: var(--nav_color, $nav_color);

        &:hover {
          color: var(--nav_color_hover, $nav_color_hover);
        }
      }
    }
  }

  a {
    transition: color $transition;
    color: var(--nav_color, $nav_color);

    &:hover {
      color: var(--nav_color_hover, $nav_color_hover);
    }
  }

  @media screen and (max-width: 1200px) {
    &.flex.justify--between {
      justify-content: flex-end;
    }

    .top__coords {
      display: none;
    }
  }
}
</style>
