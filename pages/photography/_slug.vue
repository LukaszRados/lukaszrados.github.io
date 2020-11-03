<template>
    <div>
        <div class="ml-16 max-w-6xl pr-4 lg:mx-auto lg:px-8 lg:my-16">
            <nuxt-link to="/photography">
                <back-button />
            </nuxt-link>
            <h1 class="text-xl lg:text-2xl mt-4">{{ title }}</h1>
            <div class="my-12 mr-4 md:grid md:grid-cols-2 md:items-center">
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
