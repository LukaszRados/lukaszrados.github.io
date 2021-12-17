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

body {
    @apply text-gray-900 transition-colors duration-300;
}

.dark body {
    @apply bg-gray-900 text-white;
}

::selection {
    background: rgba(253, 203, 110, .5);
    @apply text-gray-900;
}
</style>
