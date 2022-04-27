<template>
  <div class="nav">
    <!--<span class="swup">{{ title }}</span>
    <div class="nav-links">
      <div v-for="(menu, index) in menu.urls" :key="index">
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
          <nuxt-link :to="menu.url[language]" class="nav-link">
            {{(menu.title[language])}}
          </nuxt-link>
        </div>
      </div>
    </div>-->
    <!-- TOP-BAR -->
    <div class="top-bar">
      <div class="top__coords">
        <div>

        </div>
        <div class="top__address">
          
        </div>
      </div>
      <div class="top__links">

      </div>
    </div>
    <!-- MAIN-NAV -->
    <div class="main-nav">
    </div>
  </div>
</template>
<script>
export default {
  name: 'Header',
  data() {
    return {
      title: 'Header',
      menu: {
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
    this.menu = this.$store.getters.getMenu('main_menu')

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
  padding-left: calc(10vh / 2);//calc(var(--wrap) / 2);
  color: $nav-color;
  z-index: 888;
  .top-bar {
    transition: visibility 0s 0.35s cubic-bezier(.68,.16,.39,.98),opacity 0.35s cubic-bezier(.68,.16,.39,.98),transform 0.35s 0.35s cubic-bezier(.68,.16,.39,.98),margin 0.35s cubic-bezier(.68,.16,.39,.98);
    position: relative;
    white-space: nowrap;
    color: var(--nav_color,#ffffff);
    border-bottom: 1px solid var(--main_bg,#ffffff);
    transform: translateY(0);
    height: var(--topbar-height,55px);
    margin-right: calc(var(--nav-height) + 40px);
    z-index: 1;
  }
}
@keyframes fadeIn {
  from {
    z-index: 100;
    transform: scale3d(0.85, 0.85, 0.85);
  }
  to {
    z-index: 100;
    transform: scale3d(1, 1, 1);
  }
}
</style>
