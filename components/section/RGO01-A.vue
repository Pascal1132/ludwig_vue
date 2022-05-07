<template>
  <section class="RGO01-A" >
    <div class="front" v-bind="img_RGO01A.data.backgroundDataAttributes">
      <div class="left-content">
      <h4 class="subtitle" v-if="subtitle">{{ subtitle.value }}</h4>
		  <h1 v-if="title">{{ title.value }}</h1>
		
		
		<!-- video -->
		<video v-if="video.attributes.src" v-bind="video.attributes" controls></video>
		<div class="links">
			<Button type="primary" v-if="link" v-bind="link.attributes" icon="location-arrow">{{
			link.optionsValue.title
			}}</Button>
			<Button v-if="link2" v-bind="link2.attributes" icon="plus" type="secondary">{{
			link2.optionsValue.title
			}}</Button>

		</div>
		</div>
      <div v-if="text" class="box" v-html="text.value"></div>
      </div>
      
    
    </div>
  </section>
</template>
<script lang="js">
export default {
  name: 'RGO01-A',
  props: {
    section: null,
    link: null,
    link2: null,
    text: null,
    title: null,
    subtitle: null,
    img_RGO01A: null,
    video: null,
  },
  mounted() {
  },
}
</script>

<style lang="scss" scoped>
.RGO01-A {
  height: 100vh;
  // put .front at the front
  .front {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: #fff;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
	align-items: center;
	justify-content: space-around;
  .subtitle {
    font-size: var(--small-font_fontSize);
    font-weight: var(--small-font_fontWeight);
    color: var(--contrast_color, #ffffff);
    margin-bottom: 1rem;
  }
  
  .left-content {
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    h1 {
    font-size: 8rem;
    display:block;
    text-shadow: 0 0 10px rgba(0,0,0,0.5);
    text-transform: uppercase;
    margin: 0 0 0.83em 0;
  }
  .subtitle {
    background: var(--contrast_bg,#1A1A1A);
    color: var(--contrast_color,#FFFFFF);
    padding: 0.5em;
    font-size: var(--small-font_fontSize);
    display: inline-block;
    width: fit-content;
    font-style: var(--subtitle-font_fontStyle);
  }
  }

	.box {
		padding: 1.5em;
		background-color: $primary_bg;
		max-width: 270px;
		display: flex;
		text-align: left;
		// uppercase
		text-transform: uppercase;
		font-size: 2.1rem;

		justify-content: left;
	}

  }
}
</style>
