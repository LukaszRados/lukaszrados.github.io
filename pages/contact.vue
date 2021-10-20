<template>
    <fade-in-section>
        <div class="p-8 mx-auto text-2xl md:max-w-2xl lg:px-16 lg:py-32 lg:max-w-4xl lg:text-3xl space-y-8 md:space-y-10">
            <p v-html="paragraph_1"></p>
            <p v-html="paragraph_2"></p>
            <p v-html="paragraph_3"></p>
        </div>

        <div class="max-w-1200 mx-auto md:flex md:items-center md:mb-16">
            <div class="relative w-full mb-4 md:mb-0 md:mx-4">
                <div class="h-0 w-full" style="padding-bottom: 133%"></div>
                <img src="/info/photography.jpg" alt="" class="absolute top-0 left-0 w-full h-full">
            </div>
            <div class="relative w-full md:mx-4 md:-mt-8 lg:-mt-32">
                <div class="h-0 w-full" style="padding-bottom: 133%"></div>
                <img src="/info/sailing.jpg" alt="" class="absolute top-0 left-0 w-full h-full">
            </div>
        </div>
    </fade-in-section>
</template>

<script>
export default {
    async asyncData({ $content, app }) {
        return await $content(`${app.i18n.locale}/contact`).fetch()
    },

    head () {
        return {
            title: this.$t('contact.title'),
            meta: [
                { hid: 'og:title', name: 'og:title', content: this.$t('contact.title') },
                { hid: 'description', name: 'description', content: this.$t('globals.description') },     
                { hid: 'og:description', name: 'og:description', content: this.$t('globals.description') },
                { hid: 'og:url', name: 'og:url', content: this.$route.path },
            ]
        }
    },
}
</script>
