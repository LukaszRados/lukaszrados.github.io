<template>
    <div>
        <div class="max-w-6xl px-4 lg:mx-auto lg:px-8 lg:my-16">
            <div class="max-w-4xl mx-auto"> 
                <nuxt-link :to="localePath('/photography')">
                    <back-button />
                </nuxt-link>
                <h1 class="text-xl lg:text-2xl mt-4">{{ title }}</h1>
            </div>
            <div class="my-12 md:grid md:grid-cols-2 md:items-center">
                <div
                    class="md:p-16"
                    v-for="photo in photos"
                    :key="photo.url"
                >
                    <photo-thumbnail :photo="photo" @click="open(photo)" />
                </div>
            </div>
        </div>
        <transition
            enter-class="h-0 opacity-0"
            enter-to-class="h-16 opacity-100"
            enter-active-class="transition-all duration-300"
            leave-class="opactiy-100 h-16"
            leave-to-class="h-0 opacity-0"
            leave-active-class="transition-all duration-300"
        >
            <lightbox
                :photos="photos"
                :photo="photo"
                v-if="isLightboxOpen"
                @close="close"
            />
        </transition>
    </div>
</template>

<script>
export default {
    async asyncData({ $content, params, app }) {
        const gallery = await $content(`galleries/${params.slug}`).fetch()
        return {
            ...gallery,
            title: gallery[`title_${app.i18n.locale}`].replace('<br>', ' ')
        }
    },

    data () {
        return {
            isLightboxOpen: false,
            photo: null,
        }
    },

    head () {
        return {
            title: this.title,
            meta: [
                { hid: 'og:title', name: 'og:title', content: this.title },
                { hid: 'description', name: 'description', content: this.$t('globals.description') },     
                { hid: 'og:description', name: 'og:description', content: this.$t('globals.description') },
                { hid: 'og:url', name: 'og:url', content: this.$route.path },
                { hid: 'og:image', property: 'og:image', content: this.photos[0].url },
            ]
        }
    },

    methods: {
        open (photo) {
            this.photo = photo
            this.isLightboxOpen = true

        },

        close () {
            this.isLightboxOpen = false
        }
    }
}
</script>
