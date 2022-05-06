<template>
    <section class="RGO06">
        <div v-html="quote.value"></div>
    </section>
</template>
<script>
export default {
    name: 'RGO06',
    props: {
        section: null,
        quote: null,
        author: null,
        detail: null,
    },
    
}
</script>

<style lang="scss" scoped>
.RGO06 {
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100%;
    background-color: #fff;
    color: #000;
    font-family: 'Open Sans', sans-serif;
    font-size: 1.2rem;
    line-height: 1.5;
    padding:clamp(75px, 15vh, 190px) 0;
    text-align: center;
    border-radius: 0;
    position: relative;
}
</style>
