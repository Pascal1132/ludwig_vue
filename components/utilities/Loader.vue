<template>
  <div>
    <div class="loading-page">
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    isStarted: false,
  }),
  methods: {
    start() {
      /*if (
        !document.documentElement.classList.contains('is-animating') &&
        !this.isStarted
      ) {
        this.isStarted = true
        setTimeout(() => {
          document.documentElement.classList.remove('loaded')
        }, 300)
        document.documentElement.classList.add('is-animating')
      }*/
    },
    finish() {
      // remove is-animating class from <html>

      /*document.documentElement.classList.remove('is-animating')
      document.documentElement.classList.remove('first-load')
      setTimeout(() => {
        document.documentElement.classList.add('loaded')
        this.isStarted = false
      }, 500)*/
    },
  },
  mounted() {
    // onbeforeunload event
    /*window.addEventListener('beforeunload', (e) => {
      e.preventDefault()
      e.stopImmediatePropagation()
      this.start()
    })*/
  },
}
</script>

<style lang="scss">
html {
  /*.is-animating {
    .loading-page {
      animation: slideIn 0.5s;
      transform: translateX(0) translateY(0);
    }
  }

  .loading-page {
    position: fixed;
    display: block;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: $dark;
    overflow: hidden;
    text-align: center;
    font-size: 30px;
    font-family: sans-serif;
    z-index: 999;
    color: $white;
  }

  &:not(.is-animating) {
    .loading-page {
      animation: slideOut 0.5s;
      transform: translateX(0) translateY(100%);
    }
  }
  &:not(.loaded) {
    overflow: hidden;
  }
}
@keyframes slideIn {
  0% {
    // from top right
    transform: translateX(0) translateY(-100%);
  }
  100% {
    transform: translateX(0) translateY(0);
  }
}
@keyframes slideOut {
  0% {
    transform: translateY(0) translateX(0);
    opacity: 1;
  }
  100% {
    // to bottom left
    transform: translateX(0) translateY(100%);
    opacity: 0.8;
  }
}
@keyframes fadeOut {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0.8;
  }*/
}
</style>
