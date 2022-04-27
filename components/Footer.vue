<template>
    <div class="footer">
        Footer
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Nulla quis lorem ut libero malesuada feugiat.
            Curabitur aliquet quam id dui posuere blandit.
            Pellentesque in ipsum id orci porta dapibus.
        </p>
    </div>
</template>
<script>
export default {
    name: 'Footer',
}
</script>

<style lang="scss" scoped>
.footer {
    background-color: $footer_bg;
    padding: 20px;
    color: $white;
    text-align: center;
    
    &:after {
        content: '';
        display: block;
        clear: both;

        height: 0;
        width: 0;
        visibility: hidden;
        overflow: hidden;
    }
}
</style>
