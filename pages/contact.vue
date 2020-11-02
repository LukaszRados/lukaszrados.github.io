<template>
    <div class="p-8 md:max-w-2xl lg:max-w-4xl mx-auto text-2xl lg:px-16 lg:py-32 lg:text-3xl">
        <div class="relative z-10">
            <fade-in-section>
                <p>Front End Developer passionate about JavaScript, Vue and Laravel. I was lucky to work for some great companies such as Booking.com, Woblink and e-words.</p>
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
                <p>A few years ago I was bit by the travel bug and now take any opportunity to explore new countries in search of beautiful places to photograph.</p>
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
                <p>After few years of planning, in September 2019 I have started my gap year. Together with a group of friends we bought and renovated an old sailing yacht. For a year we were exploring the coast of Europe. Our adventure can be followed on <a href="#" class="underline hover:no-underline" target="_blank">our YouTube channel</a>.</p>
            </fade-in-section>
        </div>
    </div>
</template>

<script>
export default {
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