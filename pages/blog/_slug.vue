<template>
    <div class="ml-16 max-w-6xl pr-4 lg:mx-auto lg:px-8 lg:my-16">
        <nuxt-link to="/blog">
            <back-button />
        </nuxt-link>
        <h1 class="text-xl lg:text-2xl mb-6">{{ title }}</h1>
        <p class="text-2xl lg:text-3xl">{{ intro }}</p>
    </div>
</template>

<script>
export default {
    async asyncData({ $content, params }) {
        const post = await $content(`posts/${params.slug}`).fetch()
        return {
            ...post
        }
    }
}
</script>