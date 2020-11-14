<template>
    <div
        class="transition-all duration-500 ease-in-out transform"
        :class="{
            'opacity-0 translate-y-10': !loaded,
            'opacity-100': loaded    
        }"
    >
        <slot />
    </div>
</template>

<script>
export default {
    data () {
        return {
            loaded: false,
        }
    },
    
    methods: {
        onScroll () {
            if (this.$el.getBoundingClientRect().top - window.innerHeight < -100) {
                this.loaded = true
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