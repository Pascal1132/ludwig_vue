<template>
  <div>
    <div class="loading-page" v-if="loading" :class="{ animation: willChange }">
      <div class="dots">
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    loading: false,
    willChange: false,
    timestamp: 0,
  }),
  methods: {
    start() {
      this.loading = true;
      this.timestamp = Date.now();
    },

    finish() {
      this.willChange = true;
      setTimeout(() => {
        this.loading = false;
        this.willChange = false;
      }, 200);
      console.log(Date.now() - this.timestamp + 'ms');
    },
  },
  mounted() {},
};
</script>

<style lang="scss">
.loading-page {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  //background: rgba(0, 0, 0, 1);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  text-align: center;
  color: #fff;
  animation: fadeIn 0.1s ease-in-out;
  z-index: 9999;
  //simple dots animation for Loader
  .dots {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    text-align: center;
    color: #fff;
    animation: fadeIn 0.25s ease-in-out;
    z-index: 9999;
    background-color: rgba(0, 0, 0, 0.9);
    width: 100px;
    height: 50px;
    .dot {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      margin: 0 5px;
      background-color: $primary_color;
      border: 2px solid $white;
      animation-delay: 0.15s;
      animation-iteration-count: infinite;
      animation-duration: 0.2s;
      animation-fill-mode: both;
      animation-timing-function: cubic-bezier(0.8, 0, 0.2, 1);
      animation-direction: alternate;
      animation-play-state: running;
      animation-name: dot;
    }
    .dot:nth-child(1) {
      animation-delay: 0.1s;
    }
    .dot:nth-child(2) {
      animation-delay: 0.2s;
    }
    .dot:nth-child(3) {
      animation-delay: 0.3s;
    }
  }

  &.animation {
    animation: fadeOut 0.25s linear;
  }
}
@keyframes fadeOut {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes dot {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
</style>
