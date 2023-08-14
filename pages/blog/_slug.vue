<template>
    <article>
        <fade-in-section>
            <div class="max-w-4xl px-4 mb-12 lg:mx-auto lg:px-8 lg:my-16">
                <nuxt-link :to="localePath('/blog')">
                    <back-button />
                </nuxt-link>
                <h1 class="text-2xl lg:text-5xl leading-snug mb-6 mt-4 lg:my-8">{{ post.title }}</h1>
                <p class="text-xl lg:text-3xl">{{ post.intro }}</p>
            </div>
            <div class="content">
                <nuxt-content :document="post" />
                <div class="w-8 h-px bg-black dark:bg-white mx-auto my-8 lg:my-12"></div>
                <p>{{ $t('blog.followMe') }}</p>
            </div>
        </fade-in-section>
    </article>
</template>

<script>
import { buildImageUrl } from '@/helpers';
export default {
    async asyncData({ $content, params, app }) {
        return {
            post: await $content(`posts/${app.i18n.locale}/${params.slug}`).fetch()
        }
    },

    head () {
        return {
            title: this.post.title,
            meta: [
                { hid: 'og:title', name: 'og:title', content: this.post.title },
                { hid: 'description', name: 'description', content: this.post.intro },     
                { hid: 'og:description', name: 'og:description', content: this.post.intro },
                { hid: 'og:url', name: 'og:url', content: this.$route.path },
                { hid: 'og:image', name: 'og:image', content: buildImageUrl(this.post.background, 'c_fill,h_630,w_1200') }
            ]
        }
    }
}
</script>

<style lang="postcss">
.content h2, 
.content h3, 
.content p,
.content ul {
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

.content ul {
    @apply list-disc ml-8;
}

.content li {
    @apply text-lg my-2;
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

    .content li {
        @apply text-xl;
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
    .content p,
    .content ul {
        @apply mx-auto px-8;
    }

    .content p {
        @apply my-8;
    }
}
</style>
