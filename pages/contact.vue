<template>
    <div class="p-8 md:max-w-2xl lg:max-w-4xl mx-auto text-2xl lg:px-16 lg:py-32 lg:text-3xl">
        <div class="relative z-10">
            <fade-in-section>
                <p v-html="paragraph_1"></p>
            </fade-in-section>
        </div>
        <div class="relative h-48 lg:h-64 my-8">
            <photo-parallax speed="0.3">
                <div class="w-64 lg:w-96 bg-gray-200 absolute top-0 right-0 mt-32 lg:mt-48 lg:-mr-16">
                    <div class="h-0 w-full" style="padding-bottom: 125%"></div>
                </div>
            </photo-parallax>
        </div>
        <div class="relative z-10">
            <fade-in-section>
                <p v-html="paragraph_2"></p>
            </fade-in-section>
        </div>
        <div class="relative h-32 lg:h-48 my-8">
            <photo-parallax speed="0.3">
                <div class="w-96 lg:w-120 bg-gray-200 absolute top-0 left-0 mt-32 lg:-ml-16">
                    <div class="h-0 w-full" style="padding-bottom: 75%"></div>
                </div>
            </photo-parallax>
        </div>
        <div class="relative z-10 mb-16 lg:mb-32">
            <fade-in-section>
                <p v-html="paragraph_3"></p>
            </fade-in-section>
        </div>
    </div>
</template>

<script>
export default {
    async asyncData({ $content, app }) {
        const page = await $content(`${app.i18n.locale}/contact`).fetch()
        return {
            ...page
        }
    },

    data () {
        return {
            loaded: false,
        }
    },

    mounted () {
        this.loaded = true
    }
}
</script>