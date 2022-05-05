<template>
  <section class="RMO25">
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
  </section>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  name: 'RMO25',
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
}
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
