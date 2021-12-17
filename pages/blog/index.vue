<template>
    <div class="ml-16 mr-4 max-w-4xl md:mx-auto md:px-4 lg:px-8 lg:mt-16 lg:mb-32">
        <div class="md:grid md:grid-cols-2 md:gap-32">
            <div
                v-for="post in posts"
                :key="post.slug"
                class="mb-24 md:mb-0"
            >
                <fade-in-section>
                    <h2 class="text-2xl leading-tight lg:text-3xl">
                        <nuxt-link :to="localePath(`/blog/${post.slug}`)" class="hover:underline">
                            {{ post.title }}
                        </nuxt-link>
                    </h2>
                    <div class="my-5 opacity-50">
                        {{ post.published_at }}
                    </div>
                    <p>{{ post.intro }}</p>
                </fade-in-section>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    async asyncData ({ $content, app }) {
        return {
            posts: await $content(`posts/${app.i18n.locale}`).only(['title', 'published_at', 'intro', 'slug']).sortBy('published_at', 'desc').fetch()
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
    }
}
</script>