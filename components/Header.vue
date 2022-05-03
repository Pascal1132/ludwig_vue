<template>
  <div class="nav">
    <div class="nav-links">
      <div v-for="(menu, index) in topMenu.urls" :key="index">
        <div v-if="(menu.type[language] == 'submenu')">
          <span class="nav-link" @click="open(index)">
            {{(menu.title[language])}}
          </span>
          <div class="dropdown" :class="{ active: opened == index }">
            <div class="dropdown-content">
              <div
                class="dropdown-content-link"
                v-for="(submenu, index) in menu.urls"
                :key="index"
              >
                <a :href="submenu.url[language]">
                  {{(submenu.title[language])}}
                </a>
              </div>
            </div>
          </div>
        </div>
        <div v-else>
          <nuxt-link :prefetch="false" :to="menu.url[language]" class="nav-link">
            {{(menu.title[language])}}
          </nuxt-link >
        </div>
      </div>
    </div>
    <!-- TOP-BAR -->
    <!--<div class="top-bar">
      <div class="top__coords">
        <div class="phone-menu">
          <a href="tel:5555555555" class="top__link" title="555 555 5555">
            <span class="fas fa-mobile-alt"></span>
            555 555 5555
          </a>
        </div>
        <div class="top-menu">
            <nuxt-link v-for="(menu, index) in topMenu.urls" :key="index" class="top__link" :to="menu.url[language]">
              {{(menu.title[language])}}
            </nuxt-link>
        </div>
      </div>
      <div class="links">
        <div class="separated-links">
          <span class="top__cart top__link">
            <span class="far fa-shopping-cart"></span>
            <span class="cart__current items_subtotal">0.00 $</span>
          </span>
          <div class="top__currency top__link dropdown">
            <span class="">CAD</span>
          </div>
        </div>
        <div class="top__lang top__link dropdown" >
          <span class="dropdown__current">fr</span>
<ul class="dropdown__items">
            <li>
              <a
                href="https://daffy.rubberduckcms.com/en"
                data-no-swup=""
                title="en"
              >
                en
              </a>
            </li>
          </ul>
    <</div>
      </div>
    </div>
    MAIN-NAV
    <div class="main-nav"></div>-->
  </div>
</template>
<script>
export default {
  name: 'Header',
  data() {
    return {
      title: 'Header',
      topMenu: {
        urls: [],
      },
      language: 'en',
      opened: null,
    }
  },
  methods: {
    open(key) {
      if (this.opened == key) {
        this.opened = null
      } else {
        this.opened = key
      }
    },
  },
  fetch() {
    this.title = this.$store.getters.pageable.title
    this.topMenu = this.$store.getters.getMenu('top_menu')

    this.language = this.$store.getters.language
  },
}
</script>

<style lang="scss" scoped>
.nav {
  transition: opacity 0.35s cubic-bezier(0.68, 0.16, 0.39, 0.98),
    transform 0.35s cubic-bezier(0.68, 0.16, 0.39, 0.98);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: $nav_bg;
  color: $nav-color;
  z-index: 888;
  .nav-links {
    display: flex;
    flex-direction: row;
    align-items: space-between;
    justify-content: center;
    padding: 0.5rem 0;
    .nav-link{
      font-size: 1.7rem;
      font-weight: 500;
      color: $nav-color;
      text-decoration: none;
      padding: 0.5rem 1rem;
      cursor: pointer;
      &:hover {
        color: $nav_color_hover;
      }
      &.active {
        color: $nav_color_hover;
      }
    }
  }

  /*.top-bar {
    transition: height 0.4s cubic-bezier(0.68, 0.16, 0.39, 0.98),
      opacity 0.4s cubic-bezier(0.68, 0.16, 0.39, 0.98);
      padding: 0 3.75vw;
    position: relative;
    height: 55px;
    border-bottom: 1px solid var(--primary_color, #ececec);
    white-space: nowrap;
    z-index: 1;
    pointer-events: all;
    justify-content: space-between;
    align-items: center;
    display: flex;
    .top__coords {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      .phone-menu {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        .top__link {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          color: $nav-color;
          font-size: 1.7rem;
          font-weight: 400;
          text-decoration: none;
          padding: 0.5rem 1rem;
        }
      }
      .top-menu {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        .top__link {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          color: $nav-color;
          font-size: 1.7rem;
          font-weight: 400;
          text-decoration: none;
          padding: 0.5rem 1rem;
        }
      }
    }
    .links {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      .separated-links {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        .top__cart {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          color: $nav-color;
          font-size: 1.7rem;
          font-weight: 400;
          text-decoration: none;
          padding: 0.5rem 1rem;
        }
        .top__currency {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          color: $nav-color;
          font-size: 1.7rem;
          font-weight: 400;
          text-decoration: none;
          padding: 0.5rem 1rem;
          transition: background-color 0.35s
            cubic-bezier(0.68, 0.16, 0.39, 0.98);
        }
      }
      .top__lang {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        .dropdown__current {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          color: $nav-color;
          font-size: 1.7rem;
          font-weight: 400;
          text-decoration: none;
          padding: 0.5rem 1rem;
        }
      }
    }
  }
  .main-nav {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }*/
}
</style>
