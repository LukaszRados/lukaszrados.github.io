<template>
    <div class="mx-4 max-w-5xl md:mx-auto md:px-4 lg:px-8 lg:mt-16 lg:mb-32">
        <fade-in-section>
            <div class="md:grid md:grid-cols-2 md:gap-32">
                <div
                    v-for="post in posts"
                    :key="post.slug"
                    class="mb-24 md:mb-0"
                >
                    <nuxt-link :to="localePath(`/blog/${post.slug}`)" class="block bg-gray-300 dark:bg-gray-700 mb-5 relative">
                        <div class="h-0 w-full" :style="`padding-bottom: 66%`"></div>
                        <img :src="buildCoverImage(post.background, 'c_fill,h_280,w_420')" :alt="post.title" class="absolute top-0 left-0 w-full h-full">
                    </nuxt-link>
                    <h2 class="text-2xl leading-tight lg:text-3xl">
                        <nuxt-link :to="localePath(`/blog/${post.slug}`)" class="hover:underline">
                            {{ post.title }}
                        </nuxt-link>
                    </h2>
                    <div class="my-5 opacity-50">
                        {{ post.published_at }}
                    </div>
                    <p>{{ post.intro }}</p>
                </div>
            </div>
        </fade-in-section>
    </div>
</template>

<script>
import { buildImageUrl } from '@/helpers';

export default {
    async asyncData ({ $content, app }) {
        return {
            posts: await $content(`posts/${app.i18n.locale}`).only(['background', 'title', 'published_at', 'intro', 'slug']).sortBy('published_at', 'desc').fetch()
        }
    },

    head () {
        return {
            title: this.$t('blog.title'),
            meta: [
                { hid: 'og:title', name: 'og:title', content: this.$t('blog.title') },
                { hid: 'description', name: 'description', content: this.$t('blog.description') },     
                { hid: 'og:description', name: 'og:description', content: this.$t('blog.description') },
                { hid: 'og:url', name: 'og:url', content: this.$route.path },
            ]
        }
    },

    methods: {
        buildCoverImage(img, options) {
            return buildImageUrl(img, options)
        }
    }
}
</script>