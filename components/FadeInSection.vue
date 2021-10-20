<template>
    <div
        class="transition-all duration-500 ease-in-out transform"
        :class="loaded ? 'opacity-100' : 'opacity-0 translate-y-10'"
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