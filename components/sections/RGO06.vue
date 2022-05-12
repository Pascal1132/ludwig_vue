<template>
  <section
    class="section RGO06 bg--contrast color--contrast visible once fade once alive"
  >
    <div class="padd">
      <div class="wrap">
        <div class="center">
          <div class="RGO06__icon visible once zoom alive">
            <svg
              width="54"
              height="54"
              viewBox="0 0 54 54"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M54 0H0V54H54V0ZM14.8003 28.7999H20.2002L16.6002 35.9998H22.0002L25.6002 28.7999V18H14.8003V28.7999ZM29.1998 18V28.7999H34.5997L30.9997 35.9998H36.3997L39.9997 28.7999V18H29.1998Z"
                fill="#72A9C9"
              ></path>
            </svg>
          </div>
          <div class="h3 RGO06__quote visible once fade-up delay--2 alive" v-html="quote.value">
          </div>
          <div class="subtitle subtitle--primary slide">
            <span>
              <span>{{author.value}}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "RGO06",
  props: {
    section: null,
    quote: null,
    author: null,
    detail: null,
  },
};
</script>

<style lang="scss" scoped>
.RGO06{
    &__icon{
        width: 54px;
        height: 54px;
        margin: 0 auto 30px;

        svg *{
            fill: var(--primary_bg, $primary_bg);
        }
    }
    &__quote{
        &:not(:last-child){
            margin-bottom: 30px;
        }
    }
}
</style>
