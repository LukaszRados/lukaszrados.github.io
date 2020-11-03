<template>
    <div class="ml-16 mr-4 max-w-4xl md:mx-auto lg:px-8 lg:mt-16 lg:mb-32">
        <div class="mb-16">Filtry</div>
        <div class="md:grid md:grid-cols-2 md:gap-32">
            <div
                v-for="post in posts"
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
                        <span class="w-1/2 lg:w-2/3">#{{ post.category }}</span>
                    </div>
                    <p>{{ post.intro }}</p>
                </fade-in-section>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    async asyncData ({ $content }) {
        const posts = await $content('posts').fetch()
        console.log(posts)
        return {
            posts
        }
    }
}
</script>