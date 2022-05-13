import AOS from 'aos'
import Vue from 'vue'
import 'aos/dist/aos.css'

Vue.mixin({
    mounted() {
        AOS.init({
            once: true,
            easing: 'ease-in-out',
            offset: 0,
            disable: 'mobile',
            anchorPlacement: 'top-bottom',
        })
    }
})
