<template>
    <picture 
        class="block relative w-full my-8 mx-auto lg:my-16 transform transition-all duration-500 ease-in-out"
        :class="{
            'translate-y-20 opacity-0': !shown,
            'max-w-1200': paddingBottom < 100,
            'max-w-3xl': paddingBottom >= 100
        }"
    >
        <div class="h-0 w-full bg-gray-200" :style="`padding-bottom: ${paddingBottom}%`"></div>
        <transition>
            <img
                :src="src"
                alt=""
                class="absolute w-full h-full top-0 left-0"
                v-if="loaded"
            >
        </transition>
    </picture>
</template>

<script>
export default {
    props: ['paddingBottom', 'src'],

    data () {
        return {
            loaded: false,
            shown: false
        }
    },

    methods: {
        onScroll () {
            const distanceFromEdge = this.$el.getBoundingClientRect().top - window.innerHeight
            if (distanceFromEdge < 500) {
                this.loaded = true
            }
            if (distanceFromEdge < -100) {
                this.shown = true
                window.removeEventListener('scroll', this.onScroll, { passive: true })
            }
        }
    },

    mounted () {
        window.addEventListener('scroll', this.onScroll, { passive: true })
        this.onScroll()
    },

    destroyed () {
        window.removeEventListener('scroll', this.onScroll, { passive: true })
    }
}
</script>
