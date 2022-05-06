<template>
  <section class="RGO02-B">
    <h1 v-if="title">{{ title.value }}</h1>
    <h4 v-if="subtitle">{{ subtitle.value }}</h4>
  </section>
</template>
<script>
export default {
  name: "RGO02-B",
  props: {
    section: null,
    link: null,
    link2: null,
    text: null,
    title: null,
    subtitle: null,
    img_RGO02B: null,
    video: null,
  },
};
</script>

<style lang="scss" scoped>
// background-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/RGO02-B.jpg);
// background-size: cover;

.RGO02-B {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  background-color: #fff;
  color: #000;
  font-family: "Open Sans", sans-serif;
  font-size: 1.2rem;
  line-height: 1.5;
  padding: clamp(75px, 15vh, 190px) 0;
  text-align: center;
  border-radius: 0;
  position: relative;
}
</style>
