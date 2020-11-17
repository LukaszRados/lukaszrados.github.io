<template>
    <div>
        <Navigation />
        <Nuxt />
        <Footer />
    </div>
</template>

<script>
export default {
    head() {
        return {
            htmlAttrs: {
                lang: this.$i18n.locale
            }
        }
    },
}
</script>

<style lang="postcss">
@font-face {
    font-family: 'Barlow';
    font-style: normal;
    font-display: swap;
    font-weight: 400;
    src: url('/fonts/barlow-v5-latin-ext_latin-regular.woff2') format('woff2'),
         url('/fonts/barlow-v5-latin-ext_latin-regular.woff') format('woff'),
         url('/fonts/barlow-v5-latin-ext_latin-regular.ttf') format('truetype');
}

html {
    @apply font-sans;
    touch-action: manipulation;
}

::selection {
    background: rgba(253, 203, 110, .5);
    @apply text-black;
}
</style>
