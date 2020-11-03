<template>
    <div class="ml-16 mr-4 max-w-4xl md:mx-auto lg:px-8 lg:mt-16 lg:mb-32">
        <div class="mb-16">
            <button
                type="button"
                class="mr-4 hover:underline focus:outline-none"
                v-for="category in categories"
                :key="category.slug"
                :class="{ 'underline': currentCategory === category.slug}"
                @click="currentCategory = category.slug"
            >#{{ category.title }}</button>
        </div>
        <div class="md:grid md:grid-cols-2 md:gap-32">
            <div
                v-for="post in postsFiltered"
                :key="post.slug"
                class="mb-24 md:mb-0"
            >
                <fade-in-section>
                    <h2 class="text-2xl leading-tight lg:text-3xl">
                        <nuxt-link :to="`/blog/${post.slug}`" class="hover:underline">
                            {{ post.title }}
                        </nuxt-link>
                    </h2>
                    <div class="flex items-center my-5">
                        <span class="w-1/2 lg:w-1/3">{{ post.published_at }}</span>
                        <span class="w-1/2 lg:w-2/3">
                            <button
                                class="hover:underline focus:outline-none"
                                type="button"
                                @click="currentCategory = post.category"
                            >#{{ $t(`blog.categories.${post.category}`) }}</button>
                        </span>
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
        const posts = await $content(`posts/${app.i18n.locale}`).sortBy('published_at', 'desc').fetch()
        return {
            posts
        }
    },

    data () {
        return {
            currentCategory: '',
            categories: [{
                slug: '',
                title: this.$t('blog.categories.all')
            }, {
                slug: 'photography',
                title: this.$t('blog.categories.photography')
            }, {
                slug: 'coding',
                title: this.$t('blog.categories.coding')
            }]
        }
    },

    computed: {
        postsFiltered () {
            return this.currentCategory ? this.posts.filter(post => post.category === this.currentCategory) : this.posts
        }
    }
}
</script>