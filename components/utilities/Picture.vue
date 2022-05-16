<template>
  <!--<nuxt-img
      sizes="sm:200px md:400px lg:800px"
      v-bind="imageField.attributes"
    />-->
  <nuxt-picture v-if="imageField.attributes.src" v-bind="imageField.attributes" loading="lazy">
    <source
      media="(min-width: 1024px)"
      data-viewport="1024"
      srcset="
        /public/media/f5dd3306-4ba0-11ec-bcad-69e99d612afa.jpg?v=1649706632
      "
      width="531"
      height="607"
      intrinsicsize="531 x 607"
      type="image/jpeg"
      align=""
    />
    <source
      media="(min-width: 414px)"
      data-viewport="414"
      srcset="
        /public/media/f5dd46de-4ba0-11ec-86ac-958f86b4e63d.jpg?v=1649706632
      "
      width="531"
      height="607"
      intrinsicsize="531 x 607"
      type="image/jpeg"
      align=""
    />
    <img
      class="img_in_picture"
      loading="lazy"
      srcset="/public/media/f5dd53cc-4ba0-11ec-87b9-41826ccbf795.jpg"
      
      alt=""
      data-width="414"
      data-height="473"
      data-intrinsicsize="414 x 473"
      type="image/jpeg"
      align=""
      width="531"
      height="607"
      intrinsicsize="531 x 607"
    />
  </nuxt-picture>
</template>
<script>
export default {
  name: "Picture",
  props: {
    imageField: null,
  },
};
</script>
<style lang="scss" scoped>
.Picture {
}
</style>
