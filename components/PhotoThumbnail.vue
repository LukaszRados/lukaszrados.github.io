<template>
    <a
        :href="photoUrl"
        class="block bg-gray-300 mb-6 mx-auto relative"
        :class="{ 'md:w-3/5': photo.height > photo.width }"
        @click.prevent="$emit('click')"
    >
        <div class="h-0 w-full" :style="`padding-bottom: ${photo.height / photo.width * 100}%`"></div>
        <img :src="thumbnailUrl" alt="" class="absolute top-0 left-0 w-full h-full" v-if="loaded">
    </a>
</template>

<script>
import { buildImageUrl } from './helpers'

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

    computed: {
        photoUrl() {
            return buildImageUrl(this.photo.url)
        },

        thumbnailUrl() {
            return buildImageUrl(this.photo.url, 'c_limit,h_410,w_410')
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
