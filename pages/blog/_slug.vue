<template>
    <article>
        <fade-in-section>
            <div class="ml-16 max-w-4xl pr-4 mb-12 lg:mx-auto lg:px-8 lg:my-16">
                <nuxt-link :to="localePath('/blog')">
                    <back-button />
                </nuxt-link>
                <h1 class="text-xl lg:text-2xl mb-6 mt-4">{{ post.title }}</h1>
                <p class="text-2xl lg:text-3xl">{{ post.intro }}</p>
            </div>
            <div class="content">
                <nuxt-content
                    :document="post"
                />
                <div class="w-8 h-px bg-black mx-auto my-8 lg:my-12"></div>
                <p>If you would like to see more photos, feel free to follow me on Instagram where I regularly publish new pictures.</p>
            </div>
        </fade-in-section>
    </article>
</template>

<script>
export default {
    async asyncData({ $content, params, app }) {
        const post = await $content(`posts/${app.i18n.locale}/${params.slug}`).fetch()
        return {
            post
        }
    },
}
</script>

<style lang="postcss">
.content h2, 
.content h3, 
.content p {
    @apply max-w-4xl px-4 mx-auto;
}

.content h2 {
    @apply text-2xl mt-8 mb-4;
}

.content h3 {
    @apply text-xl mt-8 mb-4;
}

.content p {
    @apply text-lg my-4;
}

.content a {
    @apply underline;
}

.content a:hover {
    @apply no-underline;
}

@screen md {
    .content p {
        @apply text-xl my-6;
    }

    .content h2 {
        @apply text-3xl mt-12 mb-6;
    }

    .content h3 {
        @apply text-2xl mt-12 mb-6;
    }
}

@screen lg { 
    .content h2,
    .content h3,
    .content p {
        @apply mx-auto px-8;
    }

    .content p {
        @apply my-8;
    }
}
</style>
