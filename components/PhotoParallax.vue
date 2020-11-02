<template>
    <div
        :style="`transform: translateY(${translate}px)`"
        :class="{ 'opacity-0': !loaded, 'opacity-100': loaded }"
        class="transition-opacity duration-300"
    >
        <slot />
    </div>
</template>

<script>
export default {
    props: [ 'speed' ],

    data () {
        return {
            translate: 0,
            loaded: false,
        }
    },

    mounted () {
        window.addEventListener('scroll', this.onScroll, { passive: true })
        this.$nextTick(() => {
            this.onScroll()
            this.loaded = true
        })
    },

    destroyed () {
        window.removeEventListener('scroll', this.onScroll, { passive: true })
    },

    methods: {
        onScroll () {
            if (this.$el.getBoundingClientRect().top - window.innerHeight < 0) {
                this.translate = (this.$el.getBoundingClientRect().top - window.innerHeight) * this.speed
            }
        }
    }
}
</script>