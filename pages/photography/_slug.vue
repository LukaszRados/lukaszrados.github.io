<template>
    <div class="ml-16 max-w-6xl pr-4 lg:mx-auto lg:px-8 lg:my-16">
        <nuxt-link to="/photography">
            <back-button />
        </nuxt-link>
        <h1 class="text-xl lg:text-2xl mt-4">{{ title }}</h1>
        <div class="my-12 mr-4 md:flex md:flex-wrap md:items-center">
            <div
                class="md:w-1/2 md:p-16"
                v-for="photo in photos"
                :key="photo.url"
            >
                <photo-thumbnail :photo="photo" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    async asyncData({ $content, params }) {
        const gallery = await $content(`galleries/${params.slug}`).fetch()
        return {
            ...gallery,
            title: gallery.title.replace('<br>', ' ')
        }
    },
}
</script>
