<template>
    <a
        :href="photo.url"
        class="block bg-gray-300 mb-6 mx-auto relative transition-all duration-500 transform"
        :class="{
            'md:w-3/5': photo.height > photo.width,
            'translate-y-20 opacity-50': !loaded
        }"
        @click.prevent="$emit('click')"
    >
        <div class="h-0 w-full" :style="`padding-bottom: ${photo.height / photo.width * 100}%`"></div>
        <img :src="photo.url_small" alt="" class="absolute top-0 left-0 w-full h-full" v-if="loaded">
    </a>
</template>

<script>
export default {
    props: ['photo'],

    data () {
        return {
            loaded: false
        }
    },

    mounted () {
        window.addEventListener('scroll', this.load, { passive: true })
        this.load()
    },

    destroyed () {
        if (!this.loaded) {
            window.removeEventListener('scroll', this.load, { passive: true })
        }
    },

    methods: {
        load () {
            if (this.$el.getBoundingClientRect().top - window.innerHeight < 100) {
                this.loaded = true
                window.removeEventListener('scroll', this.load, { passive: true })
            }
        }
    }
}
</script>
